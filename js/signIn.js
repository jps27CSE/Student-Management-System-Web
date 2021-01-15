let userName = document.getElementById('UserName')

let userPassword = document.getElementById('UserPassword')


function Redirect() {

    if (userName.value == 'test' && userPassword.value == '123') {
        window.location = "../sites/logInto.html";
    }
    else if (userName.value == '' && userPassword.value == '') {
        alert("Please Enter Username and Password")
    }
    else if (userName.value == 'admin' && userPassword.value == 'admin123') {
        window.location = "../sites/adminPanel.html";
    }

    else {
        alert('Username or Password Incorrect')
    }

}
