const data= [
    {
        id : 0,
        img : 'img/aqburjeide.jpg',
        name : 'Bürjeide',
        price : 23000,
        save : 3450,
        delievery : 'Jetkızu 3 - 4 kunde',
        itemInCart: false
    },
    {
        id : 1,
        img : 'img/kokburjeide.jpg',
        name : 'Bürjeide',
        price : 23000,
        save : 3450,
        delievery : 'Jetkızu 3 - 4 kunde',
        itemInCart: false
    },
    {
        id : 2,
        img : 'img/qaraburjeide.jpg',
        name : 'Bürjeide',
        price : 23000,
        save : 3450,
        delievery : 'Jetkızu 3 - 4 kunde',
        itemInCart: false
    },
    {
        id : 3,
        img : 'img/qyzylburjeide.jpg',
        name : 'Bürjeide',
        price : 23000,
        save : 3450,
        delievery : 'Jetkızu 3 - 4 kunde',
        itemInCart: false
    },
    {
        id : 4,
        img : 'img/aqfutbolka.jpg',
        name : 'Futbolka',
        price : 9000,
        save : 1500,
        delievery : 'Jetkızu 3 - 4 kunde',
        itemInCart: false
    },
    {
        id : 5,
        img : 'img/kokfutbolka.jpg',
        name : 'Futbolka',
        price : 9000,
        save : 1500,
        delievery : 'Jetkızu 3 - 4 kunde',
        itemInCart: false
    },
    {
        id : 6,
        img : 'img/qarafutbolka.jpg',
        name : 'Futbolka',
        price : 9000,
        save : 1500,
        delievery : 'Jetkızu 3 - 4 kunde',
        itemInCart: false
    },
    {
        id : 7,
        img : 'img/saryfutbolka.jpg',
        name : 'Futbolka',
        price : 9000,
        save : 1500,
        delievery : 'Jetkızu 3 - 4 kunde',
        itemInCart: false
    },{
        id : 8,
        img : 'https://simg.marwin.kz/media/catalog/product/cache/41deb699a7fea062a8915debbbb0442c/s/c/screenshot_20180924-140440_instagram.jpg',
        name : 'Bötelke',
        price : 7000,
        save : 1000,
        delievery : 'Jetkızu 3 - 4 kunde',
        itemInCart: false
    },
    {
        id : 9,
        img : 'img/kese.jpg',
        name : 'Kese',
        price : 4000,
        save : 500,
        delievery : 'Jetkızu 3 - 4 kunde',
        itemInCart: false
    },{
        id : 10,
        img : 'img/qarakese.jpg',
        name : 'Kese',
        price : 4500,
        save : 500,
        delievery : 'Jetkızu 3 - 4 kunde',
        itemInCart: false
    },
    {
        id : 11,
        img : 'img/somke.jpg',
        name : 'Sömke',
        price : 7000,
        save : 1000,
        delievery : 'Jetkızu 3 - 4 kunde',
        itemInCart: false
    }
];

let cartList=[]; 

var i;
var detail =document.getElementsByClassName('card-item');
var detailsImg = document.getElementById('details-img')
var detailTitle = document.getElementById('detail-title')
var detailPrice = document.getElementById('detail-price')
var youSave = document.getElementById('you-save');
var detailsPage = document.getElementById('details-page');
var back = document.getElementById('buy')
back.addEventListener('click',refreshPage)
var addToCarts = document.querySelectorAll('#add-to-cart')
var cart = document.getElementById('cart');


cart.addEventListener('click',displayCart)

var carts = document.getElementById('carts');

carts.addEventListener('click',()=>addToCart(getId))

var home = document.getElementById('logo');

home.addEventListener('click',hideCart);

document.addEventListener('click',function (e){
    if(e.target.id=='remove'){
        var itemId = e.target.parentNode.id
        removeFromCart(itemId)
    }
})

for(i=0;i<data.length;i++){
    detail[i].addEventListener('click',handleDetail)
}

var getId;

addToCarts.forEach(val=>val.addEventListener('click',()=>addToCart(val.parentNode.id)));

function handleDetail(e){
    detailsPage.style.display = 'block'
    getId= this.parentNode.id;
    detailsImg.src= data[getId].img;
    detailTitle.innerHTML=   data[getId].name;
    detailPrice.innerHTML= 'Bağasy :  ' +data[getId].price + 'tg';
    youSave.innerHTML= 'Sızdıñ ünemdeuıñız : (' + data[getId].save + ' tg)';
}

function addToCart(id) {
    if(!data[id].itemInCart){
        cartList= [...cartList,data[id]];
        addItem()
        
        alert('item added to your cart')

    }
    else{
        alert('your item is already there')
    }
    data[id].itemInCart= true
}

function refreshPage(){
    detailsPage.style.display = 'none'
}

function hideCart(){
    document.getElementById('main').style.display= "block";
    document.getElementById('cart-container').style.display= "none";
}

function displayCart(){
    document.getElementById('main').style.display= "none";
    document.getElementById('details-page').style.display= "none";
    document.getElementById('cart-container').style.display= "block";
    if(cartList.length==0){
        document.getElementById('cart-with-items').style.display= "none";
        document.getElementById('empty-cart').style.display= "block";
    }
    else{
        document.getElementById('empty-cart').style.display= "none";
        document.getElementById('cart-with-items').style.display= "block";
        
    }
}

var totalAmount;
var totalItems;
var totalSaving;

function addItem(){
    totalAmount=0;
    totalItems = 0;
    totalSaving=0
    var clrNode=document.getElementById('item-body');
        clrNode.innerHTML= '';
        console.log(clrNode.childNodes)
        cartList.map((cart)=>
        {
            var cartCont = document.getElementById('item-body');
            totalAmount = totalAmount + cart.price;
            totalSaving = totalSaving + cart.save;
            totalItems = totalItems + 1;

            var tempCart = document.createElement('div')
            tempCart.setAttribute('class','cart-list');
            tempCart.setAttribute('id',cart.id);

            var listImg = document.createElement('img');
            listImg.setAttribute('id','list-img');
            listImg.src = cart.img
            tempCart.appendChild(listImg)

            var listName = document.createElement('h3');
            listName.setAttribute('class','list-name');
            listName.innerHTML = cart.name;
            tempCart.appendChild(listName)

            var listPay = document.createElement('h3');
            listPay.setAttribute('class','pay');
            listPay.innerHTML = cart.price;
            tempCart.appendChild(listPay);

            var listQuantity = document.createElement('h3');
            listQuantity.setAttribute('class','quantity');
            listQuantity.innerHTML = '1';
            tempCart.appendChild(listQuantity);

            var listTrash = document.createElement('i');
            listTrash.setAttribute('class','fa fa-trash ');
            listTrash.setAttribute('id','remove');
            tempCart.appendChild(listTrash);

            cartCont.appendChild(tempCart)
            
        })
        document.getElementById('total-amount').innerHTML = 'Jalpy soma : ' + totalAmount + 'tg';
        document.getElementById('total-items').innerHTML = 'Barlyğy : ' + totalItems;
        document.getElementById('you-saved').innerHTML = 'Sızdıñ ünemdeuıñız : ' + totalSaving + 'tg';
        document.getElementById('total').style.display= "block";
}

function removeFromCart(itemId){
    data[itemId].itemInCart = false
    cartList = cartList.filter((list)=>list.id!=itemId);
    addItem()
    if(cartList.length==0){
        document.getElementById('cart-with-items').style.display= "none";
        document.getElementById('empty-cart').style.display= "block";
    }
}