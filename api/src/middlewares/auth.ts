import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

type TokenPayload = {
    id: string;
    iat: number;
    exp: number;
};

export function AuthMiddlewares(
    req: Request, 
    res: Response, 
    next: NextFunction
) {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: "Token não encontrado" });
    }

    const [, token] = authorization.split(" ");

    try {
        const decoded = verify(token, "secret");
        const { id } = decoded as TokenPayload;

        req.userId = id;
        next();
    } catch (error) {
        return res.status(401).json({ error: "Token inválido" });
    }
}