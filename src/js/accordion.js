function accordion(){
    const planSection = document.querySelector('.plan');
    if(planSection){
        const accordions = document.getElementsByClassName('plan__accordion');
        

        for(let i = 0; i < accordions.length; i++){
           accordions[i].addEventListener('click', function(){
            this.classList.toggle('active')
           })
        }
    }
}
accordion()