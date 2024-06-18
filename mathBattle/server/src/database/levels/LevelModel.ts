import { Model, Schema, model } from "mongoose";
import { ILevel } from "./ILevel";

const levelSchema = new Schema<ILevel>({
    number: {
        type: Number,
        unique:true,
        require: true
    },
    monsterPicture: {
        type: String,
        require: true
    },
    monsterHealth: {
        type: Number,
        require: true
    },
    calcDifficulty: {
        type: Number,
        require: true
    },
   
});

export const LevelModel = model<ILevel>("Level", levelSchema);
