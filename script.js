function registerOpen(){
    document.getElementById("register").style.transform = "translate(0%)";
    document.getElementById("register").style.opacity = "1";
    document.getElementById("login").style.transform = "translate(-100%)";
    document.getElementById("login").style.opacity = "0";
    document.getElementById('section').style.height = "85%";

}
function loginOpen(){
    document.getElementById("register").style.transform = "translate(100%)";
    document.getElementById("register").style.opacity = "0";
    document.getElementById("login").style.transform = "translate(0%)";
    document.getElementById("login").style.opacity = "1";
    document.getElementById("section").style.height = "60%";

}

let pass = document.getElementById('pass');
let iconOff = document.querySelector(".invisible");
let eye = document.querySelector(".eye");


iconOff.addEventListener('click', () => {
    pass.type = "text";
    iconOff.style.display = "none";
    eye.style.display = "block";
});

eye.addEventListener('click', () => {
    pass.type = "password";
    eye.style.display = "none";
    iconOff.style.display = "block";
});

let passReg = document.getElementById('passReg');
let iconOffReg = document.querySelector(".invisible2");
let eyeReg = document.querySelector(".eye2");


iconOffReg.addEventListener('click', () => {
    passReg.type = "text";
    iconOffReg.style.display = "none";
    eyeReg.style.display = "block";
});

eyeReg.addEventListener('click', () => {
    passReg.type = "password";
    eyeReg.style.display = "none";
    iconOffReg.style.display = "block";
});

let passCon = document.getElementById('conPass');
let iconOffCon = document.querySelector(".invisibleCon");
let eyeCon = document.querySelector(".eyeCon");


iconOffCon.addEventListener('click', () => {
    passCon.type = "text";
    iconOffCon.style.display = "none";
    eyeCon.style.display = "block";
});

eyeCon.addEventListener('click', () => {
    passCon.type = "password";
    eyeCon.style.display = "none";
    iconOffCon.style.display = "block";
});


function userName(){ 
    document.getElementById("unspan").innerHTML = "(Minimum 8 characters!)";
    document.getElementById("unspan").style.color = "yellow";
    document.getElementById("passpan").innerHTML = " ";

    document.getElementById("unspanreg").innerHTML = "(Minimum 8 characters!)";
    document.getElementById("unspanreg").style.color = "yellow";
    document.getElementById("passpanreg").innerHTML = " ";
}

function passWord(){
    document.getElementById("passpan").innerHTML = "(Only Alphabets and Numbers allowed!)";
    document.getElementById("unspan").innerHTML = " ";
    document.getElementById("passpan").style.color = "yellow";

    document.getElementById("passpanreg").innerHTML = "(Only Alphabets and Numbers allowed!)";
    document.getElementById("unspanreg").innerHTML = " ";
    document.getElementById("passpanreg").style.color = "yellow";
}

function goLogin(){
    let userName = document.querySelectorAll(".userName");
    let passWord = document.querySelectorAll(".passWd");

    if(userName = " "){
        document.getElementById("unspan").innerHTML = "This field should not be empty!";
        document.getElementById("unspan").style.color = "aqua";
    }
    if(passWord = " "){
        document.getElementById("passpan").innerHTML = "This field should not be empty!";
        document.getElementById("passpan").style.color = "aqua";
    }
    else{
        alert("Log In Successfull!");
    }
}
function goRegister(){
    let email = document.querySelectorAll(".emAil");
    let userNameReg = document.querySelectorAll(".userNameReg");
    let passWordReg = document.querySelectorAll(".passWdReg").value;
    let confirmPass = document.getElementById('conPass').value;


    if(email = " "){
        document.getElementById("emailspan").innerHTML = "This field should not be empty!";
        document.getElementById("emailspan").style.color = "aqua";
    }
    if(userNameReg = " "){
        document.getElementById("unspanreg").innerHTML = "This field should not be empty!";
        document.getElementById("unspanreg").style.color = "aqua";
    }
    if(passWordReg = " "){
        document.getElementById("passpanreg").innerHTML = "This field should not be empty!";
        document.getElementById("passpanreg").style.color = "aqua";
    }
    if(!confirmPass == passWordReg){
        document.getElementById('conspan').innerHTML = "Password does not match!";
        document.getElementById("conspan").style.color = "yellow";
    }
    if(confirmPass = " "){
        document.getElementById("conspan").innerHTML = "This field should not be empty!";
        document.getElementById("conspan").style.color = "aqua";
    }
    // if(confirmPass = passWordReg){
    //     document.getElementById('conspan').innerHTML = "Passwords Matched!";
    // }
    
    else{
        alert();    
    }
}
