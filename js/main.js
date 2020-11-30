document.querySelector('.nav-menu').classList.add('nav-menu-active');

function navMenuOpen() {
  document.querySelector('.nav-menu').classList.remove('nav-menu-active');
}

function navMenuClose() {
  document.querySelector('.nav-menu').classList.add('nav-menu-active');
}

window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    document
      .getElementsByClassName('navbar')[0]
      .classList.add('navbar-scrolled');
    document;
    document
      .getElementsByClassName('nav-menu-btn')[0]
      .classList.add('onscroll-color');
  } else {
    document
      .getElementsByClassName('navbar')[0]
      .classList.remove('navbar-scrolled');
    document
      .getElementsByClassName('nav-menu-btn')[0]
      .classList.remove('onscroll-color');
  }
});
