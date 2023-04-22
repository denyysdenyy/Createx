function openMobNav(){
    const header = document.querySelector('header');
    if(header){
        const burger = document.querySelector('.burger');
        const mobileNav = document.querySelector('.header__nav');
        const body = document.querySelector('body');
        if(burger){
            burger.addEventListener('click',() =>{
                console.log('open')
                mobileNav.classList.toggle('active')
                burger.classList.toggle('active')
                body.classList.toggle('_lock')
            })
        }
    }

}
openMobNav()