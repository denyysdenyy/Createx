window.addEventListener('load',()=>{
   const maskLoader = document.querySelector('.mask'),
   loader = document.querySelector('.loader'),
   body = document.querySelector('body');

   if(loader){
    maskLoader.style.display = 'none'
    body.classList.remove('_lock')
   }

})