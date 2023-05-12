function tabHandler(){
    function homeBenefitTab(){
        const homeBenefitsSection = document.querySelector('.home-benefits')
        if(homeBenefitsSection){
            const tabBtn = document.querySelectorAll('.home-benefits__nav-btn');
            const tabsContent = document.querySelectorAll('.home-benefits__tab-content');
            
            if(tabBtn){
                tabBtn.forEach((tab,index) =>{
                    
                    tab.addEventListener('click',()=>{
                        tabBtn.forEach(tab =>{
                            tab.classList.remove('active')
                        })
                        tab.classList.add('active');
            
                        tabsContent.forEach(content =>{
                            content.classList.remove('active')
                        })
                        tabsContent[index].classList.add('active')
            
                    })
                })
            }
        
        
                
                // По умолчанию ставит класс active на первую кнопку
                if(tabBtn){
                    document.querySelector('.home-benefits__tab-content').click(); 
                    document.querySelector('.home-benefits__nav-btn').click(); 
                }
        }
    }

    homeBenefitTab()

    function coursesTab(){
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
                                
                            }else{
                                card.classList.add('hide')
                            }
                        }
                    })

                })
           })
        }
    }
    setTimeout(coursesTab,200)
    

}

tabHandler()
