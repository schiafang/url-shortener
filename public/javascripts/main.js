$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function copyInput () {
  document.getElementById('copyInput').select()
  document.execCommand('copy')
}