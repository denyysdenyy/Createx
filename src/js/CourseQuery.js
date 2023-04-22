
function courseDataQuery(){
    const homeCourseCard = document.querySelectorAll('.home-course__card');
    const homeCourseCardSpeclity = document.querySelectorAll('.home-course-speciality');
    const url = 'https://api.jsonbin.io/v3/b/643c72aeebd26539d0ac6822';
    
    // Получение данных
    fetch(url).then((data)=>{
        return data.json()
    }).then(({record:{courses}}) =>{

        // Цикл для деструктуризации массива из объектов

        courses.forEach(({ title, specialty , price, teacher },i) => {

            
            const markup = () =>{
                
                
                return `<img src="img/Home/Home-course/card/teacher-1.png" alt="${teacher}" class="home-course__card-img">
                <div class="home-course__body">
                    <h6 class="home-course__card-speciality">${specialty}</h6>
                    <h4 class="home-course__card-title">${title}</h4>
                    <div class="home-course__info">
                        <p class="home-course__card-price">$${price}</p>
                        <p class="home-course__card-teacher">by ${teacher}</p>
                    </div>
                </div>
            </a>`

            }
        
            homeCourseCard[i].innerHTML = markup();
          });
        });
}
courseDataQuery()