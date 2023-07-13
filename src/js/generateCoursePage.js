function generateCoursePage(){
    const courseSection = document.querySelector('.courses-course');
    if(courseSection){
        const card = document.querySelectorAll('.courses-course__card')
        card.forEach((el) =>{
            el.addEventListener('click',(e)=>{
                
            })
        })
    }
}

setTimeout(generateCoursePage,100)