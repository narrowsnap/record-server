'use strict'
const router = require('koa-router')();
import {addRecord} from './controller';

router.post('/addRecord', addRecord);

module.exports = router;