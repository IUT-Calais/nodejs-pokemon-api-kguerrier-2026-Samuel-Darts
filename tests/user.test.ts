import request from 'supertest';
import { app } from '../src';
import { prismaMock } from './jest.setup';

describe('User API', () => {
  describe('POST /users', () => {
    it('crée un utilisateur avec succès', async () => {
      const newUser = { email: 'test@example.com', password: 'password123' };
      const createdUser = { id: 1, email: 'test@example.com' };

      prismaMock.user.findUnique.mockResolvedValue(null);
      prismaMock.user.create.mockResolvedValue({
        ...createdUser,
        password: 'hashedPassword',
      });

      const response = await request(app).post('/users').send(newUser);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(createdUser);
    });

    it('erreur 400 : email déjà existant', async () => {
      const newUser = { email: 'existing@example.com', password: 'password123' };
      const existingUser = { id: 1, email: 'existing@example.com', password: 'hashedPassword' };

      prismaMock.user.findUnique.mockResolvedValue(existingUser);

      const response = await request(app).post('/users').send(newUser);

      expect(response.status).toBe(400);
      expect(response.body.error).toContain('existe déjà');
    });

    it('erreur 400 : email manquant', async () => {
      const newUser = { password: 'password123' };

      const response = await request(app).post('/users').send(newUser);

      expect(response.status).toBe(400);
      expect(response.body.error).toContain('email');
    });

    it('erreur 400 : mot de passe manquant', async () => {
      const newUser = { email: 'test@example.com' };

      const response = await request(app).post('/users').send(newUser);

      expect(response.status).toBe(400);
      expect(response.body.error).toContain('password');
    });

    it('masque le mot de passe dans la réponse', async () => {
      const newUser = { email: 'test@example.com', password: 'password123' };
      const createdUser = { id: 1, email: 'test@example.com' };

      prismaMock.user.findUnique.mockResolvedValue(null);
      prismaMock.user.create.mockResolvedValue({
        ...createdUser,
        password: 'hashedPassword',
      });

      const response = await request(app).post('/users').send(newUser);

      expect(response.status).toBe(201);
      expect(response.body.password).toBeUndefined();
    });
  });
});