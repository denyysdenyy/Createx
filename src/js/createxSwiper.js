import Swiper, { Navigation,Autoplay,Pagination} from 'swiper';



function createxSwiper(){

    function homeTeamSwiper(){
        const homeTeamSeciton = document.querySelector('.home-team')
        if(homeTeamSeciton){
            const swiper = new Swiper('.home-team__swiper', {
                slidesPerView:'auto',
                modules:[Navigation,Autoplay],
                autoplay:{
                    delay:2000
                },
                
                navigation:{
                    nextEl:'.home-team-swiper-button-next',
                    prevEl:'.home-team-swiper-button-prev',
                },
                  breakpoints:{
                    320:{
                        centeredSlidesBounds:true,
                        // slidesPerView:1,
                        centeredSlides:true,
                        spaceBetween:10,
                    },
                    525:{
                        // slidesPerView:2,
                    },
                    991:{
                        spaceBetween:30,
                        // slidesPerView:3,
    
                    },
                    1200:{
                        // slidesPerView:4,
                        spaceBetween:30,
    
                    },
                  }
              });
        }
    }
    homeTeamSwiper()


    function commentsSwiper(){
        const commentsSection = document.querySelector('.comments')
        if(commentsSection){
            const swiper = new Swiper('.comments__swiper', {
                modules:[Navigation,Autoplay,Pagination],
                loop:true,
                autoplay:{
                    delay:2000
                },
                speed: 500,
                navigation:{
                    nextEl:'.comments-swiper-button-next',
                    prevEl:'.comments-swiper-button-prev'
                },
                pagination: {
                    el: '.swiper-pagination',
                  },
                centeredSlides:true,
                centeredSlidesBounds:true,
              });
        }
    }
    commentsSwiper()

    function latestPostsMobileSwiper(){
        const latestPostsMobileSection = document.querySelector('.latest-posts-mobile');
        if(latestPostsMobileSection){
            const swiper = new Swiper('.latest-posts-mobile__swiper', {
               
                slidesPerView: 'auto',
                breakpoints:{
                    320:{
                        spaceBetween:130,
                    },
                    475:{
                        centeredSlides:true,
                        centeredSlidesBounds:true,
                        spaceBetween:30,
                    }
                }
              });
        }
    }
    latestPostsMobileSwiper()
}

createxSwiper()