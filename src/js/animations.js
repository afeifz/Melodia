const navigation = document.querySelector('.navigation');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { 
    navigation.classList.add('nav-scrolled'); 
  } else {
    navigation.classList.remove('nav-scrolled'); 
  }
});


