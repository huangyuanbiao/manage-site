(function () {
  //展示用户信息功能
  let userArr = []

  $.ajax({
    url: '/users',
    type: 'get',
    success: function (res) {
      userArr = res
      render(userArr)
    }
  })

  //用户添加功能
  $('#addUser').on('click', function () {
    let formData = $('form').serialize()

    $.ajax({
      url: '/users',
      type: 'post',
      data: formData,
      success: function (res) {
        userArr.push(res)
        render(userArr)
        $('.form-control').val('')
      },
      error: function () {
        alert('添加失败')
      }
    })
  })

  //头像上传功能
  $('#avatar').on('change', function () {
    let formData = new FormData()
    formData.append('avatar', this.files[0])

    $.ajax({
      url: '/upload',
      type: 'post',
      data: formData,
      processData: false,
      contentType: false,
      success: function (res) {
        $('#img').val(res[0].avatar)
        $('#prev').attr('src', res[0].avatar)
      }
    })
  })

  function render(arr) {
    let str = template('userTpl', {
      list: arr
    })
    $('tbody').html(str)
  }
}())