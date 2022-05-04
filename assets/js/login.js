/* toastr.info('提示信息');                // 普通提示
   toastr.success('提示信息');             // 成功提示
   toastr.warning('提示信息');             // 警告提示
   toastr.error('提示信息');               // 错误提示 */
// 1. 显示隐藏 登录注册
let a1 = document.querySelector('.register a')
let a2 = document.querySelector('.login a')
let register = document.querySelector('.register')
let login = document.querySelector('.login')
// 2. 注册事件
a1.onclick = function () {
  register.style.display = 'none'
  login.style.display = 'block'
}
a2.onclick = function () {
  login.style.display = 'none'
  register.style.display = 'block'
}
// 3. 用户名和密码 非空 正则校验
// 3.1 获取元素
let input1 = document.querySelector('.register [type="text"]')
let input2 = document.querySelector('.register [type="password"]')
let input3 = document.querySelector('.login [type="text"]')
let input4 = document.querySelector('.login [type="password"]')
// 3.2 非空判断与正则校验
// 重复函数进行封装 
function verifyInput(ele, info, reg, num) {
  // 非空判断
  ele.oninput = function () {
    // 非空判断
    if (this.value == '') {
      this.nextElementSibling.style.display = 'block'
      this.nextElementSibling.innerHTML = `${info}不能为空`
      return
    } else {
      this.nextElementSibling.style.display = 'none'
      this.nextElementSibling.innerHTML = ''
    }
    // 正则校验
    if (!reg.test(this.value)) {
      this.nextElementSibling.style.display = 'block'
      this.nextElementSibling.innerHTML = `${info}长度不能小于${num}位或超过15位`
    } else {
      this.nextElementSibling.style.display = 'none'
      this.nextElementSibling.innerHTML = ''
    }
  }
}
// 调用函数
verifyInput(input1, '用户名', /^\S{2,15}$/, 2)
verifyInput(input2, '密码', /^\S{6,15}$/, 6)
verifyInput(input3, '用户名', /^\S{2,15}$/, 2)
verifyInput(input4, '密码', /^\S{6,15}$/, 6)

// 4. 注册功能
document.querySelector('.register form').addEventListener('submit', function (e) {
  // 阻止默认事件
  e.preventDefault()
  // 发送ajax请求
  axios({
    url: '/api/register',
    method: 'post',
    data: {
      username: input1.value,
      password: input2.value
    },
  }).then(({
    data: res
  }) => {
    //成功回调
    console.log(res)
    // 判断状态码
    /* if (res.code == 1) {
      toastr.warning(res.message)
      return
    } */
    if (res.code == 0) {
      toastr.success(res.message)
      // 清空表单
      document.querySelector('.register form').reset()
      // 跳转登录
      a1.onclick()
    }
  })
})

// 5. 登录功能
document.querySelector('.login form').addEventListener('submit', function (e) {
  e.preventDefault()
  // 发送ajax请求
  axios({
    url: '/api/login',
    method: 'post',
    data: {
      username: input3.value,
      password: input4.value
    },

  }).then(({
    data: res
  }) => {
    console.log(res)
    //成功回调
    /* if (res.code == 1) {
      toastr.warning(res.message)
      return
    } */
    if (res.code == 0) {
      toastr.success(res.message)
      // 清空表单
      document.querySelector('.register form').reset()
      // 跳转登录
      location.href = 'index.html'
      // 保存token, 后面要用
      localStorage.setItem('token', res.token)
    }
  })
})