function openMobNav(){
    const burger = document.querySelector('.burger');
    const mobileNav = document.querySelector('.header__nav');
    const body = document.querySelector('body');
    burger.addEventListener('click',() =>{
        console.log('open')
        mobileNav.classList.toggle('active')
        burger.classList.toggle('active')
        body.classList.toggle('_lock')
    })

}
openMobNav()