import axios from "axios";

function authorization(){
    const header = document.querySelector('.header')

    if(header){
    const authBtnLogin = document.getElementById('signIn'),
    authBtnRegister = document.getElementById('signUp'),
    authRegisterBody = document.getElementById('authRegister'),
    authLoginBody = document.getElementById('authLogin'),
    auth = document.querySelector('.authorization'),
    body = document.querySelector('body'),
    authBody = document.querySelector('.authorization__body'),
    authCLose = document.querySelector('.authorization__close'),
    dontHaveAccountBtn = document.getElementById('dontHaveAccountBtn'),
    haveAccountBtn = document.getElementById('haveAccountBtn'),
    registerForm = document.getElementById('registerForm');

        // Элементы формы регистрации
    const registerFormElements = {
        fullName: document.getElementById('authorization-register-name').value,
        email:  document.getElementById('authorization-register-email').value,
        password: document.getElementById('authorization-register-password').value,
        confirmPassword: document.getElementById('authorization-register-confirm-password').value
    }

    dontHaveAccountBtn.addEventListener('click',()=>{
        authRegisterBody.classList.add('active')
        authLoginBody.classList.remove('active')
    })

    haveAccountBtn.addEventListener('click',()=>{
        authLoginBody.classList.add('active');
        authRegisterBody.classList.remove('active')
    })


    // Кнопка закрывания Auth
    authCLose.addEventListener('click',()=>{
        closeAuth()
    })

    // Функция закрывания auth 
    function closeAuth(){
        auth.classList.remove('active')
    }

    
    

   
    //  Если нажать на Login , то откроется Login и закроется Register
    authBtnLogin.addEventListener('click',()=>{
        auth.classList.add('active')
        authRegisterBody.classList.remove('active')
        authLoginBody.classList.add('active')

    })
    // Если нажать на Register , то откроется Register  и закроется login
    authBtnRegister.addEventListener('click',()=>{
        auth.classList.add('active')
        authLoginBody.classList.remove('active')
        authRegisterBody.classList.add('active')
    })
    

    // Проверка , если у SignUp есть уже класс Active , то у SignIn  класс active убирается
    if(authLoginBody.classList.contains('active')){
        authRegisterBody.classList.remove('active')
    } else if(authRegisterBody.classList.contains('active')){
        authLoginBody.classList.remove('active')
    }
  

    // Показ пароля
    const showPassBtn = document.getElementById('showPassword');;
    const showConfirmPassBtn = document.getElementById('showConfirmPassword');
    showPassBtn.addEventListener('click',showPassword)
    showConfirmPassBtn.addEventListener('click',showConfirmPassword);
    function showPassword(){
        const password = document.getElementById('authorization-register-password');
        if(password.getAttribute('type') === 'password'){
            password.setAttribute('type','text')
        }   else {
            password.setAttribute('type','password')
        }
        
    }
    function showConfirmPassword(){
        const password = document.getElementById('authorization-register-confirm-password');
        if(password.getAttribute('type') === 'password'){
            password.setAttribute('type','text')
        }   else {
            password.setAttribute('type','password')
        }
    }


    // Отработка события формы регистрации 
    registerForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        
        signUp()
    })
 

    

      // ЛОГИН ФОРМА 
    function signIn(){
     
    }

    // РЕГИСТРАЦИЯ ФОРМА
    function signUp(){
       

        // Проверка пароля на совпадение
        if(registerFormElements.confirmPassword !== registerFormElements.password){
          return false
        } 

      

        
        axios
            .post('http://localhost:1337/api/auth/local/register', {
                username: registerFormElements.fullName,
                email: registerFormElements.email,
                password: registerFormElements.password,
                
            })
            .then(response => {
                // Handle success.
                console.log('Well done!');
                console.log('User profile', response.data.user);
                console.log('User token', response.data.jwt),
                console.log(`User Password: ${response.data.password}`);
                // Закрытие секции регистрации 

                closeAuth()
                // Очищение полей фформы
                document.getElementById('authorization-register-name').value = '';
                document.getElementById('authorization-register-email').value = '';
                document.getElementById('authorization-register-password').value = '';
                document.getElementById('authorization-register-confirm-password').value = '';


            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
            });
            }
}   
}

authorization()