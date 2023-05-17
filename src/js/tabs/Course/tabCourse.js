   function tabCourses(){
    const coursesCourseSection = document.querySelector('.courses-course')
    if(coursesCourseSection){
  
       const buttons = document.querySelectorAll('.courses-course__categories-btn');
       const courseCards = document.querySelectorAll('.courses-course__card');
       buttons.forEach(btn =>{
            btn.addEventListener('click', (e) =>{
                const filter = e.target.dataset.specialty;
                courseCards.forEach(card =>{
                    if(filter === 'all'){
                        card.classList.remove('hide')
                    } 
                    else {
                        if(card.classList.contains(filter)){
                        card.classList.remove('hide')
                            
                        } else{
                            card.classList.add('hide')
                        }
                    }
                })

            })
        })
    }
  }

setTimeout(tabCourses,200)
