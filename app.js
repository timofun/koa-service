const Koa = require('koa')
const parser = require('koa-bodyparser')
const cors = require("koa2-cors"); // 导入跨域模块
const catchError = require('./middlewares/exception')
const InitManager = require('./core/init')
const app = new Koa()
const allowOrigins = [
  "http://localhost:5001"
]
app.use(cors({
  origin: function(ctx) {
    if (allowOrigins.includes(ctx.header.origin)) {
      return ctx.header.origin;
    }
    return false;
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  withCredentials:true,
  allowMethods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
app.use(catchError)
app.use(parser())
InitManager.initCore(app)

app.listen(5000)
