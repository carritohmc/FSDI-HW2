let productName;
let productPrice;
let productQuantity;

function shopping(){
productName = prompt("Please enter the product name");
productPrice = prompt("Please enter the product's price");
productQuantity = prompt("Please enter the quantity");
displayProduct(productName,productPrice,productQuantity);
}
function displayProduct(product,price,quantity){
document.write(`
<div class= "container">
<p> ${product} ----- ${price} </p>
<p> Taxes ---- 4%</p>
<p> Sub ---- ${price*1.06}</p>
<p> Total --- ${price*1.06*quantity}</p>
<div/>
`);
}

