const form = document.getElementById('form')
const FName = document.getElementById('Fname')
const LName = document.getElementById('Lname')
const Email = document.getElementById('email')
const Password = document.getElementById('password')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let firstName = FName.value.trim()
    let lastName = LName.value.trim()
    let emailValue = Email.value.trim()
    let passwordValue = Password.value.trim()
    let patterns =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    if(firstName === ""){
        errorFunc(FName, 'First Name Cannot Be Empty')
    }else{
        successFunc(FName)
    }
    
    if(lastName === ""){
        errorFunc(LName, 'Last Name Cannot Be Empty')
    }else{
        successFunc(LName)
    }
    
    if(emailValue === ""){
        errorFunc(Email, 'E-mail Cannot Be Empty')
    }else if(!emailValue.match(patterns)){
        errorFunc(Email,'Looks Like This Is Not An Email')
    }else{
        successFunc(Email)
    }
    
    if(passwordValue === ""){
        errorFunc(Password, 'Password Cannot Be Empty')
    }else{
        successFunc(Password)
    }

})

function errorFunc(req,message){
    const formControl = req.parentElement
    const span = formControl.querySelector('span')
    span.innerText = message
    req.className = 'error'
    span.className = 'error-text'
    if(req !== Email){
        req.value=""
    }else{
        req.style.color='red'
    }
}


function successFunc(req, message){
    const formControl = req.parentElement
    const span = formControl.querySelector('span')
    span.innerText = ' '
    req.className = 'success'
    if(req == Email){
        req.style.color = 'black'
    }



}