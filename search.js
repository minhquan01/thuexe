const nameItems = document.querySelectorAll('.item__title');
const searchInput = document.querySelector('.search-input');
const itemMotos = document.querySelectorAll('.item-moto');
const buttonSuggests = document.querySelectorAll('.search-suggest-button--btn');
const priceItems = document.querySelectorAll('.item__price');
const openModals = document.querySelectorAll('.open__modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.form__close');
const btnSubmit = document.querySelector('.form__submit');
const modalMessage = document.querySelector('.modal__message');
const successClose = document.querySelector('.success__close');
const progress = document.querySelector('.progress');
const boxItems = document.querySelector('.box-item');

const modalMore = document.querySelector('.modal__more');
const closeMonkey = document.querySelector('.close__monkey');
const openMonkey = document.querySelector('.open__monkey');
const modalMokey = document.querySelector('.modal__mokey');
const openPcx = document.querySelector('.open__pcx');
const modalPcx = document.querySelector('.modal__pcx');
const closePcx = document.querySelector('.close__pcx');
const openMsx = document.querySelector('.open__msx');
const modalMsx = document.querySelector('.modal__msx');
const closeMsx = document.querySelector('.close__msx');
const openWave = document.querySelector('.open__wave');
const modalWave = document.querySelector('.modal__wave');
const closeWave = document.querySelector('.close__wave');
const openZipMatt = document.querySelector('.open__zipmatt');
const modalZipMatt = document.querySelector('.modal__zipmatt');
const closeZipMatt = document.querySelector('.close__zipmatt');
const openCapture = document.querySelector('.open__capture');
const modalCapture = document.querySelector('.modal__capture');
const closeCapture = document.querySelector('.close__capture');
const openCatalog = document.querySelector('.open__catalog');
const modalCatalog = document.querySelector('.modal__catalog');
const closeCatalog = document.querySelector('.close__catalog');
const openBosco = document.querySelector('.open__bosco');
const modalBosco = document.querySelector('.modal__bosco');
const closeBosco = document.querySelector('.close__bosco');
const openGsx = document.querySelector('.open__gsx');
const modalGsx = document.querySelector('.modal__gsx');
const closeGsx = document.querySelector('.close__gsx');
const openGixxer = document.querySelector('.open__gixxer');
const modalGixxer = document.querySelector('.modal__gixxer');
const closeGixxer = document.querySelector('.close__gixxer');
const openGd = document.querySelector('.open__gd');
const modalGd = document.querySelector('.modal__gd');
const closeGd = document.querySelector('.close__gd');
const openSatria = document.querySelector('.open__satria');
const modalSatria = document.querySelector('.modal__satria');
const closeSatria = document.querySelector('.close__satria');
const openAngel = document.querySelector('.open__angel');
const modalAngel = document.querySelector('.modal__angel');
const closeAngel = document.querySelector('.close__angel');
const openPassing = document.querySelector('.open__passing');
const modalPassing = document.querySelector('.modal__passing');
const closePassing = document.querySelector('.close__passing');
const openMaxsym = document.querySelector('.open__maxsym');
const modalMaxsym = document.querySelector('.modal__maxsym');
const closeMaxsym = document.querySelector('.close__maxsym');
const openHusky = document.querySelector('.open__husky');
const modalHusky = document.querySelector('.modal__husky');
const closeHusky = document.querySelector('.close__husky');
const openFz = document.querySelector('.open__fz');
const modalFz = document.querySelector('.modal__fz');
const closeFz = document.querySelector('.close__fz');
const openEx = document.querySelector('.open__ex');
const modalEx = document.querySelector('.modal__ex');
const closeEx = document.querySelector('.close__ex');
const openR3 = document.querySelector('.open__r3');
const modalR3 = document.querySelector('.modal__r3');
const closeR3 = document.querySelector('.close__r3');
const openR15 = document.querySelector('.open__r15');
const modalR15 = document.querySelector('.modal__r15');
const closeR15 = document.querySelector('.close__r15');



// Tìm Kiếm
searchInput.onkeyup = () => {
    let valueItem = searchInput.value.toLowerCase();
    itemMotos.forEach((ele) => {
        let nameMoto = ele.querySelector('.item__title').textContent;
        if(nameMoto.toLowerCase().indexOf(valueItem) !== -1) {
            ele.style.display = 'block';
        } else {
            ele.style.display = 'none';
        }
    })

    checkEmpty(itemMotos);
}

// Check sản phẩm có không?

