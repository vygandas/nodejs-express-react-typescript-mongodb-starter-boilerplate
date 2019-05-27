import { Request, Response, NextFunction } from "express";
import IUser from "@project/interfaces/IUser";
import moment = require("moment");
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import User from "../../models/User";

class AuthController {

    public create = async (req: Request, res: Response, next: NextFunction) => {
        User.create({ name: req.body.name, email: req.body.email, password: req.body.password }, (err, result) => {
            if (err) {
                next(err);
            }
            else {
                res.json({status: "success", message: "User added successfully!!!", data: null});
            }
        });
    }

    public authenticate = async (req: Request, res: Response, next: NextFunction) => {
        User.findOne({ email: req.body.email }, (err, userInfo) => {
            if (err) {
                next(err);
            } else {
                if (bcrypt.compareSync(req.body.password, userInfo.password)) {
                    const token = jwt.sign({ id: userInfo._id }, req.app.get('secretKey'), { expiresIn: '1h' });
                    res.json({ status:"success", message: "user found!!!", data:{ user: userInfo, token: token } });
                } else {
                    res.json({ status:"error", message: "Invalid email/password!!!", data: null });
                }
            }
        });
    }

    public getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
        User.find({}, (err, users) => {
            if (err) {
                next(err);
            } else {
                res.json({ status: "success", message: "Movie found!!!", data: users } );
            }
        });
    }

};

export const authController = new AuthController();
