'use strict'
const router = require('koa-router')();
import { register, login } from './controller';

router.post('/register', register);
router.post('/login', login);

module.exports = router;