function checkEmpty(ele) {
    let count = 0;
    for(let i = 0; i < ele.length; i++) {
        if(ele[i].style.display === 'block'){
            count ++;
        }
    }

    if(count === 0){
        document.querySelector('#showtext').textContent = 'Không Tìm Thấy';
    }else{
        document.querySelector('#showtext').textContent = '';
    }
}


// Lọc

buttonSuggests.forEach((suggest) => {
    suggest.onclick = () => {
        document.querySelector('.search-suggest-button--btn.active').classList.remove('active')
        suggest.classList.add('active')

        let nameSuggest =suggest.dataset.search;
    
        itemMotos.forEach((ele) => {
            if(ele.dataset.item === nameSuggest || nameSuggest === 'all'){
                ele.style.display = 'flex';
            }else {
                ele.style.display = 'none';
            }
        })
    }
})

// Tắt mở
function toggleModal() {
    modal.classList.toggle('hide')
}

openModals.forEach((btn) => {
    btn.addEventListener('click', toggleModal);
})

closeModal.addEventListener('click', toggleModal);

btnSubmit.addEventListener('click', toggleModal);

modal.addEventListener('click', function(e) {
    if(e.target == e.currentTarget){
        toggleModal()
    }
})


// Tắt mở thông tin xe

function toggleModalMore() {
    modalMore.classList.toggle('hide')
}

function toggleModalMonkey() {
    modalMokey.classList.toggle('hide')
}

openMonkey.onclick = () => {
    modalMokey.classList.toggle('hide')
}


modalMore.addEventListener('click', function(e) {
    if(e.target == e.currentTarget){
        toggleModalMonkey()
    }
})

closeMonkey.addEventListener('click', toggleModalMonkey)

function toggleModalPcx() {
    modalPcx.classList.toggle('hide')
}

openPcx.onclick = () => {
    modalPcx.classList.toggle('hide')
}
modalPcx.addEventListener('click', function(e) {
    if(e.target == e.currentTarget){
        toggleModalPcx()
    }
})

closePcx.addEventListener('click', toggleModalPcx)

// 1 xe
function toggleModalMsx() {
    modalMsx.classList.toggle('hide')
}

openMsx.onclick = () => {
    modalMsx.classList.toggle('hide')
}
modalMsx.addEventListener('click', function(e) {
    if(e.target == e.currentTarget){
        toggleModalMsx()
    }
})

closeMsx.addEventListener('click', toggleModalMsx)

// 1 xe
function toggleModalWave() {
    modalWave.classList.toggle('hide')
}

openWave.onclick = () => {
    modalWave.classList.toggle('hide')
}
modalWave.addEventListener('click', function(e) {
    if(e.target == e.currentTarget){
        toggleModalWave()
    }
})

closeWave.addEventListener('click', toggleModalWave)

// 1 xe
function toggleModalZipMatt() {
    modalZipMatt.classList.toggle('hide')
}

openZipMatt.onclick = () => {
    modalZipMatt.classList.toggle('hide')
}
modalZipMatt.addEventListener('click', function(e) {
    if(e.target == e.currentTarget){
        toggleModalZipMatt()
    }
})

closeZipMatt.addEventListener('click', toggleModalZipMatt)

// 1 xe
function toggleModalCapture() {
    modalCapture.classList.toggle('hide')
}

openCapture.onclick = () => {
    modalCapture.classList.toggle('hide')
}
modalCapture.addEventListener('click', function(e) {
    if(e.target == e.currentTarget){
        toggleModalCapture()
    }
})

closeCapture.addEventListener('click', toggleModalCapture)

// 1 xe
function toggleModalCatalog() {
    modalCatalog.classList.toggle('hide')
}

openCatalog.onclick = () => {
    modalCatalog.classList.toggle('hide')
}
modalCatalog.addEventListener('click', function(e) {
    if(e.target == e.currentTarget){
        toggleModalCatalog()
    }
})

closeCatalog.addEventListener('click', toggleModalCatalog)

// 1 xe
function toggleModalBosco() {
    modalBosco.classList.toggle('hide')
}

openBosco.onclick = () => {
    modalBosco.classList.toggle('hide')
}
modalBosco.addEventListener('click', function(e) {
    if(e.target == e.currentTarget){
        toggleModalBosco()
    }
})

closeBosco.addEventListener('click', toggleModalBosco)

// 1 xe
function toggleModalGsx() {
    modalGsx.classList.toggle('hide')
}

openGsx.onclick = () => {
    modalGsx.classList.toggle('hide')
}
modalGsx.addEventListener('click', function(e) {
    if(e.target == e.currentTarget){
        toggleModalGsx()
    }
})

