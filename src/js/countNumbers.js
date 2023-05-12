import { CountUp  } from "countup.js";

function countNumbers(){

    const homeHeroSection = document.querySelector('.home-hero')
    if(homeHeroSection){
        const countUp = new CountUp('hero-counter-1', 1200, { enableScrollSpy: true ,scrollSpyOnce: true, duration: 2,separator:''});
        const countUpSecond = new CountUp('hero-counter-2', 84, { enableScrollSpy: true ,scrollSpyOnce: true, duration: 2});
        const countUpThird = new CountUp('hero-counter-3', 16, { enableScrollSpy: true ,scrollSpyOnce: true, duration: 2});
        const countUpFirth = new CountUp('hero-counter-4', 5, { enableScrollSpy: true ,scrollSpyOnce: true, duration: 3});
    
        if(countUp){
    
            countUp.start();
            countUpSecond.start();
            countUpThird.start();
            countUpFirth.start();
        }

    }
 

}

countNumbers();