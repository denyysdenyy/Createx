function tabHandler(){

    const tabBtn = document.querySelectorAll('.home-benefits__nav-btn');
    const tabsContent = document.querySelectorAll('.home-benefits__tab-content');
    
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
    
    // По умолчанию ставит класс active на первую кнопку
    document.querySelector('.home-benefits__tab-content').click(); 
    document.querySelector('.home-benefits__nav-btn').click(); 

}

tabHandler()