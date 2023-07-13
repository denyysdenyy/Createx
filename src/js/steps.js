function stepUp(){
   const stepsSection = document.querySelector('.steps');
   if(stepsSection){
    const stepsCardsNumber = document.querySelectorAll('.steps__block-number'),
          stepsCardsLine = document.querySelectorAll('.steps__block-line');
           
            let isSectionReached = false;
   
          function timeOutActive() {
            let previousIndex = -1;
          
            for (let i = 0; i < stepsCardsNumber.length; i++) {
              setTimeout(() => {
                if (previousIndex >= 0) {
                  stepsCardsNumber[previousIndex].classList.remove('active');
                }
                stepsCardsNumber[i].style.color = '#FF3F3A'
                stepsCardsNumber[i].classList.add('active');
                stepsCardsLine[i].classList.add('active');
                
          
                previousIndex = i;

              }, 1600 * (i + 1));   
            }
          }
          


          window.addEventListener('scroll', function() {
            const section = document.querySelector('.steps'); 
            const sectionPosition = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
          
            // Проверка, если верхняя граница секции видна внутри окна браузера
            if (sectionPosition.top >= 0 && sectionPosition.top <= windowHeight && !isSectionReached) {
              timeOutActive()
              isSectionReached = true
            }
          });
          
          
    }
}
stepUp()