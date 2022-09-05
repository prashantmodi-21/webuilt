burger = document.querySelector('#hamburger')
navbar = document.querySelector('.nav')
navList = document.querySelector('.navbar')
search = document.querySelector('.search')
 


burger.addEventListener('click', ()=>{
    search.classList.toggle('visibilty');
    navList.classList.toggle('visibilty');
    navbar.classList.toggle('height');
    
})