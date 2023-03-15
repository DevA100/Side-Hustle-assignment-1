
function validation(){
    let names, email, phone, password;
    let errorMsg = document.getElementById('errormsg');
    let mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
let success = document.getElementById('success');
     names = document.getElementById('names').value;
     email = document.getElementById('email').value;
     phone = document.getElementById('phone').value;
     password = document.getElementById('password').value;
let allInputs = document.querySelectorAll('input');
allInputs.forEach(singleInput => singleInput.value = '');
if(!names && !password &&!email && !phone){
// alert ('fill in the options')
errorMsg.innerHTML = 'fill in the options!'
}else if(!email.match(mailformat)){
    errorMsg.innerHTML = 'fill in the right email format!'
}else {
success.innerHTML= 'Submision successful!'
}

}