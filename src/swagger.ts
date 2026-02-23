export const swaggerSpec = {
  openapi: '3.0.0',
  info: {
    title: 'Pokémon Card API',
    version: '1.0.0',
    description: 'API pour gérer une collection de cartes Pokémon',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      PokemonCard: {
        type: 'object',
        required: ['name', 'pokedexId', 'type', 'lifePoints'],
        properties: {
          id: {
            type: 'integer',
            description: 'ID unique de la carte',
          },
          name: {
            type: 'string',
            description: 'Nom du Pokémon',
          },
          pokedexId: {
            type: 'integer',
            description: 'ID Pokédex du Pokémon',
          },
          type: {
            type: 'string',
            enum: ['Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Dark', 'Steel', 'Fairy'],
            description: 'Type du Pokémon',
          },
          lifePoints: {
            type: 'integer',
            description: 'Points de vie',
          },
          size: {
            type: 'number',
            nullable: true,
            description: 'Taille du Pokémon',
          },
          weight: {
            type: 'number',
            nullable: true,
            description: 'Poids du Pokémon',
          },
          imageUrl: {
            type: 'string',
            nullable: true,
            description: 'URL de l\'image du Pokémon',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description: 'Date de création',
          },
          updatedAt: {
            type: 'string',
            format: 'date-time',
            description: 'Date de dernière modification',
          },
        },
      },
      User: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          id: {
            type: 'integer',
            description: 'ID unique de l\'utilisateur',
          },
          email: {
            type: 'string',
            format: 'email',
            description: 'Email de l\'utilisateur',
          },
          password: {
            type: 'string',
            description: 'Mot de passe (hashé en base)',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description: 'Date de création',
          },
          updatedAt: {
            type: 'string',
            format: 'date-time',
            description: 'Date de dernière modification',
          },
        },
      },
      Error: {
        type: 'object',
        properties: {
          error: {
            type: 'string',
            description: 'Message d\'erreur',
          },
        },
      },
    },
  },
  paths: {
    '/pokemons-cards': {
      get: {
        summary: 'Obtenir la liste de tous les Pokémons',
        tags: ['Pokémon Cards'],
        responses: {
          '200': {
            description: 'Liste de tous les Pokémons',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/PokemonCard',
                  },
                },
              },
            },
          },
          '500': {
            description: 'Erreur serveur',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
        },
      },
    },
    '/pokemons-cards/{pokemonCardId}': {
      get: {
        summary: 'Obtenir un Pokémon spécifique',
        tags: ['Pokémon Cards'],
        parameters: [
          {
            name: 'pokemonCardId',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
            description: 'ID du Pokémon',
          },
        ],
        responses: {
          '200': {
            description: 'Détails du Pokémon',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/PokemonCard' },
              },
            },
          },
          '400': {
            description: 'ID invalide',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
          '404': {
            description: 'Pokémon non trouvé',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
          '500': {
            description: 'Erreur serveur',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
        },
      },
    },
    '/pokemon-cards': {
      post: {
        summary: 'Créer un nouveau Pokémon (authentification requise)',
        tags: ['Pokémon Cards'],
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/PokemonCard' },
            },
          },
        },
        responses: {
          '201': {
            description: 'Pokémon créé avec succès',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/PokemonCard' },
              },
            },
          },
          '400': {
            description: 'Requête invalide',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
          '401': {
            description: 'Non authentifié',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
          '500': {
            description: 'Erreur serveur',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
        },
      },
    },
    '/pokemon-cards/{pokemonCardId}': {
      patch: {
        summary: 'Modifier un Pokémon (authentification requise)',
        tags: ['Pokémon Cards'],
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            name: 'pokemonCardId',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
            description: 'ID du Pokémon',
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/PokemonCard' },
            },
          },
        },
        responses: {
          '200': {
            description: 'Pokémon modifié avec succès',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/PokemonCard' },
              },
            },
          },
          '400': {
            description: 'Requête invalide',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
          '401': {
            description: 'Non authentifié',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
          '404': {
            description: 'Pokémon non trouvé',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
          '500': {
            description: 'Erreur serveur',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
        },
      },
      delete: {
        summary: 'Supprimer un Pokémon (authentification requise)',
        tags: ['Pokémon Cards'],
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            name: 'pokemonCardId',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
            description: 'ID du Pokémon',
          },
        ],
        responses: {
          '200': {
            description: 'Pokémon supprimé avec succès',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: { type: 'string' },
                  },
                },
              },
            },
          },
          '400': {
            description: 'ID invalide',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
          '401': {
            description: 'Non authentifié',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
          '404': {
            description: 'Pokémon non trouvé',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
          '500': {
            description: 'Erreur serveur',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
        },
      },
    },
    '/users': {
      post: {
        summary: 'Créer un nouvel utilisateur',
        tags: ['Users'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['email', 'password'],
                properties: {
                  email: { type: 'string', format: 'email' },
                  password: { type: 'string' },
                },
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Utilisateur créé avec succès',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    id: { type: 'integer' },
                    email: { type: 'string' },
                  },
                },
              },
            },
          },
          '400': {
            description: 'Requête invalide',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
          '500': {
            description: 'Erreur serveur',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
        },
      },
    },
    '/users/login': {
      post: {
        summary: 'Se connecter',
        tags: ['Users'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['email', 'password'],
                properties: {
                  email: { type: 'string', format: 'email' },
                  password: { type: 'string' },
                },
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Connexion réussie',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    token: { type: 'string' },
                    user: {
                      type: 'object',
                      properties: {
                        id: { type: 'integer' },
                        email: { type: 'string' },
                      },
                    },
                  },
                },
              },
            },
          },
          '400': {
            description: 'Mot de passe incorrect',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
          '404': {
            description: 'Utilisateur non trouvé',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
          '500': {
            description: 'Erreur serveur',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
        },
      },
    },
  },
};
