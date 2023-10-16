var usermane = document.forms['form']['username']
var password = document.forms['form']['password']

var password_error = document.getElementById('password_error');

password.addEventListener('textInput', password_Verify)

function validated() {
    if(password.value != "123456") {
       password.style.border = "2px solid red"
       password_error.style.display = "block"
       password.focus();
       return false
    }
}

function password_Verify() {
    if(password.value == "123456") {
       password.style.border = "2px solid silver";
       password_error.style.display = "none";
       return true;
    }
}