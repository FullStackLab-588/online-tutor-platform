//for mobile menu button
document.addEventListener('DOMContentLoaded', function(){

    const togglebutton = document.querySelector('.navbar .mobile-menu-toggle');

  const mobilemenu = document.querySelector('.navbar .mobile-menu-item');

  togglebutton.addEventListener('click' , function(){
    mobilemenu.classList.toggle('active');
  });
});


//change nav bar backgound scroll navbarScroll-j
window.addEventListener('scroll' , function(){


const navbar = this.document.querySelector('.navbar');

  if(window.scrollY > 0){
    navbar.classList.add('navbarScroll-j');
  }
  else{
     navbar.classList.remove('navbarScroll-j');
  }
})