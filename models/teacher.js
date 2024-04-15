import { Schema, model } from "mongoose";

const teacherSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required:true},
    department:{type: String,required:true},
    email: {type: String, required:true},
    password:{type: String, required: true},
});

export const teacherModel = model('Teacher', teacherSchema, 'Teachers');