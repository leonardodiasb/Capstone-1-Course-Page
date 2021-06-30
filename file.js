const hamburguer = document.getElementById('hamburger-btn');
const mobMenu = document.getElementById('mobile_menu');

function myFunction(x) {
  x.classList.toggle('change');
  if (mobMenu.style.visibility === 'visible') {
    mobMenu.style.visibility = 'hidden';
    mobMenu.style.height = '0';
    mobMenu.style.overflowY = 'hidden';
  } else {
    mobMenu.style.visibility = 'visible';
    mobMenu.style.height = '100vh';
    mobMenu.style.overflowY = 'auto';
  }
}

hamburguer.addEventListener('click', myFunction)