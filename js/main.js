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

// function calculatetotal() {
//   let subtotal =document.querySelector('.Subtotal')
//   let shipping =documet.querySelector('.subtotal2')
//   let tax =document.querySelector('.subtotal3')
//   let grandtotal =document.querySelector('.parant')
//   let sub=0
//   items.forEach(item => {
//       const total =item.querySelector('.total')
//       sub+=parseFloat(total.innerHTML)
//   }) 
//   subtotal.innerHTML = `$${sub}`
//   grandtotal.innerHTML = `$${sub+ parseFloat(tax.innerHTML)}`
// }


