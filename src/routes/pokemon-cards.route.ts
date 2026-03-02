import { Request, Response, Router } from 'express';
import { prisma } from '../database';
import { authMiddleware } from '../middleware/auth.middleware';

export const pokemonCardsRouter = Router();

// GET - Obtenir la liste de tous les pokémons
pokemonCardsRouter.get('/pokemons-cards', async (_req: Request, res: Response): Promise<void> => {
  try {
    const pokemonCards = await prisma.pokemonCard.findMany();
    res.status(200).json(pokemonCards);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// GET - Obtenir un pokémon spécifique par ID
pokemonCardsRouter.get('/pokemons-cards/:pokemonCardId', async (req: Request, res: Response): Promise<void> => {
  try {
    const { pokemonCardId } = req.params;
    const id = parseInt(pokemonCardId);

    if (isNaN(id)) {
      res.status(400).json({ error: 'ID invalide' });
      return;
    }

    const pokemonCard = await prisma.pokemonCard.findUnique({
      where: { id },
    });

    if (!pokemonCard) {
      res.status(404).json({ error: `Le pokémon avec l'id ${id} n'existe pas` });
      return;
    }

    res.status(200).json(pokemonCard);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// POST - Créer un nouveau pokémon (protégé - authentification requise)
pokemonCardsRouter.post('/pokemon-cards', authMiddleware, async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, pokedexId, type, lifePoints, size, weight, imageUrl } = req.body;

    // Vérifier les champs requis
    if (!name || pokedexId === undefined || !type || lifePoints === undefined) {
      const missingFields = [];
      if (!name) missingFields.push('name');
      if (pokedexId === undefined) missingFields.push('pokedexId');
      if (!type) missingFields.push('type');
      if (lifePoints === undefined) missingFields.push('lifePoints');
      res.status(400).json({ error: `Champs manquants : ${missingFields.join(', ')}` });
      return;
    }

    // Vérifier si le type existe dans l'enum
    const validTypes = ['Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Dark', 'Steel', 'Fairy'];
    if (!validTypes.includes(type)) {
      res.status(400).json({ error: `Le type ${type} n'existe pas` });
      return;
    }

    // Vérifier les doublons
    const existingByName = await prisma.pokemonCard.findUnique({
      where: { name },
    });
    if (existingByName) {
      res.status(400).json({ error: 'Un pokémon avec ce nom existe déjà' });
      return;
    }

    const existingByPokedexId = await prisma.pokemonCard.findUnique({
      where: { pokedexId },
    });
    if (existingByPokedexId) {
      res.status(400).json({ error: 'Un pokémon avec ce pokedexId existe déjà' });
      return;
    }

    // Créer le pokémon
    const pokemonCard = await prisma.pokemonCard.create({
      data: {
        name,
        pokedexId,
        type,
        lifePoints,
        size: size || null,
        weight: weight || null,
        imageUrl: imageUrl || null,
      },
    });

    res.status(201).json(pokemonCard);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// PATCH - Modifier un pokémon (protégé - authentification requise)
pokemonCardsRouter.patch('/pokemon-cards/:pokemonCardId', authMiddleware, async (req: Request, res: Response): Promise<void> => {
  try {
    const { pokemonCardId } = req.params;
    const id = parseInt(pokemonCardId);

    if (isNaN(id)) {
      res.status(400).json({ error: 'ID invalide' });
      return;
    }

    const { name, pokedexId, type, lifePoints, size, weight, imageUrl } = req.body;

    // Vérifier que le pokémon existe
    const existingPokemon = await prisma.pokemonCard.findUnique({
      where: { id },
    });

    if (!existingPokemon) {
      res.status(404).json({ error: `Le pokémon avec l'id ${id} n'existe pas` });
      return;
    }

    // Vérifier si le type existe dans l'enum
    if (type) {
      const validTypes = ['Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Dark', 'Steel', 'Fairy'];
      if (!validTypes.includes(type)) {
        res.status(400).json({ error: `Le type ${type} n'existe pas` });
        return;
      }
    }

    // Vérifier les doublons (si name est modifié)
    if (name && name !== existingPokemon.name) {
      const duplicate = await prisma.pokemonCard.findUnique({
        where: { name },
      });
      if (duplicate) {
        res.status(400).json({ error: 'Un pokémon avec ce nom existe déjà' });
        return;
      }
    }

    // Vérifier les doublons (si pokedexId est modifié)
    if (pokedexId !== undefined && pokedexId !== existingPokemon.pokedexId) {
      const duplicate = await prisma.pokemonCard.findUnique({
        where: { pokedexId },
      });
      if (duplicate) {
        res.status(400).json({ error: 'Un pokémon avec ce pokedexId existe déjà' });
        return;
      }
    }

    // Mettre à jour le pokémon
    const updatedPokemon = await prisma.pokemonCard.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(pokedexId !== undefined && { pokedexId }),
        ...(type && { type }),
        ...(lifePoints !== undefined && { lifePoints }),
        ...(size !== undefined && { size }),
        ...(weight !== undefined && { weight }),
        ...(imageUrl !== undefined && { imageUrl }),
      },
    });

    res.status(200).json(updatedPokemon);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// DELETE - Supprimer un pokémon (protégé - authentification requise)
pokemonCardsRouter.delete('/pokemon-cards/:pokemonCardId', authMiddleware, async (req: Request, res: Response): Promise<void> => {
  try {
    const { pokemonCardId } = req.params;
    const id = parseInt(pokemonCardId);

    if (isNaN(id)) {
      res.status(400).json({ error: 'ID invalide' });
      return;
    }

    // Vérifier que le pokémon existe
    const existingPokemon = await prisma.pokemonCard.findUnique({
      where: { id },
    });

    if (!existingPokemon) {
      res.status(404).json({ error: `Le pokémon avec l'id ${id} n'existe pas` });
      return;
    }

    // Supprimer le pokémon
    await prisma.pokemonCard.delete({
      where: { id },
    });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});
