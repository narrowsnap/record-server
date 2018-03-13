'use strict'

import {Record} from "../../../model/record.model";
import {User} from "../../../model/user.model";

export const addRecord = async (ctx) => {
    const username = ctx.request.username;
    const title = ctx.request.title;

    const record = await Record.findOne({title: title})
    if(!record) {
        const new_record = new Record({
            title: title
        })
        const saved_record = await new_record.save()
        await User.update({username: username}, {record: {$push: saved_record._id}});
        ctx.response.body = {status: 200, message: '创建记录成功'};
    } else {
        ctx.response.body = {status: 400, message: '该记录已存在'};
    }
}