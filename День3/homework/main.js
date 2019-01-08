let productsPage = document.querySelector(".products");
let numOfProducts = 15; //Кол-во товаров на странице
let basket = document.querySelector(".basket")
let basketList = document.querySelector(".basketList")
for (let i = 0; i < numOfProducts; i++){
    createProduct(i+1)
}
function createProduct(numOfProduct){
    let div = document.createElement('div');
    div.classList.add("product");
    div.id = numOfProduct;
    createName(div, numOfProduct);
    createPrice(div);
    createButton(div);
    productsPage.appendChild(div);
}
function createName(element, i) {
    let div = document.createElement('div');
    div.innerText = `Product №${i}`;
    div.className = 'name';
    element.appendChild(div);
}

function createPrice(element) {
    let div = document.createElement('div');
    let price = Math.round(Math.random()*1000);
    div.innerHTML = price+"$";
    div.classList.add("price");
    div.id = price;
    element.appendChild(div)
}

function createButton(element) {
    let button = document.createElement('button');
    button.innerText = "Add to busket";
    button.classList.add("addProduct");
    button.addEventListener('click', addToBasket);
    element.appendChild(button);
}

let totalPrice = 0

function addToBasket(event) {
    let button = event.target;
    let product = button.parentElement

    let price = product.querySelector('.price').id;
    let name = product.querySelector('.name').innerHTML;

    let div = document.createElement('div');
    div.className = 'basketProduct';
    div.id = `${price}`;
    div.innerHTML = name + ":   " + price +"$";

    totalPrice += +price;

    updateTotal();

    createDeleteButton(div)

    basketList.appendChild(div)
}

function createDeleteButton(parent) {
    let button = document.createElement('button');

    button.className = "deleteElement"
    button.innerHTML = "🗑"
    button.addEventListener("click", function () {
        totalPrice -= +parent.id
        parent.remove()
        updateTotal()
    })
    parent.appendChild(button)
}

function updateTotal(){
    let total = basket.querySelector('.total')
    total.innerHTML = "Total: " + totalPrice + "$"
}

let deleteAll = basket.querySelector(".deleteAll")

deleteAll.addEventListener('click', function () {
    totalPrice = 0

    let productsInBasket = basket.querySelectorAll(".basketProduct")

    for (let i = 0; i < productsInBasket.length; i++){
        productsInBasket[i].remove()
    }

    updateTotal()
});