/**
 *  用户表
 */
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    record: [
        {
            type: Schema.Types.Object,
            ref: 'Record'
        }
    ]
})

export const User = mongoose.model('User', UserSchema);
