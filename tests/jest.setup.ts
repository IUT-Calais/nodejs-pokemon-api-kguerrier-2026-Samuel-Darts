import { PrismaClient } from '@prisma/client';
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended';
import prisma from '../src/client';

// Mock de PrismaClient
jest.mock('../src/client', () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}));

// Mock de jsonwebtoken
jest.mock('jsonwebtoken', () => ({
  ...jest.requireActual('jsonwebtoken'), // Conservez les autres fonctionnalités de jsonwebtoken
  verify: jest.fn((token, _secret) => {
    if (token === 'mockedToken') {
      return { userId: 'mockedUserId' };
    }
    throw new Error('Invalid token');
  }), // Mock de la fonction verify
  sign: jest.fn(() => 'mockedToken'), // Mock de la fonction sign
}));

jest.mock('bcryptjs', () => ({
  ...jest.requireActual('bcryptjs'),
  hash: jest.fn((_password, _rounds) => Promise.resolve('hashedPassword')),
  compare: jest.fn((password, _cryptedPassword) => {
    if (password === 'truePassword') {
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  }),
}));

beforeEach(() => {
  mockReset(prismaMock);
  jest.clearAllMocks();
});

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;
