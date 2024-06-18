import { Model, Schema, model } from "mongoose";
import { IUser } from "./IUser";

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        unique:true,
        require: true
    },password: {
        type: String,
        require: true
    },
    options: {
        soundVolume: Number,
        fontSize: Number,
        gameTimer: Boolean
    },
   
});

export const UserModel = model<IUser>("User", userSchema);
