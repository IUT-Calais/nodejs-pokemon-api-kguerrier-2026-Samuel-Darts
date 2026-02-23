import {NextFunction, Response} from 'express'
import jwt from 'jsonwebtoken'
import { AuthenticatedRequest } from '../types/auth.types'

export const authMiddleware = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction,
) => {
    // Récupérer le token depuis l'en-tête Authorization
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1] // Format: "Bearer TOKEN"

    if (!token) {
        return res.status(401).json({ error: 'Token manquant' })
    }

    try {
        // Vérifier et décoder le token
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
            id: number
            email: string
        }

        // Ajouter les infos utilisateur à la requête
        req.user = decoded

        // Passer au prochain middleware ou à la route
        return next()
    } catch (error) {
        return res.status(401).json({ error: 'Token invalide ou expiré' })
    }
}