closeGsx.addEventListener('click', toggleModalGsx)

// 1 xe
function toggleModalGixxer() {
    modalGixxer.classList.toggle('hide')
}

openGixxer.onclick = () => {
    modalGixxer.classList.toggle('hide')
}
modalGixxer.addEventListener('click', function(e) {
    if(e.target == e.currentTarget){
        toggleModalGixxer()
    }
})

closeGixxer.addEventListener('click', toggleModalGixxer)

// 1 xe
function toggleModalGd() {
    modalGd.classList.toggle('hide')
}

openGd.onclick = () => {
    modalGd.classList.toggle('hide')
}
modalGd.addEventListener('click', function(e) {
    if(e.target == e.currentTarget){
        toggleModalGd()
    }
})

closeGd.addEventListener('click', toggleModalGd)

// 1 xe
function toggleModalSatria() {
    modalSatria.classList.toggle('hide')
}

openSatria.onclick = () => {
    modalSatria.classList.toggle('hide')
}
modalSatria.addEventListener('click', function(e) {
    if(e.target == e.currentTarget){
        toggleModalSatria()
    }
})

closeSatria.addEventListener('click', toggleModalSatria)

// 1 xe
function toggleModalAngel() {
    modalAngel.classList.toggle('hide')
}

openAngel.onclick = () => {
    modalAngel.classList.toggle('hide')
}
modalAngel.addEventListener('click', function(e) {
    if(e.target == e.currentTarget){
        toggleModalAngel()
    }
})

closeAngel.addEventListener('click', toggleModalAngel)

// 1 xe
function toggleModalPassing() {
    modalPassing.classList.toggle('hide')
}

openPassing.onclick = () => {
    modalPassing.classList.toggle('hide')
}
modalPassing.addEventListener('click', function(e) {
    if(e.target == e.currentTarget){
        toggleModalPassing()
    }
})

closePassing.addEventListener('click', toggleModalPassing)

// 1 xe
function toggleModalMaxsym() {
    modalMaxsym.classList.toggle('hide')
}

openMaxsym.onclick = () => {
    modalMaxsym.classList.toggle('hide')
}
modalMaxsym.addEventListener('click', function(e) {
    if(e.target == e.currentTarget){
        toggleModalMaxsym()
    }
})

closeMaxsym.addEventListener('click', toggleModalMaxsym)

// 1 xe
function toggleModalHusky() {
    modalHusky.classList.toggle('hide')
}

openHusky.onclick = () => {
    modalHusky.classList.toggle('hide')
}
modalHusky.addEventListener('click', function(e) {
    if(e.target == e.currentTarget){
        toggleModalHusky()
    }
})

closeHusky.addEventListener('click', toggleModalHusky)

// 1 xe
function toggleModalFz() {
    modalFz.classList.toggle('hide')
}

openFz.onclick = () => {
    modalFz.classList.toggle('hide')
}
modalFz.addEventListener('click', function(e) {
    if(e.target == e.currentTarget){
        toggleModalFz()
    }
})

closeFz.addEventListener('click', toggleModalFz)

// 1 xe
function toggleModalEx() {
    modalEx.classList.toggle('hide')
}

openEx.onclick = () => {
    modalEx.classList.toggle('hide')
}
modalEx.addEventListener('click', function(e) {
    if(e.target == e.currentTarget){
        toggleModalEx()
    }
})

closeEx.addEventListener('click', toggleModalEx)

// 1 xe
function toggleModalR3() {
    modalR3.classList.toggle('hide')
}

openR3.onclick = () => {
    modalR3.classList.toggle('hide')
}
modalR3.addEventListener('click', function(e) {
    if(e.target == e.currentTarget){
        toggleModalR3()
    }
})

closeR3.addEventListener('click', toggleModalR3)

// 1 xe
function toggleModalR15() {
    modalR15.classList.toggle('hide')
}

openR15.onclick = () => {
    modalR15.classList.toggle('hide')
}
modalR15.addEventListener('click', function(e) {
    if(e.target == e.currentTarget){
        toggleModalR15()
    }
})

closeR15.addEventListener('click', toggleModalR15)


// Thông báo
btnSubmit.onclick = () => {
    modalMessage.classList.add('active');
    progress.classList.add('active');

    setTimeout(() => {
        modalMessage.classList.remove('active');
    },5000);

    setTimeout(() => {
        progress.classList.remove('active')
    }, 5300);
}

successClose.onclick = () => {
    modalMessage.classList.remove('active');

    setTimeout(() => {
        progress.classList.remove('active')
    },300);
}


