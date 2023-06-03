import * as flsFunctions from "./modules/functions.js";
import AOS from 'aos';
flsFunctions.isWebp();


// Animation
AOS.init();


// DATA
import dataQuery from "./data/data.js";

// BURGER
import openMobileNav from './burger.js';

// CountUp 
import CountNumbers from './countNumbers.js';

// TABS
import tabCourses from "./tabs/Course/tabCourse.js";
import tabBenefit from "./tabs/Home/tabBenefit.js";
import tabEvents from "./tabs/Events/tabEvents.js"

// SWIPER
import createxSwiper from './createxSwiper.js';
// SEARCH
import searchBarCourses from "./searchBar.js";

// SORT
import sort from "./sort.js";


  
 
async function go(){
    let a = await dataQuery();
    let b = await tabBenefit();
    let c = await createxSwiper();

}
go()

