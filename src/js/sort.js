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
      let numArr = Array.from(eventsCard); // Convert NodeList to array

      // Custom comparison function for sorting by date
      const compareByDate = (a, b) => {
        const aDate = new Date(a.dataset.date);
        const bDate = new Date(b.dataset.date);
        return aDate - bDate;
      };

      // Sort the array using the compareByDate function
      numArr.sort(compareByDate);

      // Clear the card wrapper and add the sorted cards
      eventsCardWrapper.innerHTML = '';
      numArr.forEach((elem) => {
        eventsCardWrapper.appendChild(elem);
      });
    }
  }
}

setTimeout(sort, 200);
