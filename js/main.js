let items = document.querySelectorAll('.case12')
  
items.forEach(case12 =>{
  const price= parseFloat(case12.querySelector('.price').innerHTML)
  const inc = case12.querySelector('.inc')
  const dec = case12.querySelector('.dec')
  const total = case12.querySelector('.total')
  const qty =case12.querySelector('.qty')
  let quantity = parseInt(case12.querySelector('.qty').innerHTML)

  inc.addEventListener("click",()=>{
   quantity++
   console.log(quantity);
   console.log(price);
   qty.innerHTML = quantity
    total.innerHTML=`$${price*quantity}`
  })
  dec.addEventListener("click",()=>{
  total.innerHTML = `$${price*quantity}`
})


})