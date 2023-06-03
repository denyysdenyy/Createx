function searchBarEvents(){
    const eventsSection = document.querySelector('.events-lectures');
    console.log(eventsSection)
    if(eventsSection){
        const domElements = {
            search:document.querySelector('.search-input'),
            card:document.querySelectorAll('.events__card'),
            cardTitle:document.querySelectorAll('.events-title'),
            cardSubtitle: document.querySelectorAll('.events-subtitle'),
        };

        domElements.search.addEventListener('input',()=>{
            const searchValue = domElements.search.value.trim().toLowerCase();
            
            domElements.card.forEach((card,i)=>{
                const cardTitle = domElements.cardTitle[i].textContent.trim().toLowerCase(),
                       cardSubtitle = domElements.cardSubtitle[i].textContent.trim().toLowerCase();
                const shouldShow = cardTitle.includes(searchValue) || cardSubtitle.includes(searchValue);
                       
                if(shouldShow){
                    card.style.display = 'flex'
                } else {
                    card.style.display = 'none'
                }
            })
        })
    
    }
}

setTimeout(searchBarEvents,100)