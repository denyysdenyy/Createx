
function eventsSwitchDirection(){
    const eventsSection = document.querySelector('.events-lectures');

    if(eventsSection){

        // Кнопки
        const btnColumn = document.getElementById('sort-view-column'),
              btnRow = document.getElementById('sort-view-row');

        // 
        const eventsGrid = document.querySelector('.events')
        const eventsCard = document.querySelectorAll('.events__card')

        btnColumn.addEventListener('click',makeDirectionColumn)
        btnRow.addEventListener('click',makeDirectionRow)

        function makeDirectionColumn(){
            if(eventsGrid.classList.contains('row'))
            btnRow.classList.remove('active')
            eventsGrid.classList.remove('row')
            eventsGrid.classList.add('column')
            btnColumn.classList.add('active')
            eventsCard.forEach(card =>{
                card.classList.remove('row')
            })
        }

        function makeDirectionRow(){
            if(eventsGrid.classList.contains('column')){
            btnColumn.classList.remove('active')
            eventsGrid.classList.remove('column')
            eventsGrid.classList.add('row')
            btnRow.classList.add('active')
            eventsCard.forEach(card =>{
                card.classList.add('row')
            })
                
            }
        }

        

        makeDirectionColumn()
    }
}
setTimeout(eventsSwitchDirection,100)