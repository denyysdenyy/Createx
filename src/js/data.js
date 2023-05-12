
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

    function courseDataQuery(){
      const coursesCourseSection = document.querySelector('.courses-course')
      const homeCourseSection = document.querySelector('.home-course'),
      homeCourseCard = document.querySelectorAll('.home-course__card');
  
      if (homeCourseSection) {
          const url = 'http://localhost:1337/api/createx-courses?populate=deep&_limit=';
        
          const fetchData = async () => {
            const response = await fetch(url).catch(console.log("error"))
            const { data } = await response.json(); 
            
            data.forEach(({ attributes: { title, price, author, specialty, avatar:{data:{attributes:{url}}}}}, i) => {
              
              const markup = () => {
                   return `
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
  
                } 

                homeCourseCard[i].innerHTML = markup()
            
            });
          };
        
          fetchData();
        }
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

  function getTeamData() {
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

    getTeamData()


    // SECTION COMMENTS
    function getCommentsData(){
      const commentsSection = document.querySelector('.comments');
      const commentsCard = document.querySelectorAll('.comments__card')
      if(commentsSection){
        const url = 'http://localhost:1337/api/createx-students?populate=deep&_limit=500';
        fetch(url).then(data =>{
         return data.json()
        }).then(({data}) =>{
          data.forEach(({attributes:{name,comment,position,course,avatar:{data:[{attributes:{url}}]}}},i)=>{
            
            const markup = () =>{
              return `<p class="comments__text">${comment}</p>
                 <div class="comments__profile">
                  <img src="http://localhost:1337${url}" alt="" class="comments__avatar">
                  <div class="comments__user-info">
                      <p class="comments__user-name">${name}</p>
                      <p class="comments__user-position">${position} , ${course}</p>
                  </div>
              </div>`
            }
            commentsCard[i].innerHTML = markup();

          })
        }).catch(console.log('error'))

      }
    }
    getCommentsData()

    // LATEST-POSTS DATA

    function getLatestPostsData(){
      const latestPostsSection = document.querySelector('.latest-posts');
      // const latestPostsSectionMobile = document.querySelector('.latest-posts-mobile');
      const latestPostsPost = document.querySelectorAll('.latest-posts__post');
      
      if(latestPostsSection){
        const url = 'http://localhost:1337/api/createx-posts?populate=deep&_limit=500';

        fetch(url).then(data => {
          return data.json()
        }).then(({data}) =>{


          data.forEach(({attributes:{title,subtitle,genre,specialty,month,date,year,duration,cover:{data:{attributes:{url}}}}},i)=>{

            function getSpecialty(){
              switch(genre){
                case "Video":
                  return `<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7117 6.44002C11.4099 6.97368 11.4099 8.02507 10.7117 8.55873L7.65841 10.8924C6.78101 11.5629 5.51541 10.9373 5.51541 9.833V5.16575C5.51541 4.06144 6.78101 3.43581 7.65841 4.1064L10.7117 6.44002ZM9.90204 7.49938L6.84875 5.16575L6.84875 9.833L9.90204 7.49938Z" fill="#424551"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.99984 1.49935C4.68613 1.49935 1.99984 4.18564 1.99984 7.49935C1.99984 10.8131 4.68613 13.4993 7.99984 13.4993C11.3135 13.4993 13.9998 10.8131 13.9998 7.49935C13.9998 4.18564 11.3135 1.49935 7.99984 1.49935ZM0.666504 7.49935C0.666504 3.44926 3.94975 0.166016 7.99984 0.166016C12.0499 0.166016 15.3332 3.44926 15.3332 7.49935C15.3332 11.5494 12.0499 14.8327 7.99984 14.8327C3.94975 14.8327 0.666504 11.5494 0.666504 7.49935Z" fill="#424551"/></svg>`
                case "Article":
                  return `<svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.3335 8.50065C3.3335 8.13246 3.63197 7.83398 4.00016 7.83398H8.00016C8.36835 7.83398 8.66683 8.13246 8.66683 8.50065C8.66683 8.86884 8.36835 9.16732 8.00016 9.16732H4.00016C3.63197 9.16732 3.3335 8.86884 3.3335 8.50065Z" fill="#424551"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.3335 11.0007C3.3335 10.6325 3.63197 10.334 4.00016 10.334H6.00016C6.36835 10.334 6.66683 10.6325 6.66683 11.0007C6.66683 11.3688 6.36835 11.6673 6.00016 11.6673H4.00016C3.63197 11.6673 3.3335 11.3688 3.3335 11.0007Z" fill="#424551"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.02877 0.529247C4.1538 0.404222 4.32337 0.333984 4.50018 0.333984H9.00018C10.4729 0.333984 11.6668 1.52789 11.6668 3.00065L11.6668 12.0007C11.6668 13.4734 10.4729 14.6673 9.00018 14.6673H3.00016C1.5274 14.6673 0.333492 13.4734 0.333496 12.0006L0.333513 4.50065C0.333513 4.32384 0.403751 4.15427 0.528775 4.02925L4.02877 0.529247ZM4.33349 2.11015V4.33398H2.10965L4.33349 2.11015ZM1.66684 5.66732L1.66683 12.0006C1.66683 12.737 2.26378 13.334 3.00016 13.334H9.00018C9.73656 13.334 10.3335 12.737 10.3335 12.0007L10.3335 3.00065C10.3335 2.26427 9.73656 1.66732 9.00018 1.66732H5.66682V5.00065C5.66682 5.36884 5.36835 5.66732 5.00016 5.66732H1.66684Z" fill="#424551"/></svg>`
                case "Podcast":
                  return `<svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2.13333 4.76706C2.13333 2.63156 3.8645 0.900391 6 0.900391C8.1355 0.900391 9.86667 2.63156 9.86667 4.76706V7.96706C9.86667 10.1026 8.1355 11.8337 6 11.8337C3.8645 11.8337 2.13333 10.1026 2.13333 7.96706V4.76706ZM6 2.23372C4.60088 2.23372 3.46667 3.36794 3.46667 4.76706V7.96706C3.46667 9.36618 4.60088 10.5004 6 10.5004C7.39912 10.5004 8.53333 9.36618 8.53333 7.96706V4.76706C8.53333 3.36794 7.39912 2.23372 6 2.23372Z" fill="#424551"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666667 6.23372C1.03486 6.23372 1.33333 6.5322 1.33333 6.90039V7.96706C1.33333 10.5444 3.42267 12.6337 6 12.6337C8.57733 12.6337 10.6667 10.5444 10.6667 7.96706V6.90039C10.6667 6.5322 10.9651 6.23372 11.3333 6.23372C11.7015 6.23372 12 6.5322 12 6.90039V7.96706C12 11.2808 9.31371 13.9671 6 13.9671C2.68629 13.9671 0 11.2808 0 7.96706V6.90039C0 6.5322 0.298477 6.23372 0.666667 6.23372Z" fill="#424551"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M6 13.1671C6.36819 13.1671 6.66667 13.4655 6.66667 13.8337V14.7671H8.13333C8.50152 14.7671 8.8 15.0655 8.8 15.4337C8.8 15.8019 8.50152 16.1004 8.13333 16.1004H3.86667C3.49848 16.1004 3.2 15.8019 3.2 15.4337C3.2 15.0655 3.49848 14.7671 3.86667 14.7671H5.33333V13.8337C5.33333 13.4655 5.63181 13.1671 6 13.1671Z" fill="#424551"/> </svg> `
                }
            }


            const markup = () =>{
              return `<div class="latest-posts__wrapper">
              <img src="http://localhost:1337${url}" alt="" class="latest-post-img">
              <p class="latest-posts-genre"> ${getSpecialty(genre)}
                   ${genre}</p>
          </div>
          <div class="latest-posts__info">
              <p class="latest-posts-specialty">${specialty}</p>
              <p class="latest-posts-date"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.00016 0.333984C5.36835 0.333984 5.66683 0.632461 5.66683 1.00065V1.33399L10.3335 1.334V1.00065C10.3335 0.632462 10.632 0.333985 11.0002 0.333984C11.3684 0.333984 11.6668 0.632461 11.6668 1.00065V1.334L12.5002 1.33401C13.9729 1.33401 15.1668 2.52792 15.1668 4.00067V12.0006C15.1668 13.4734 13.9729 14.6673 12.5002 14.6673L3.50016 14.6673C2.0274 14.6673 0.833496 13.4734 0.833496 12.0007L0.833496 5.50078L0.833496 4.00065C0.833496 2.52789 2.02741 1.33398 3.50017 1.33399L4.3335 1.33399V1.00065C4.3335 0.632461 4.63197 0.333984 5.00016 0.333984ZM4.3335 2.66732L3.50017 2.66732C2.76378 2.66732 2.16683 3.26427 2.16683 4.00065V4.83398H13.8335V4.00067C13.8335 3.26429 13.2365 2.66734 12.5002 2.66734L11.6668 2.66734V3.00065C11.6668 3.36884 11.3684 3.66732 11.0002 3.66732C10.632 3.66732 10.3335 3.36884 10.3335 3.00065V2.66734L5.66683 2.66733V3.00065C5.66683 3.36884 5.36835 3.66732 5.00016 3.66732C4.63197 3.66732 4.3335 3.36884 4.3335 3.00065V2.66732ZM13.8335 6.16732H2.16683L2.16683 12.0007C2.16683 12.737 2.76378 13.334 3.50016 13.334L12.5002 13.334C13.2365 13.334 13.8335 12.737 13.8335 12.0006V6.16732Z" fill="#787A80"/></svg>${month} ${date}, ${year}</p>
              <p class="latest-posts-time"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.6665 3.83268C8.6665 3.46449 8.36803 3.16602 7.99984 3.16602C7.63165 3.16602 7.33317 3.46449 7.33317 3.83268V7.49935C7.33317 7.67616 7.40341 7.84573 7.52843 7.97075L9.52843 9.97075C9.78878 10.2311 10.2109 10.2311 10.4712 9.97075C10.7316 9.7104 10.7316 9.28829 10.4712 9.02794L8.6665 7.22321V3.83268Z" fill="#787A80"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.99984 0.166016C3.94975 0.166016 0.666504 3.44926 0.666504 7.49935C0.666504 11.5494 3.94975 14.8327 7.99984 14.8327C12.0499 14.8327 15.3332 11.5494 15.3332 7.49935C15.3332 3.44926 12.0499 0.166016 7.99984 0.166016ZM1.99984 7.49935C1.99984 4.18564 4.68613 1.49935 7.99984 1.49935C11.3135 1.49935 13.9998 4.18564 13.9998 7.49935C13.9998 10.8131 11.3135 13.4993 7.99984 13.4993C4.68613 13.4993 1.99984 10.8131 1.99984 7.49935Z" fill="#787A80"/></svg> ${duration} min</p>
          </div>
          <div class="latest-posts__discription">
              <h4 class="latest-posts-title">${title}</h4>
              <h5 class="latest-posts-subtitle">${subtitle}</h5>
          </div>
              <a href="#" class="latest-posts-link">Listen <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.5857 0.292893C11.9693 -0.0976311 12.5914 -0.0976311 12.975 0.292893L17.396 4.79289C17.7796 5.18342 17.7796 5.81658 17.396 6.20711L12.975 10.7071C12.5914 11.0976 11.9693 11.0976 11.5857 10.7071C11.202 10.3166 11.202 9.68342 11.5857 9.29289L14.3295 6.5H0.982428C0.439848 6.5 0 6.05228 0 5.5C0 4.94772 0.439848 4.5 0.982428 4.5H14.3295L11.5857 1.70711C11.202 1.31658 11.202 0.683417 11.5857 0.292893Z" fill="#424551"/></svg></a>`
            }



            latestPostsPost[i].innerHTML = markup()
          })

        }).catch(console.log('error'))
      }
    }
    getLatestPostsData()
  }

