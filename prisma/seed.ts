import { PrismaClient, PokemonType } from '../src/generated/prisma';
import bcryptjs from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Créer l'utilisateur admin du TP
  const hashedPassword = await bcryptjs.hash('admin', 10);
  const user = await prisma.user.upsert({
    where: { email: 'admin@gmail.com' },
    update: {},
    create: {
      email: 'admin@gmail.com',
      password: hashedPassword,
    },
  });

  // Créer quelques pokémons du TP
  const pokemonCards = [
    {
      name: 'Pikachu',
      pokedexId: 25,
      type: PokemonType.Electric,
      lifePoints: 35,
      size: 0.4,
      weight: 6.0,
      imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    },
    {
      name: 'Charizard',
      pokedexId: 6,
      type: PokemonType.Fire,
      lifePoints: 78,
      size: 1.7,
      weight: 90.5,
      imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
    },
    {
      name: 'Blastoise',
      pokedexId: 9,
      type: PokemonType.Water,
      lifePoints: 79,
      size: 1.6,
      weight: 85.5,
      imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
    },
    {
      name: 'Venusaur',
      pokedexId: 3,
      type: PokemonType.Grass,
      lifePoints: 80,
      size: 2.0,
      weight: 100.0,
      imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
    },
    {
      name: 'Dragonite',
      pokedexId: 149,
      type: PokemonType.Dragon,
      lifePoints: 91,
      size: 2.2,
      weight: 210.0,
      imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png',
    },
  ];

  for (const pokemon of pokemonCards) {
    await prisma.pokemonCard.upsert({
      where: { pokedexId: pokemon.pokedexId },
      update: {},
      create: pokemon,
    });
  }

  console.log('Seed completed - User et pokémons créés!');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
