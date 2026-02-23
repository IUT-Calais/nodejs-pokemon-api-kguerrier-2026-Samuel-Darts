import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { pokemonCardsRouter } from './routes/pokemon-cards.route';
import { usersRouter } from './routes/users.route';
import { swaggerSpec } from './swagger';

export const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/', pokemonCardsRouter);
app.use('/', usersRouter);

export const server = app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
  console.log(`Documentation disponible sur http://localhost:${port}/api-docs`);
});

export function stopServer() {
  server.close();
}
