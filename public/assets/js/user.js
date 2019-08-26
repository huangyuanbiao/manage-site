//展示用户信息功能
(function () {
  let userArr = []

  $.ajax({
    url: '/users',
    type: 'get',
    success: function (res) {
      userArr = res
      let str = template('userTpl', {
        list: userArr
      })
      $('tbody').html(str)
    }
  })
}())