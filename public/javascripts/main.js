$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function copy () {
  document.getElementById('copyInput').select()
  document.execCommand('copy')
  alert('copied to clipboard')
}

const inputValue = document.querySelector('.url-input')
function check () {
  if (inputValue.value.length === 0) {
    alert('Please input URL')
    return false
  }
}