// DOM
const header = document.querySelector("header");

// Function
function stickyNavbar() {
    header.classList.toggle('scrolled', window.pageYOffset > 0);
};

// Call function
stickyNavbar();

// Event listener
window.addEventListener('scroll', stickyNavbar)
