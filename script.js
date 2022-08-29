  
let inp1 = document.getElementById('reset');
let inp2 = document.getElementById('inp');
let dollar = 35;
let euros = 30;
 let element = document.getElementById('select_');
 
element.addEventListener('change', function(){
   const element = document.getElementById('select_').value;
   console.log(element)
   if(element == 1){
      inp1.addEventListener('input', (e) =>{
         let sum =  e.target.value / dollar;
         inp2.value = sum.toFixed(2)
      })
   }else if(element == 2){
      inp1.addEventListener('input', (e) =>{
         let sum =  e.target.value / euros;
         inp2.value = sum.toFixed(2);})
   }else{
      inp1.addEventListener('input', (e) =>{
         let sum =  e.target.value + 'ошибка';
         inp2.value = sum
      })
   }
})