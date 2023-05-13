function searchBarCourses() {
    const courseCoursesSection = document.querySelector('.courses-course');
    if (courseCoursesSection) {
      const domElements = {
        search: document.querySelector('.courses-course__form-search'),
        searchBtn: document.querySelector('.courses-course__form-btn'),
        cardTitle: document.querySelectorAll('.home-course__card-title'),
        card: document.querySelectorAll('.courses-course__card'),
        cardSpecialty: document.querySelectorAll('.home-course__card-speciality'),
        emptyCourse: document.querySelector('.empty-cards')
      }
      
    
      domElements.search.addEventListener('input', () => {
        const searchQuery = domElements.search.value.trim().toLowerCase();
    
        domElements.card.forEach((card, i) => {
          const cardTitle = domElements.cardTitle[i].textContent.trim().toLowerCase();
          const cardSpecialty = domElements.cardSpecialty[i].textContent.trim().toLowerCase();
          const shouldShow = cardTitle.includes(searchQuery) || cardSpecialty.includes(searchQuery);
    
          if (shouldShow) {
            card.style.display = 'block';
            domElements.emptyCourse.classList.remove('active')
          } else {
            card.style.display = 'none';
            domElements.emptyCourse.classList.add('active')

          }
        });
      });
    }
  }
  
  setTimeout(searchBarCourses, 200);  





