const menuButton = document.getElementById('menu-button');


menuButton.addEventListener('click', () =>{
  const mobileMenu = document.getElementById('mobile-menu');
  const headerTitle = document.getElementById('header-title');
  const arrowWrapper = document.getElementById('arrow-wrapper');

  mobileMenu.classList.toggle("display-none");
  headerTitle.classList.toggle("display-none");
  arrowWrapper.classList.toggle("display-none");
})