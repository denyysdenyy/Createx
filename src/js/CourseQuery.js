
 function  dataQuery(){
    // HOME-COURSE SECTION
    //  function courseDataQuery(){
    //     const homeCourseSection = document.querySelector('.home-course'),
    //           homeCourseCard = document.querySelectorAll('.home-course__card'),
    //           homeCourseSpeciality = document.querySelectorAll('.home-course__specialty');
    //     if(homeCourseSection){
    //         const url = 'http://localhost:1337/api/createx-courses';
    //             // Получение данных
    //             fetch(url).then((data)=>{
    //                 return data.json()
    //                 .then(({data})=>{

    //                     // Деструктуризация данных
    //                    data.forEach(({attributes:{title,price,author,specialty}},i)=>{

    //                     // Разметка 
    //                     const markup = () =>{
    //                         return `<img src="img/Home/Home-course/card/teacher-1.png" alt="${author}" class="home-course__card-img">
    //                         <div class="home-course__body">
    //                             <h6 class="home-course__card-speciality">${specialty}</h6>
    //                             <h4 class="home-course__card-title">${title}</h4>
    //                             <div class="home-course__info">
    //                                 <p class="home-course__card-price">$${price}</p>
    //                                 <p class="home-course__card-teacher">by ${author}</p>
    //                             </div>
    //                         </div>
    //                     </a>`
    //                     }

    //                     // Child homeCourseCard вызывается функция в которой возвращается разметка
    //                         homeCourseCard[i].innerHTML = markup();
    //                         homeCourseSpeciality.forEach(elem =>{
    //                             console.log(elem)
    //                         })
                           
                            
    //                    })  
    //                 })
    //             });
    //     }
        
       
    // }

    function courseDataQuery(){}
    const homeCourseSection = document.querySelector('.home-course'),
    homeCourseCard = document.querySelectorAll('.home-course__card');

    if (homeCourseSection) {
        const url = 'http://localhost:1337/api/createx-courses?populate=deep&_limit=500';
      
        const fetchData = async () => {
          const response = await fetch(url).catch(console.log("error"))
          const { data } = await response.json(); 

          data.forEach(({ attributes: { title, price, author, specialty, avatar:{data:{attributes:{url}}}}}, i) => {
            const markup = `
              <img src="http://localhost:1337${url}" alt="${author}" class="home-course__card-img">
              <div class="home-course__body">
                <h6 class="home-course__card-speciality">${specialty}</h6>
                <h4 class="home-course__card-title">${title}</h4>
                <div class="home-course__info">
                  <p class="home-course__card-price">$${price}</p>
                  <p class="home-course__card-teacher">by ${author}</p>
                </div>
              </div>
            `;
      
            homeCourseCard[i].innerHTML = markup;
            
          
          });
        };
      
        fetchData();
      }
    courseDataQuery()
// ---------------------------------------------------------------------------
// HOME-EVENTS SECTION

    function homeEventsDataQuery(){
        const homeEventsSection = document.querySelector('.home-events'),
              homeEventsCard = document.querySelectorAll('.events__card');
        
        if(homeEventsSection){
        const url = 'http://localhost:1337/api/lectures';

                // Получение данных
            fetch(url).then((data) =>{
                return data.json();
            }).then(({data}) =>{

                
                
                data.forEach(({attributes:{date,month,start,finish,title,subtitle}},i) =>{
                    
                    const formattedDate = date <= 9 ? `0${date}` : date;
                    
             
                    
                        const changeStart  = start.split('').splice(0,5).join(''),
                              changeFinish = finish.split('').splice(0,5).join('') ;
                         const markup = () =>{
                             return `<div class="events__info">
                             <p class="events-number">${formattedDate}</p>
                             <div class="events__date">
                                 <p class="events-month">${month}</p>
                                 <p class="events-time">${changeStart}-${changeFinish}</p>
                             </div>
                         </div>
                         <div class="events__discription">
                             <p class="events-title">${title}</p>
                             <p class="events-subtitle">${subtitle}</p>
                         </div>
                         <a href="#" class="default-button-second">View more</a>`
                         }
                         
                        
                         homeEventsCard[i].innerHTML = markup()


                })
            }).catch(console.log('error'))
        }
    }
    homeEventsDataQuery()

      // ---------------------------------------------------------------------------
  // HOME-TEAM SECTION

  function homeTeamDataQuery() {
    const homeTeamSection = document.querySelector('.home-team')
    const homeTeamCard = document.querySelectorAll('.home-team__card')
      if(homeTeamSection){
        const url = 'http://localhost:1337/api/authors-createx?populate=deep&_limit=500';

        fetch(url).then(data =>{
          return data.json()
        }).then(({data}) =>{
         
          data.forEach(({attributes:{author,specialty,avatar:{data:{attributes:{url}}}}},i)=>{

            const markup = ()=>{
              return `<div class="home-team__card-wrapper">
              <img src="http://localhost:1337${url}" alt="" class="home-team__card-avatar">
              <ul class="home-team__card-list">
              <li class="home-team__card-li"><a href="#" class="link-facebook"></a></li>
              <li class="home-team__card-li"><a href="#" class="link-instagram"></a></li>
              <li class="home-team__card-li"><a href="#" class="link-linkedin"></a></li>
              </ul>
          </div>
          <div class="home-team__author-info">
              <h4 class="home-team__author-name">${author}</h4>
              <p class="home-team__author-specialty">${specialty}</p>
          </div>`
            }

            homeTeamCard[i].innerHTML = markup()
          })
          
        })
        
        
        
        

      }
    }

    homeTeamDataQuery()
  }
dataQuery()