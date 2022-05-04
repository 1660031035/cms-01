// 创建axios的配置文件 设置基地址
axios.defaults.baseURL = 'http://www.itcbc.com:8000'

// 设置所有请求方式的请求头 设置token认证
// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (config.url.indexOf('/api') == -1) {
    config.headers['Authorization'] = localStorage.getItem('token')
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  if (response.data.code == 1) {
    toastr.warning(response.data.message)
  }
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  // 当身份认证失败 跳转登录页 清空token
  if (error.response.data.message == '身份认证失败') {
    location.href = 'login.html'
    localStorage.removeItem('token')
  }
  return Promise.reject(error);
});