const form = document.getElementById("form");
const username = document.getElementById("userid");
const useremail = document.getElementById("emailid");
const password = document.getElementById("passwordid");
const password2 = document.getElementById("confirmid");


function checkUser(arr){
    arr.forEach((input) => {
        if(input.value.trim() === ""){
         errorInput(input, `${getMsg(input)} is Required`);
        }else{
           successMsg(input)
        }
    });
}


const inputitem = document.querySelectorAll("input");
inputitem.forEach((ele)=>{
    ele.addEventListener("keypress",()=>{
        checkUser([username,useremail,password,password2]);
        checkLength(username,3,10);
        checkPassword(password,password2);
        checkEmail(useremail);
        checkletter(username)
    })
})







function checkLength(input,min,max){
    const data = input.value.trim().length;
    if(data < min){
        errorInput(input,`${getMsg(input)} greater than ${min} characters`);
    }else if(data > max){
        errorInput(input,`${getMsg(input)} lesser than characters`)
    }else{
        successMsg(input)
    }
}

String.prototype.isEmail = function() {
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
};

String.prototype.isLetter = function(){
    return !!this.match(/^[a-zA-Z]*$/);
}

function checkEmail(input){
if(!input.value.trim().isEmail()){
    errorInput(input,   `This is not a valid Email address`)
}
};

function checkletter(input){
     if(!input.value.trim().isLetter()){
        errorInput(input,`${getMsg(input)} Must be Alphabet`)
     }
}


function checkPassword(password,password2){
    if(password.value !== password2.value){
        errorInput(password2,`${getMsg(password2)} does not match`)
    }
}

form.addEventListener("submit",function(e){
    e.preventDefault();
    checkUser([username,useremail,password,password2]);
    checkLength(username,3,10);
    checkPassword(password,password2);
    checkEmail(useremail);
    checkletter(username)
});




function successMsg(input){
    const formcontainer = input.parentElement;
    formcontainer.className = "userel success";
    const errorMsg = formcontainer.querySelector("p");
    errorMsg.innerHTML = "";
   
}
function errorInput(input,message){
    const formcontainer = input.parentElement;
    formcontainer.className = "userel error";
    const errorMsg = formcontainer.querySelector("p");
    errorMsg.innerHTML = message;
}

function getMsg(input){
 return input.getAttribute("data-name");
}