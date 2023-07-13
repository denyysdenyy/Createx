function showMoreCards(){
const coursesCourseSection = document.querySelector('.courses-course');
if(coursesCourseSection){

    const loadIcon = document.getElementById('loaderIcon'),
    loadBtn = document.querySelector('.courses-course__load'),
    cards = document.querySelectorAll('.courses-course__card');

    for(let i = 9; i < cards.length; i++){
       cards[i].classList.add('hidden')
    }


    loadBtn.addEventListener('click', ()=>{
        loadIcon.classList.add('active')

        for(let i = 9; i < cards.length; i++){
           cards[i].classList.toggle('hidden')
            
        }
    })

    


}
}
setTimeout(showMoreCards,100)
