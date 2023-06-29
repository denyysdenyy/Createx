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
    registerForm = document.getElementById('registerForm'),
    loginForm = document.getElementById('loginForm'),
    providersBlock = document.querySelector('.authorization__providers'),
    createxIconAccount = document.querySelector('.createx-icon-account'),
    invalidMessage = document.querySelector('.authorization__invalid');



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
    registerForm.addEventListener('submit',  (e)=>{
       e.preventDefault();
         signUp()
        
    })


    
        loginForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        signIn()
    })

    

 

    

      // ЛОГИН ФОРМА 
    function signIn(){

        const loginFormElements = {
            email: document.getElementById('authorization-login-email').value,
            password: document.getElementById('authorization-login-password').value,
        }
        
        axios
        .post('http://localhost:1337/api/auth/local', {
          identifier: loginFormElements.email,
          password: loginFormElements.password,
        })

        // THEN
        .then(response => {
          // Handle success.
         console.log(`Success log in :`, response.data.user)
        //   Очистка полей формы
          document.getElementById('authorization-login-email').value = '',
          document.getElementById('authorization-login-password').value = ''
          // Если user авторизовался , то появляется иконка кнопки учетной записи
          authBtnsHadnlerCLose()
        //   Появление иконки учетной запичи
          createxIconAccount.style.display = 'block'
        //   Сохранение данных в LS
          localStorage.setItem('userData',JSON.stringify(loginFormElements))
        // Восстановление данных LS
      
        closeAuth()
        })

        // CATCH
        .catch(error => {
          // Handle error.
          console.log('Login Error:', error.response);

          invalidMessage.classList.add('active')
          
        });


    }
    function authBtnsHadnlerCLose(){
        authBtnLogin.style.display = 'none'
        authBtnRegister.style.display = 'none'
    }
 


    // РЕГИСТРАЦИЯ ФОРМА
    function signUp(){
       
        const registerFormElements = {
            fullName: document.getElementById('authorization-register-name').value,
            email:  document.getElementById('authorization-register-email').value,
            password: document.getElementById('authorization-register-password').value,
            confirmPassword: document.getElementById('authorization-register-confirm-password').value
        }

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
                // Очищение полей формы
                document.getElementById('authorization-register-name').value = '';
                document.getElementById('authorization-register-email').value = '';
                document.getElementById('authorization-register-password').value = '';
                document.getElementById('authorization-register-confirm-password').value = '';
                succesRegistration()
            })
            .catch(error => {
                // Handle error.
                console.log('Sign Up error:', error.response);
            });

             // Функция показа успешной регистрации
             function succesRegistration(){
                authRegisterBody.innerHTML = '';

                const successTitle = document.createElement('h2');
                const succesEmail = document.createElement('h3')
                successTitle.textContent = 'Thanks for join!'
                successTitle.style.fontSize = '26px';
                successTitle.style.marginBottom = '16px';
                succesEmail.style.fontSize = '22px';
                succesEmail.textContent = 'Check your mail!'

               authRegisterBody.appendChild(successTitle);
               authRegisterBody.appendChild(succesEmail)
               providersBlock.style.display = 'none'
                // Закрытие секции регистрации 
               setTimeout(closeAuth,5000)
            }
            }

          

}   
}

authorization()