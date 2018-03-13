/**
 *  用户表
 */
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    date: [
        {
            start: Date,
            end: Date
        }
    ],
    continued: {
        type: Number,
        default: 0
    }
})

export const Record = mongoose.model('Record', RecordSchema);
