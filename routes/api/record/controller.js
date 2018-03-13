'use strict'

import {Record} from "../../../model/record.model";
import {User} from "../../../model/user.model";

export const initRecord = async (ctx) => {
    const username = ctx.request.body.username;

    const user = await User.findOne({username: username}, {record: 1})
        .populate('record');
    ctx.response.body = {status: 200, message: '获取记录成功', records: user.record};
}

export const addRecord = async (ctx) => {
    const username = ctx.request.body.username;
    const title = ctx.request.body.title;

    const record = await Record.findOne({title: title});
    if(!record) {
        const new_record = new Record({
            title: title
        });
        const saved_record = await new_record.save();
        await User.update({username: username}, {$push: {record: saved_record._id}});
        ctx.response.body = {status: 200, message: '创建记录成功'};
    } else {
        ctx.response.body = {status: 400, message: '该记录已存在'};
    }
}

export const updateRecord = async (ctx) => {
    const record = ctx.request.body.record;
    await Record.findByIdAndUpdate(record._id, {
        $set: {
            title: record.title,
            date: record.date,
            continued: record.continued
        }
    });
    ctx.response.body = {status: 200, message: '更新record成功'};
}

export const getRecordById = async (ctx) => {
    const record_id = ctx.request.body.record_id;

    const record = await Record.findById(record_id);

    ctx.response.body = {status: 200, message: '获取record成功', record: record};

}