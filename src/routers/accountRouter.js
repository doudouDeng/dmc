const express=require('express')
const path=require('path')


// 创路由对象
const accountRouter=express.Router()

// 导入控制器
const accountCtrl=require(path.join(__dirname,'../contrillers/accountController.js'))

// 浏览器请求交给路由
// 1登录页面
accountRouter.get('/login',accountCtrl.getLoginPage)
// 2验证码页面
accountRouter.get('/vcode',accountCtrl.getVcodeImage)

// 导出暴露
module.exports=accountRouter