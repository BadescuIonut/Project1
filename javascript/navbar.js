let toggleNav = document.querySelector('#toggleNav');
let navLinks = document.querySelector('#navLinks');


toggleNav.addEventListener('click' , function() {
    navLinks.classList.toggle('active');
})