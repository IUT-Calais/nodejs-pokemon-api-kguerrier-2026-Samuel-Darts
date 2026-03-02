import request from 'supertest';
import { app } from '../src';
import { prismaMock } from './jest.setup';

describe('PokemonCard API', () => {
  const mockToken = 'mockedToken';
  const authHeader = { Authorization: `Bearer ${mockToken}` };

  it('liste tous les pokémons', async () => {
    const mockCards = [
      { id: 1, name: 'Pikachu', pokedexId: 25, type: 'Electric', lifePoints: 35, size: 0.4, weight: 6.0, imageUrl: 'url' },
      { id: 2, name: 'Charizard', pokedexId: 6, type: 'Fire', lifePoints: 78, size: 1.7, weight: 90.5, imageUrl: 'url' },
    ];

    prismaMock.pokemonCard.findMany.mockResolvedValue(mockCards);

    const response = await request(app).get('/pokemons-cards');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockCards);
  });

  it('récupère un pokémon par ID', async () => {
    const mockCard = { id: 1, name: 'Pikachu', pokedexId: 25, type: 'Electric', lifePoints: 35, size: 0.4, weight: 6.0, imageUrl: 'url' };

    prismaMock.pokemonCard.findUnique.mockResolvedValue(mockCard);

    const response = await request(app).get('/pokemons-cards/1');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockCard);
  });

  it('retourne 404 si pokémon inexistant', async () => {
    prismaMock.pokemonCard.findUnique.mockResolvedValue(null);

    const response = await request(app).get('/pokemons-cards/999');

    expect(response.status).toBe(404);
    expect(response.body.error).toContain('n\'existe pas');
  });

  it('retourne 400 avec ID invalide au GET', async () => {
    const response = await request(app).get('/pokemons-cards/invalid');

    expect(response.status).toBe(400);
    expect(response.body.error).toContain('invalide');
  });

  it('crée un pokémon avec authentification', async () => {
    const newCard = {
      name: 'Bulbasaur',
      pokedexId: 1,
      type: 'Grass',
      lifePoints: 45,
      size: 0.7,
      weight: 6.9,
      imageUrl: 'url',
    };
    const createdCard = { id: 1, ...newCard };

    prismaMock.pokemonCard.findUnique.mockResolvedValue(null);
    prismaMock.pokemonCard.create.mockResolvedValue(createdCard);

    const response = await request(app).post('/pokemon-cards').set(authHeader).send(newCard);

    expect(response.status).toBe(201);
    expect(response.body).toEqual(createdCard);
  });

  it('retourne 401 sans authentification au POST', async () => {
    const newCard = {
      name: 'Bulbasaur',
      pokedexId: 1,
      type: 'Grass',
      lifePoints: 45,
    };

    const response = await request(app).post('/pokemon-cards').send(newCard);

    expect(response.status).toBe(401);
  });

  it('retourne 400 avec champs manquants au POST', async () => {
    const incompleteCard = { name: 'Bulbasaur' };

    const response = await request(app).post('/pokemon-cards').set(authHeader).send(incompleteCard);

    expect(response.status).toBe(400);
    expect(response.body.error).toContain('manquants');
  });

  it('retourne 400 avec type invalide au POST', async () => {
    const newCard = {
      name: 'Bulbasaur',
      pokedexId: 1,
      type: 'InvalidType',
      lifePoints: 45,
    };

    prismaMock.pokemonCard.findUnique.mockResolvedValue(null);

    const response = await request(app).post('/pokemon-cards').set(authHeader).send(newCard);

    expect(response.status).toBe(400);
    expect(response.body.error).toContain('n\'existe pas');
  });

  it('modifie un pokémon existant', async () => {
    const updateData = { name: 'PikachuElite', lifePoints: 50 };
    const updatedCard = { id: 1, name: 'PikachuElite', pokedexId: 25, type: 'Electric', lifePoints: 50, size: 0.4, weight: 6.0, imageUrl: 'url' };

    prismaMock.pokemonCard.findUnique.mockResolvedValueOnce({ id: 1, name: 'Pikachu', pokedexId: 25, type: 'Electric', lifePoints: 35, size: 0.4, weight: 6.0, imageUrl: 'url' });
    prismaMock.pokemonCard.findUnique.mockResolvedValueOnce(null);
    prismaMock.pokemonCard.update.mockResolvedValue(updatedCard);

    const response = await request(app).patch('/pokemon-cards/1').set(authHeader).send(updateData);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(updatedCard);
  });

  it('supprime un pokémon', async () => {
    const existingCard = { id: 1, name: 'Pikachu', pokedexId: 25, type: 'Electric', lifePoints: 35, size: null, weight: null, imageUrl: null };

    prismaMock.pokemonCard.findUnique.mockResolvedValue(existingCard);
    prismaMock.pokemonCard.delete.mockResolvedValue(existingCard);

    const response = await request(app).delete('/pokemon-cards/1').set(authHeader);

    expect(response.status).toBe(204);
  });

  it('retourne 401 sans authentification au DELETE', async () => {
    const response = await request(app).delete('/pokemon-cards/1');

    expect(response.status).toBe(401);
  });

  it('retourne 404 si pokémon inexistant au DELETE', async () => {
    prismaMock.pokemonCard.findUnique.mockResolvedValue(null);

    const response = await request(app).delete('/pokemon-cards/999').set(authHeader);

    expect(response.status).toBe(404);
    expect(response.body.error).toContain('n\'existe pas');
  });

  it('retourne 400 avec ID invalide au DELETE', async () => {
    const response = await request(app).delete('/pokemon-cards/invalid').set(authHeader);

    expect(response.status).toBe(400);
    expect(response.body.error).toContain('invalide');
  });
});
