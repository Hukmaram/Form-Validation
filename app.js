console.log('This is project 4 js file');
const userName=document.getElementById('userName');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const submitButton=document.getElementById('submit');
const success=document.getElementById("success");
success.style.display="none";
let validEmail = false;
let validPhone = false;
let validUser = false;

console.log(name,email,phone)
userName.addEventListener('input',()=>{
    console.log('name is blrred')
    let regex=/^[a-zA-Z]([0-9a-zA-Z]){2,10}$/
    if(regex.test(userName.value)){
        console.log('name valid');
        userName.classList.remove('is-invalid');
        validUser=true;
        handleButton()
    }
    else{
        console.log('Name not valid');
        userName.classList.add('is-invalid');
        validUser=false;
        handleButton()
    }
})
email.addEventListener('input',()=>{
    console.log('email is blrrd')
    let regex=/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,5}$/
    if(regex.test(email.value)){
        console.log('email valid');
        email.classList.remove('is-invalid');
        validEmail=true;
        handleButton()
    }
    else{
        console.log('Email not valid');
        email.classList.add('is-invalid');
        validEmail=false;
        handleButton()
    }

})
phone.addEventListener('input',()=>{
    console.log('phone is blrred');
    let regex=/^([0-9]){10}$/
    if(regex.test(phone.value)){
        console.log('phone valid');
        phone.classList.remove('is-invalid');
        validPhone=true;
        handleButton()
    }
    else{
        console.log('Phone not valid');
        phone.classList.add('is-invalid');
        validPhone=false;
        handleButton()
    }
});
function handleButton(){
if(validUser && validEmail && validPhone){
 submitButton.classList.remove('disabled');
  console.log('btton enabled')
}
else{
    console.log('btton disabled');
    submitButton.classList.add('disabled');
}
}
submitButton.addEventListener('click',()=>{
    if(validUser && validEmail && validPhone){
        success.style.display="block"; 
        userName.value=" ";
        email.value=" ";
        phone.value=" ";
        validEmail = false;
        validPhone = false;
        validUser = false;
        setTimeout(()=>{
            success.style.display="none";   
        },2000)
        handleButton();
    }
})