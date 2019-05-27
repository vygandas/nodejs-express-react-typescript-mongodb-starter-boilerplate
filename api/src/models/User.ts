import * as mongoose from "mongoose";
import * as bcrypt from "bcrypt";
import IUser from "@project/interfaces/IUser";
import { config } from "../config";
import moment = require("moment");

const UserSchema = new mongoose.Schema<IUser>({
    fullName: {
        type: String,
        trim: true,  
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    createdAt: {
        type: Date,
        default: moment()
    },
});

// hash user password before saving into database
UserSchema.pre('save', (next) => {
    this.password = bcrypt.hashSync(this.password, config.salt);
    next();
});

export default mongoose.model<IUser & mongoose.Document>('User', UserSchema);
