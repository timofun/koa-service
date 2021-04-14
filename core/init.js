const requireDirectory = require('require-directory')
const Router = require('koa-router')
class InitManager {
  static initCore (app) {
    InitManager.app = app
    InitManager.initLoadRouter()
    InitManager.loadConfig()
    InitManager.loadHttpException()
  }

  static loadConfig(path = '') {
    const configPath = path || process.cwd() + '/config/config.js'
    global.config = require(configPath)
  }

  static initLoadRouter () {
    const apiDir = `${process.cwd()}/app/api`
    requireDirectory(module, apiDir, {
      visit: whenLoadModule
    })

    function whenLoadModule (obj) {
      if (obj instanceof Router) {
        InitManager.app.use(obj.routes())
      }
    }
  }

  static loadHttpException(){
    global.errs = require('./http-exception')
  }


}

module.exports = InitManager
