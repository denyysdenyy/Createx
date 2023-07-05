function discountTimer(){
    const discountSection = document.querySelector('.discount');
    if(discountSection){

        const discountTimeWrapper = document.querySelector('.discount__time')
        
        function count(){
            //  Рассчеты 
            const currYear = new Date(),
                  discountOff = new Date(`August 31 2023 00:00:00`);  
            const diff = discountOff - currYear;
            let days = Math.floor(diff / 1000 / 60 / 60 / 24);
            let hours = Math.floor(diff / 1000 / 60 / 60) % 24;
            let min = Math.floor(diff / 1000 / 60 ) % 60;
            let sec = Math.floor(diff / 1000) % 60;
    
           document.getElementById('discountDays').innerText = days;
           document.getElementById('discountHours').innerText = hours;
           document.getElementById('discountMinutes').innerText = min;
           document.getElementById('discountSeconds').innerText = sec;
        }    
        setInterval(count,1000)  


        // ФОРМА
        const form = document.querySelector('.discount__form')
        
        form.addEventListener('submit',(e)=>{
            e.preventDefault()
        })
    }
    
}
discountTimer()