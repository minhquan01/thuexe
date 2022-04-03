const itemCart = document.querySelectorAll('.item__cart');
const modalDup = document.querySelector('.modal__dup');
const dupClose = document.querySelector('.modal__dup-close');
const dupSubmit = document.querySelector('.modal__dup-submit');
const cartBody = document.querySelectorAll('.cart table tbody');
const cartClose = document.querySelector('.cart i');
const cartSubmit = document.querySelector('.cart button');
const modalCart = document.querySelector('.modal__cart');
const cart = document.querySelector('.cart__total');




function toggleModalCart() {
    modalCart.classList.toggle('hide')
}
cart.addEventListener('click', toggleModalCart) 
cartClose.addEventListener('click', toggleModalCart) 
cartSubmit.addEventListener('click', toggleModalCart)
modalCart.addEventListener('click', function(e) {
    if(e.target == e.currentTarget){
        toggleModalCart()
    }
})

function toggleModalDup() {
    modalDup.classList.toggle('hide')
}

dupClose.addEventListener('click', toggleModalDup) 
dupSubmit.addEventListener('click', toggleModalDup)
modalDup.addEventListener('click', function(e) {
    if(e.target == e.currentTarget){
        toggleModalDup()
    }
})

// Thêm vào giỏ
itemCart.forEach((item, index) => {
    item.addEventListener("click", function(event){{
        var add = event.target
        var product = add.parentElement
        var productImg = product.querySelector('img').src
        var productName = product.querySelector('.item__title').innerText
        var productPrice = product.querySelector('.item__price span').innerText
        addCart(productImg, productName, productPrice)
    }})
})

function addCart(productImg, productName, productPrice) {
    var addTr = document.createElement('tr')
    var cartItem = document.querySelectorAll('.cart table tbody tr')
    for (var i = 0; i < cartItem.length; i++) {
        var productNameText = document.querySelectorAll('.cart__name')
        if(productNameText[i].innerHTML == productName){
            toggleModalDup()
            return
        }
    }
    var trContent = '<td class="cart__item"><img src="'+productImg+'" alt=""></td><td class="cart__name" style="text-align: initial;">'+productName+'</td><td style="display:flex; justify-content: center;"><span>'+productPrice+'</span><p>₫</p></td><td><input class="cart__amount" type="number" value="1" min="1"></td><td class="cart__delete" style="text-align: end;">Xóa</td>'
    addTr.innerHTML = trContent
    var cartTable = document.querySelector('.cart table tbody')
    cartTable.append(addTr)

    cartTotal()
    deleteCart()
}

// Tổng
function cartTotal() {
    var cartItem = document.querySelectorAll('.cart table tbody tr')
    var total = 0
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector('.cart__amount').value
        var priceValue = cartItem[i].querySelector('.cart table tbody tr td span').innerText
        var totalItem = (inputValue * priceValue *1000)
        total = (total + totalItem)
    }
    var cartTotal = document.querySelector('.price__total p span')
    cartTotal.innerHTML = total.toLocaleString('de-DE')
    inputChange()
}

// Xóa
function deleteCart() {
    var cartItem = document.querySelectorAll('.cart table tbody tr')
    for (var i = 0; i < cartItem.length; i++) {
        var productDelete = document.querySelectorAll('.cart__delete')
        productDelete[i].addEventListener('click', (e) => {
            var cartDelele = e.target
            var cartItemDele = cartDelele.parentElement
            cartItemDele.remove()
            cartTotal()
        })
    }
}

function inputChange() {
    var cartItem = document.querySelectorAll('.cart table tbody tr')
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector('.cart__amount')
        inputValue.addEventListener('change', () => {
            cartTotal()
        })
    }
}

