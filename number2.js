
// let amountElement2 = document.getElementById('amount2')


// let amount2 = amountElement2.value



// let render2 = (amount2) =>{
//    amountElement2.value = amount2;
// }

// let handlePlus2 = () =>{
  
//   amount2 ++
 
//   render2(amount2)
// }
// let handleMinus2 = () =>{
//   if(amount2 > 1){
//     amount2 --
 
//   render2(amount2)
//   }
  
// }

function increaseValue2() {
  var value = parseInt(document.getElementById('amount2').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('amount2').value = value;
}

function decreaseValue2() {
  var value = parseInt(document.getElementById('amount2').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('amount2').value = value;
}
