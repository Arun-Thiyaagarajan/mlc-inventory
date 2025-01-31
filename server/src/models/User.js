import { model, Schema } from "mongoose";
import isEmail from "validator/lib/isEmail.js";
import bcrypt from 'bcryptjs'
import { EUserRoles } from "@enums/Enums.js";

const UserScehma = Schema({
    fullName: {
        type: String,
        required: [true, 'Please provide your full name'],
        minlength: 3,
        maxlength: 50,
    },
    email: {
        type: String,
        required: [true, 'Please provide your email address'],
        validate: {
            validator: isEmail,
            message: 'Please provide a valid email address',
        },
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide your password'],
        minlength: [8, 'Minimum length of passwords must be between 8 characters'],
    },
    role: {
        type: String,
        enum: [EUserRoles.ADMIN, EUserRoles.USER, EUserRoles.GUEST],
        default: EUserRoles.USER,
    },
}, { timestamps: true });

UserScehma.pre('save', async function () {
    if (!this.isModified('password')) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});


export default model('User', UserScehma);