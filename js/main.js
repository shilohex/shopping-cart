let items = document.querySelectorAll('.case1')
  
items.forEach(case12 =>{
  const price= parseFloat(case12.querySelector('.price').innerHTML)
  const inc = case12.querySelector('.inc')
  const dec = case12.querySelector('.dec')
  const heartButton = document.querySelector('.heart');
  const total = case12.querySelector('.total')
  let qty =case12.querySelector('.qty')
  let quantity = parseInt(qty.textContent)

  inc.addEventListener("click",()=>{
   quantity++
   console.log(quantity);
   console.log(price);
   qty.innerHTML = quantity
    total.innerHTML=`$${price*quantity}`
  })
  dec.addEventListener("click",()=>{
    quantity--
    console.log(quantity);
    console.log(price);
    qty.innerHTML = quantity
     total.innerHTML=`$${price*quantity}`
})
  heartButton.addEventListener("click",()=>{
    heartButton.style.color = (heartButton.style.color == red)?white:red;
})

})
//your function was within the loop thats why you were having trouble accessing it 
// also that approach would only work for the first like button.
// function toggleHeart() {
  // const heartButton = document.querySelector('.heart');
//   heartButton.classList.toggle('clicked');
// }

function calculateTotal() {
  // Extract values from HTML elements
  const subtotal = parseFloat(document.querySelector('.subtotal-value').innerText.slice(1));
  const shipping = parseFloat(document.querySelector('.subtotal2 .subtotal-value').innerText.slice(1));
  const tax = parseFloat(document.querySelector('.subtotal3 .subtotal-value').innerText.slice(1));

  // Calculate total
  const total = subtotal + shipping + tax;

  // Update the Total value in the HTML
 document.querySelector('.lastsub .subtotal-value').innerText = `$${total}`;


 // Call the function when the page loads
 document.addEventListener('DOMContentLoaded', calculateTotal);
}

// Call the function when the page loads or when an item is added to the cart
calculateTotal();




