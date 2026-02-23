import {Request } from 'express'
  
export interface DecodedToken {
    id: number;
    email: string;
    iat?: number;
    exp?: number;
}

export interface AuthenticatedRequest extends Request {
    user?: DecodedToken;
}