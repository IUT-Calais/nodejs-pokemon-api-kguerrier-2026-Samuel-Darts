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

  describe('POST /users/login', () => {
    it('connecte un utilisateur et retourne un token', async () => {
      const loginData = { email: 'test@example.com', password: 'truePassword' };
      const user = { id: 1, email: 'test@example.com', password: 'hashedPassword' };
      const token = 'mockedToken';

      prismaMock.user.findUnique.mockResolvedValue(user);

      const response = await request(app).post('/users/login').send(loginData);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('token', token);
      expect(response.body.user).toEqual({ id: user.id, email: user.email });
    });

    it('erreur 404 : utilisateur inexistant', async () => {
      const loginData = { email: 'nonexistent@example.com', password: 'password123' };

      prismaMock.user.findUnique.mockResolvedValue(null);

      const response = await request(app).post('/users/login').send(loginData);

      expect(response.status).toBe(404);
      expect(response.body.error).toContain('non trouvé');
    });

    it('erreur 400 : mot de passe incorrect', async () => {
      const loginData = { email: 'test@example.com', password: 'wrongPassword' };
      const user = { id: 1, email: 'test@example.com', password: 'hashedPassword' };

      prismaMock.user.findUnique.mockResolvedValue(user);

      const response = await request(app).post('/users/login').send(loginData);

      expect(response.status).toBe(400);
      expect(response.body.error).toContain('Mot de passe incorrect');
    });

    it('erreur 400 : email manquant au login', async () => {
      const loginData = { password: 'password123' };

      const response = await request(app).post('/users/login').send(loginData);

      expect(response.status).toBe(400);
      expect(response.body.error).toContain('requis');
    });

    it('erreur 400 : mot de passe manquant au login', async () => {
      const loginData = { email: 'test@example.com' };

      const response = await request(app).post('/users/login').send(loginData);

      expect(response.status).toBe(400);
      expect(response.body.error).toContain('requis');
    });
  });
});