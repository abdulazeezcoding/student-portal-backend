import { Schema, model } from "mongoose";

const studentSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required:true},
    email: {type: String, required:true},
    password:{type: String, required: true},
});

export const studentModel = model('Student', studentSchema, 'Students');