function getCoursesData(){
  // Получаем ссылки на элементы DOM
  const url = 'http://localhost:1337/api/createx-courses?populate=deep&_limit=500';
  const  homeCourseCard = document.querySelectorAll('.home-course__card');
  const coursesCourseSection = document.querySelector('.courses-course');
  const coursesCoursCategories = document.querySelector('.courses-course__categories');

  // Загружаем данные курсов с сервера и создаем карточки курсов
  if(coursesCourseSection){   
      fetch(url).then(data =>{
          return data.json()
      }).then(({data}) =>{
          
          data.map(({ attributes: { title, price, author, specialty, avatarL:{data:{attributes:{url}}}}}, i) => {
               // Создаем элемент карточки курса
              const card = document.createElement('div');
              card.classList.add('home-course__card');
              card.classList.add('courses-course__card');
              card.dataset.specialty = specialty.toLowerCase();

              // Убираю пробелы в специальностях , чтобы не было ошибок при присваивании класса для card

 
              const updateSpecialty = specialty.split(' ').join('')
              card.classList.add(updateSpecialty)

              // Создаем разметку для карточки курса
              const markup = ()=>{
                  return `<img src="http://localhost:1337${url}" alt="${author}" class="home-course__card-img">
                  <div class="home-course__body">
                    <h6 class="home-course__card-speciality">${specialty}</h6>
                    <h4 class="home-course__card-title">${title}</h4>
                    <div class="home-course__info">
                      <p class="home-course__card-price">$${price}</p>
                      <p class="home-course__card-teacher">by ${author}</p>
                    </div>
                  </div>`
              }
              
              card.innerHTML = markup()
              // Добавляем карточку курса в список карточек
              document.querySelector('.courses-course__cards').appendChild(card)
          });
      })
  }

}


getCoursesData()


 

dataQuery()