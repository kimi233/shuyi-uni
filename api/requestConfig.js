import uni_request from './request.js'

const request = uni_request({ // 有效配置项只有三个
    baseURL: 'http://xxxxxxxx.com:80', //baseURL
    timeout: 12345, // 超时时间，单位毫秒。默认 60 秒
    header: {'x-custom-header': 'x-custom-header'}, // 设置请求头，建议放在请求拦截器中
    statusCode: [200, 401] // 服务器相应状态码为 200/401 时，网络请求不会 reject。也就是不会被 catch 到。如响应 401 时可以在响应拦截后 await 刷新 token + await 重新请求 + return response。即可实现无痛刷新。
})

request.interceptors.request.use(async (config, ...args) => {
    //await new Promise(resolve => setTimeout(() => resolve()))
    //config.header.Authorization = 'Bearer ' + $store.state.app.token // 修改请求头
    //config.body.test = 'test' // 修改请求体
    // config.cancel = true // 取消请求
    return config
})

request.interceptors.response.use(async (response, ...args) => { // 响应拦截器（可以设置多个, 同时可以也可以使用异步方法）
    const {data: res} = response // args[0] method args[1] url args[3] data
    //await new Promise(resolve => setTimeout(() => resolve(), 3000))
    if (res.code === 200) {
        //console.log('响应拦截器， 会阻塞 3 s')
    }
    console.log(response);
    return response
})

request.onerror = async (...args) => { // 请求失败统一处理方法（可以也可以使用异步方法）
    console.log('网络请求失败了', `url为${args[1]}`)
}

export default request
