$('#logout').on('click', function () {
  let isCommit = confirm('您确认要退出吗')
  if (isCommit) {
    $.ajax({
      type: 'post',
      url: '/logout',
      success: function (res) {
        location.href = 'login.html'
      },
      error: function () {
        alert('退出失败')
      }
    })
  }
})