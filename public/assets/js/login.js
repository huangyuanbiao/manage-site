$('.btn').on('click', function () {
  let email = $('#email').val()
  let password = $('#password').val()
  let regEmail =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

  //验证邮箱密码格式
  if (!regEmail.test(email)) {
    alert('邮箱密码错误')
    return
  }

  if (password.trim().length == 0) {
    alert('邮箱密码错误')
    return
  }

  //验证通过发送请求
  $.ajax({
    type: 'post',
    url: '/login',
    data: {
      email: email,
      password: password
    },
    success: function (response) {
      location.href = 'index.html'
    },
    error: function () {
      alert('用户名或者密码错误')
    }
  })

})