import Swiper, { Navigation} from 'swiper';

function createxSwiper(){

    const homeTeamSeciton = document.querySelector('.home-team')
    if(homeTeamSeciton){
        const swiper = new Swiper('.home-team__swiper', {
            // configure Swiper to use modules
            centeredSlides:true,
            centeredSlidesBounds:true,
            spaceBetween:30,
            modules:[Navigation],
            navigation:{
                nextEl:'.swiper-button-next',
                prevEl:'.swiper-button-prev',
            },
              breakpoints:{
                325:{
                    slidesPerView: 1,
                    breakpoints:10,
                },
                768:{
                    slidesPerView:4,
                    breakpoints:30,
                },
              }
          });
    }
}

createxSwiper()