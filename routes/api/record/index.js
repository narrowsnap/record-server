'use strict'
const router = require('koa-router')();
const controller = require('./controller');

router.post('/initRecord', controller.initRecord);
router.post('/addRecord', controller.addRecord);
router.post('/updateRecord', controller.updateRecord);
router.post('/getRecordById', controller.getRecordById);

module.exports = router;