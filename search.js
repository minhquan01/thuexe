const nameItems = document.querySelectorAll('.item__title');
const searchInput = document.querySelector('.search-input');
const itemMotos = document.querySelectorAll('.item-moto');
const buttonSuggests = document.querySelectorAll('.search-suggest-button--btn');
const priceItems = document.querySelectorAll('.item__price');

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





