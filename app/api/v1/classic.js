const Router = require('koa-router')
const axios = require('axios')
const router = new Router()
const { PositiveIntegerValidator } = require('../../validators/validator')
const loginData = {
  "account": "admin",
  "password": "OUpGQLbUgJCBtgSAErZ7SsglyzPEPWnXgL8zFiXlSDsRbo6NbvXOFntEpUdcQIAl+QTji+hwRTu54/rc9r5d8PW43V5A6h0WXTcNuvIh0XcCtz4QJlQUbohxvtpFwfZs08wpsqg/RgI/cPldwWcttRkS8YzaYBrkIZaX9qNLros="
}
router.post('/api/admin/login', async (ctx, next) => {
  console.log('params', ctx.params);
  console.log('body', ctx.request.body);
  console.log('query', ctx.request.query);
  console.log('header', ctx.request.header);
  const data = await axios.post('http://49.233.163.136:3002/admin/login', loginData)
  ctx.body = data.data
  // const v = new PositiveIntegerValidator().validate(ctx)
  // ctx.body = 'success'
})

module.exports = router
