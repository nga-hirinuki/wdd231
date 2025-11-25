// Store the selected elemts that we are going to use.
const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');
const navchamber = document.querySelector('#nav-chamber');


// Toggle the show class off and on
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
    navchamber.classList.toggle('show');
    
});