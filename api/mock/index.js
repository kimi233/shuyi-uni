/*
*很遗憾小程序和app端都无法完美支持mock.js，
*也无法启动node服务来模拟mock，
*因为在手机真机调试中无法请求到node的服务；
*
*所以我们只是采用简单的mock+promise的方式进行本地模拟*/

import home from "./home"

export {home}