function tabEvents(){
    const eventsSection = document.querySelector('.events-lectures'),
          eventsSortSelectTheme = document.querySelector('.events-lectures__sort-select');
          const eventsLecturesCard = document.querySelectorAll('.events__card');
          
    if(eventsSection){

       function tabEventsHandler(){
            const getValue = eventsSortSelectTheme.value
            eventsLecturesCard.forEach(el =>{
                const filter = el.getAttribute('data-subtitle')
                if(getValue === 'all'){
                    el.classList.remove('hide')
                } else{
                    if(getValue === filter){
                        el.classList.remove('hide')
                    } else {
                        el.classList.add('hide')
                    }
                }
            })    
       }
        eventsSortSelectTheme.addEventListener('change',tabEventsHandler);
    }
}

setTimeout(tabEvents,100)