let items = document.querySelectorAll('.case11')
  
items.forEach(item =>{
  const price= parseFloat(item.querySelector('.price').innerHTML.slice(1))
  const inc = item.querySelector('.inc')
  const dec = item.querySelector('.dec')
  const total = item.querySelector('.total')
  const qty =item.querySelector('.qty')
  let quantity = parseFloat(item.querySelector('.qty').innerHTML)

  inc.addEventListener("click",()=>{
   quantity++
   console.log(quantity);
   console.log(price);
   quantity.innerHTML = quantity
    total.innerHTML=`$${price*quantity}`
  })
})

dec.addEventListener("click",()=>{
  total.innerHTML = `$${price*quantity}`
})