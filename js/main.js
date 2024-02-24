let items = document.querySelectorAll('.case1')
  
items.forEach(case12 =>{
  const price= parseFloat(case12.querySelector('.price').innerHTML)
  const inc = case12.querySelector('.inc')
  const dec = case12.querySelector('.dec')
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


})