
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
                  <li class="home-team__card-li"><a href="#"><svg width="20" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.63586 0.837799L7.32148 0.833984C4.72134 0.833984 3.04102 2.60489 3.04102 5.34584V7.42611H0.714013C0.512931 7.42611 0.350098 7.59357 0.350098 7.80013V10.8142C0.350098 11.0208 0.513117 11.188 0.714013 11.188H3.04102V18.7935C3.04102 19 3.20386 19.1673 3.40494 19.1673H6.44103C6.64211 19.1673 6.80494 18.9999 6.80494 18.7935V11.188H9.52576C9.72684 11.188 9.88967 11.0208 9.88967 10.8142L9.89079 7.80013C9.89079 7.70095 9.85235 7.60597 9.78421 7.53578C9.71607 7.46559 9.62324 7.42611 9.52669 7.42611H6.80494V5.66264C6.80494 4.81505 7.00157 4.38476 8.07641 4.38476L9.63549 4.38419C9.83639 4.38419 9.99922 4.21673 9.99922 4.01037V1.21163C9.99922 1.00545 9.83657 0.83818 9.63586 0.837799Z" fill="white"/> </svg>   </a></li>
                  <li class="home-team__card-li"><a href="#"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3169 5.56606C17.2778 4.6805 17.1346 4.07168 16.9295 3.54413C16.7178 2.98415 16.3923 2.4828 15.9657 2.06603C15.5489 1.64277 15.0443 1.31388 14.4908 1.10555C13.9602 0.900411 13.3545 0.757205 12.469 0.71816C11.5768 0.675809 11.2936 0.666016 9.03075 0.666016C6.76794 0.666016 6.48471 0.675809 5.59584 0.714853C4.71028 0.753898 4.10146 0.897231 3.57404 1.10225C3.01393 1.31388 2.51258 1.63946 2.09581 2.06603C1.67255 2.4828 1.34379 2.98746 1.13534 3.54095C0.930196 4.07168 0.78699 4.67719 0.747945 5.56275C0.705594 6.45493 0.695801 6.73816 0.695801 9.00098C0.695801 11.2638 0.705594 11.547 0.744638 12.4359C0.783683 13.3215 0.927016 13.9303 1.13216 14.4578C1.34379 15.0178 1.67255 15.5191 2.09581 15.9359C2.51258 16.3592 3.01724 16.6881 3.57073 16.8964C4.10146 17.1015 4.70697 17.2447 5.59266 17.2838C6.4814 17.323 6.76476 17.3326 9.02757 17.3326C11.2904 17.3326 11.5736 17.323 12.4625 17.2838C13.348 17.2447 13.9569 17.1015 14.4843 16.8964C15.6044 16.4633 16.4899 15.5778 16.923 14.4578C17.128 13.9271 17.2713 13.3215 17.3104 12.4359C17.3494 11.547 17.3592 11.2638 17.3592 9.00098C17.3592 6.73816 17.3559 6.45493 17.3169 5.56606ZM15.816 12.3708C15.7801 13.1847 15.6434 13.6243 15.5295 13.9173C15.2494 14.6434 14.6731 15.2196 13.9471 15.4997C13.654 15.6136 13.2113 15.7504 12.4005 15.7861C11.5215 15.8253 11.2578 15.8349 9.03406 15.8349C6.81029 15.8349 6.54334 15.8253 5.66744 15.7861C4.85348 15.7504 4.41394 15.6136 4.12092 15.4997C3.7596 15.3661 3.43071 15.1545 3.16375 14.8778C2.88701 14.6075 2.67538 14.2819 2.54184 13.9206C2.42788 13.6276 2.29116 13.1847 2.25542 12.3741C2.21625 11.495 2.20659 11.2312 2.20659 9.00746C2.20659 6.7837 2.21625 6.51674 2.25542 5.64097C2.29116 4.82701 2.42788 4.38747 2.54184 4.09444C2.67538 3.733 2.88701 3.40423 3.16706 3.13715C3.43719 2.8604 3.76278 2.64877 4.12423 2.51536C4.41725 2.40141 4.8601 2.26469 5.67075 2.22882C6.54983 2.18978 6.8136 2.17998 9.03724 2.17998C11.2643 2.17998 11.528 2.18978 12.4039 2.22882C13.2178 2.26469 13.6573 2.40141 13.9504 2.51536C14.3117 2.64877 14.6406 2.8604 14.9075 3.13715C15.1843 3.40741 15.3959 3.733 15.5295 4.09444C15.6434 4.38747 15.7801 4.83019 15.816 5.64097C15.855 6.52005 15.8648 6.7837 15.8648 9.00746C15.8648 11.2312 15.855 11.4917 15.816 12.3708Z" fill="white"/><path d="M9.03075 4.71954C6.66708 4.71954 4.74931 6.63719 4.74931 9.00098C4.74931 11.3648 6.66708 13.2824 9.03075 13.2824C11.3945 13.2824 13.3122 11.3648 13.3122 9.00098C13.3122 6.63719 11.3945 4.71954 9.03075 4.71954ZM9.03075 11.7782C7.49732 11.7782 6.25349 10.5345 6.25349 9.00098C6.25349 7.46743 7.49732 6.22372 9.03075 6.22372C10.5643 6.22372 11.808 7.46743 11.808 9.00098C11.808 10.5345 10.5643 11.7782 9.03075 11.7782Z" fill="white"/><path d="M14.4811 4.55027C14.4811 5.10223 14.0336 5.54979 13.4815 5.54979C12.9295 5.54979 12.482 5.10223 12.482 4.55027C12.482 3.99817 12.9295 3.55074 13.4815 3.55074C14.0336 3.55074 14.4811 3.99817 14.4811 4.55027Z" fill="white"/></svg></a></li>
                  <li class="home-team__card-li"><a href="#"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.329 17.3327L17.3332 17.332V11.2195C17.3332 8.22921 16.6894 5.92574 13.1936 5.92574C11.513 5.92574 10.3853 6.84796 9.92483 7.72227H9.87622V6.2049H6.56163V17.332H10.013V11.8223C10.013 10.3716 10.288 8.9688 12.0846 8.9688C13.8547 8.9688 13.8811 10.6244 13.8811 11.9153V17.3327H17.329Z" fill="white"/><path d="M0.9415 6.2056H4.39706V17.3327H0.9415V6.2056Z" fill="white"/><path d="M2.66789 0.666016C1.56303 0.666016 0.666504 1.56254 0.666504 2.6674C0.666504 3.77227 1.56303 4.68754 2.66789 4.68754C3.77275 4.68754 4.66928 3.77227 4.66928 2.6674C4.66859 1.56254 3.77206 0.666016 2.66789 0.666016Z" fill="white"/></svg></a></li>
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