
// function drop (){
//     let  icon = document.querySelector('.underneath');
//   let result = (!icon.classList.contains('visible')) ? icon.classList.add('visible') : icon.classList.remove('visible'); 
  
// }

 const  icon = document.querySelector('.js-icon');
 const icon1 =document.querySelector('.page-ul');
 icon.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    icon1.classList.toggle('visible')



 })
const js_down = document.querySelector('.js-down');
const underneath = document.querySelector(".underneath");
js_down.addEventListener('click', (event) => {
    event.preventDefault();
    underneath.classList.toggle('visible')
})


