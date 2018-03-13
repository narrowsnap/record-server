const router = require('koa-router')()

import user from './api/user'
import record from './api/record'

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Record!'
  })
})

router.use('/user', user.routes(), user.allowedMethods());
router.use('/record', record.routes(), record.allowedMethods());

module.exports = router;
