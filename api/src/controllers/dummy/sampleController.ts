import { Request, Response, NextFunction } from "express";
import IUser from "@project/interfaces/IUser";
import moment = require("moment");

export const sampleController = (req: Request, res: Response, next: NextFunction) => {
    const dummyUser: IUser = {
        email: 'example@example.com',
        fullName: 'Example Name!!!',
        createdAt: moment().toDate()
    };
    res.json({
        message2: `It's alive. You're from ${req.ip}. Now ${moment().format('YYYY-MM-DD HH:mm:ss')}`,
        users: [dummyUser]
    });
};
