const greetingClose = document.querySelector('.modal__greeting-close');
const greetingSubmit = document.querySelector('.modal__greeting-submit');
const modalGreeting = document.querySelector('.modal__greeting');



var nav = document.getElementById("nav");
window.onscroll = function() {
    if (document.documentElement.scrollTop > 50 || document.body.scrollTop > 0) {
        nav.style.backgroundColor = "#fff";
        nav.style.boxShadow ="-1px 1px 1px #000";
    } else {
        nav.style.backgroundColor = "hsla(0,0%,100%,.75)";
        nav.style.boxShadow ="-1px 1px 1px transparent";
    }
};

window.addEventListener('load', toggleModalGreeting)

function toggleModalGreeting() {
    modalGreeting.classList.toggle('hide')
}
greetingClose.addEventListener('click', toggleModalGreeting);

greetingSubmit.addEventListener('click', toggleModalGreeting);
