import type { Request, Response } from "express";

// export const getNotes = (req: Request, res: Response) => {
//     res.json([{
//         id: 1,
//         content: "Express is a web framework for Node.js that makes it easy to build web applications and APIs.",
//         title: req.body
//     }])
// }

export const getNotes = (req: Request, res: Response) => {
    const {title} = req.body;

    res.status(200).json({
        success: true,
        message: "Notes Retrieved Successfully",
        data: {
            title
        },
    })
}