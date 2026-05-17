import type { Request, Response } from "express";
import { env } from "../config/env.js";

export const getHealth = (req: Request, res: Response) => {
    res.json({
        success: true,
        message: "Server is healthy",
        appName: env.APP_NAME,
        version: env.APP_VERSION,
    })
}