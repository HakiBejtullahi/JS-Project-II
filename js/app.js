let counter = 0;

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const style = e.currentTarget.classList;
    if (style.contains('increase')) {
      counter++;
    } else if (style.contains('decrease')) {
      counter--;
    } else if (style.contains('reset')) {
      counter = 0;
    }
    value.textContent = counter;
    if (value.textContent > 0) {
      value.classList.add('increase');
    }
    if (value.textContent < 0) {
      value.classList.add('decrease');
    }
    if (value.textContent == 0) {
      value.classList.remove('increase', 'decrease');
    }
  });
});
