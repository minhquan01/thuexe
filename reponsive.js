const motabPolicy = document.querySelector('.motab__policy');
const submotabPolicy = document.querySelector('.submotab__policy');
const motabMenu = document.querySelector('.motab__menu');
const motabList = document.querySelector('.motab__list');


function toggleSubmotabPolicy() {
    submotabPolicy.classList.toggle('hide')
}

motabPolicy.addEventListener('click', toggleSubmotabPolicy);

motabMenu.addEventListener('click', toggleSubmotabPolicy);

function toggleMotabList() {
    motabList.classList.toggle('hide')
}

motabMenu.addEventListener('click', toggleMotabList);
