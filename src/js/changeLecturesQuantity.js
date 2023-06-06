function changeLecturesQuantity(){
  const eventsLecturesSection = document.querySelector('.events-lectures');
    if(eventsLecturesSection){
        const eventsCard = document.querySelectorAll('.events__card')
        const eventsPerShowInput = document.querySelector('.events-lectures__sort-pagecount-number');


        eventsPerShowInput.addEventListener('input',()=>{
            const getInputValue = eventsPerShowInput.value;
            const NumToShow = Number(getInputValue);

                  // Скрыть все карточки
            eventsCard.forEach(card => {
                card.style.display = 'none'
            })


            // Показать только нужное количество карточек
            for(let i = 0; i < NumToShow; i++){
                if(eventsCard[i]){
                    eventsCard[i].style.display = 'flex'
                }
            }
        });
        
    }
}

setTimeout(changeLecturesQuantity,100)