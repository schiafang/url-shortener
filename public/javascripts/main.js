$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function copy () {
  document.getElementById('copyInput').select()
  document.execCommand('copy')
  alert('copied to clipboard')
}

// index-page 若使用者沒有輸入內容按下送出鈕，提示使用者並停止送出
const inputValue = document.querySelector('.url-input')
function check () {
  if (inputValue.value.length === 0) {
    alert('Please input URL')
    return false
  }
}