import { Request, Response, Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../database';

export const usersRouter = Router();

// POST - Créer un nouvel utilisateur
usersRouter.post('/users', async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Vérifier les champs requis
    if (!email || !password) {
      const missingFields = [];
      if (!email) missingFields.push('email');
      if (!password) missingFields.push('password');
      res.status(400).json({ error: `Champs manquants : ${missingFields.join(', ')}` });
      return;
    }

    // Vérifier si l'email existe déjà
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      res.status(400).json({ error: 'Un utilisateur avec cet email existe déjà' });
      return;
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer l'utilisateur
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({
      id: user.id,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// POST - Connexion utilisateur
usersRouter.post('/users/login', async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Vérifier les champs requis
    if (!email || !password) {
      res.status(400).json({ error: 'Email et mot de passe requis' });
      return;
    }

    // Chercher l'utilisateur
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      res.status(404).json({ error: 'Utilisateur non trouvé' });
      return;
    }

    // Vérifier le mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(400).json({ error: 'Mot de passe incorrect' });
      return;
    }

    // Générer le JWT
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET as string,
      { expiresIn: process.env.JWT_EXPIRATION || '24h' }
    );

    res.status(201).json({
      token,
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});
