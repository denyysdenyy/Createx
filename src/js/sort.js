function sort() {
  const eventsLectures = document.querySelector('.events-lectures');
  const eventsCard = document.querySelectorAll('.events__card');
  const eventsSortSelectDate = document.getElementById('events-date-sort');
  const eventsCardWrapper = document.querySelector('.events');
  const eventsCardMonth = document.querySelectorAll('.events-month');

  if (eventsLectures) {
    function selectHandler() {
      eventsSortSelectDate.addEventListener('change', () => {
        const getValue = eventsSortSelectDate.value;
        if (getValue === 'latest') {
          sortCards();
        }
      });
    }
    selectHandler();

    function sortCards() {
      let numArr = Array.from(eventsCard); // Преобразовываем NodeList в массив
      numArr.sort((a, b) => {
        const aMonth = a.querySelector('.events-month').innerText.toLowerCase(); // Получаем месяц из карточки A
        const bMonth = b.querySelector('.events-month').innerText.toLowerCase(); // Получаем месяц из карточки B
        const aNumber = +a.dataset.number; // Получаем число из карточки A
        const bNumber = +b.dataset.number; // Получаем число из карточки B
        
        // Сравниваем месяцы с учетом порядка
        if (aMonth < bMonth) {
          return -1;
        } else if (aMonth > bMonth) {
          return 1;
        } else {
          // Если месяцы равны, сравниваем числа
          return aNumber - bNumber;
        }
      });
    
      // Очищаем обертку карточек и добавляем отсортированные карточки
      eventsCardWrapper.innerHTML = '';
      numArr.forEach(elem => {
        eventsCardWrapper.appendChild(elem);
      });
    }
    
    
  }
}

setTimeout(sort, 200);
