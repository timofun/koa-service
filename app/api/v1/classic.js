const Router = require('koa-router')
const router = new Router()
const { PositiveIntegerValidator } = require('../../validators/validator')
router.post('/v1/:id/classic/latest', (ctx, next) => {
  console.log(ctx.params);
  
  const v = new PositiveIntegerValidator().validate(ctx)
  ctx.body = 'success'
})

module.exports = router
