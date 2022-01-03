
var dishes_data = JSON.parse(localStorage.getItem('cartdata'))

console.log(dishes_data)

dishes_data.map( function (data){

    let img = document.createElement('img');
    img.src = data.strMealThumb
    let total = document.querySelector('total')
    let price = document.createElement('p');
  price.innerHTML = Math.round(Math.random() * (500 - 100) + 100 )
    let div = document.createElement('div');
    let maindiv = document.querySelector("#cartitems");
    div.append(img,price)
    maindiv.append(div)
    
} )

function checkout(){
    window.location.href = 'checkout.html'
}