'use strict'
import {User} from '../../../model/user.model';

export const register = async (ctx) => {
    const username = ctx.request.body.username;
    const password = ctx.request.body.password;

    const user = await User.findOne({username: username});
    if(!user) {
        const new_user = new User({
            username: username,
            password: password
        });
        await new_user.save();
        ctx.response.body = {status: 200, message: '注册成功'};
    } else {
        ctx.response.body = {status: 400, message: '用户名已存在'};
    }
}

export const login = async (ctx) => {
    const username = ctx.request.body.username;
    const password = ctx.request.body.password;

    const user = await User.findOne({username: username});
    console.log(username, password)
    console.log(user)
    if(user) {
        if(password === user.password) {
            ctx.response.body = {status: 200, message: '登录成功'};
        } else {
            ctx.response.body = {status: 401, message: '密码错误'};
        }
    } else {
        ctx.response.body = {status: 400, message: '用户名不存在'};
    }
}