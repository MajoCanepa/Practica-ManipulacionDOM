const colorButton = document.getElementById('colorButton');
const text = document.getElementById('text');

colorButton.addEventListener('click', function () {
  if (text.classList.contains('orange')){
    text.classList.remove('orange');
  }
  else {
    text.classList.add('orange')
  }
})