import type { Request, Response } from "express";

export const getHealth = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: "Server is healthy",
    })
}