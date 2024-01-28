var nameError = document.getElementById("name__error");
var phoneError = document.getElementById("phone__error");
var emailError = document.getElementById("email__error");
var messageError = document.getElementById("message__error");
var submitError = document.getElementById("submit__error");


validateName = () => {
    var name = document.getElementById('contact__name').value;

    // here we are checking if there is any input in the input box 
    if (name.length == 0) {
        nameError.innerHTML = "The name is required";
        return false;
    }
    // here we are checking the characters entered 
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    }
    // this will be returned if there are no errors 
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

validatePhone = () => {
    var phone = document.getElementById('contact__phone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = "Phone no is required";
        return false;
    }
    if(phone.length !== 10) {
        phoneError.innerHTML = "Phone no should be 10 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Only digits required";
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

validateEmail = () => {
    var email = document.getElementById('contact__email').value;

    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Email is invalid";
        return false
    }
    
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

validateMessage = () => {
    var message = document.getElementById('contact__message').value;
    var required = 50;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

validateForm = () => {
    // this condition will help us check if there are any errors in any of the input boxes 
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        // we first show the error message ...
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix the errors to submit';
        // then here we set a timer that will set the display to none after two seconds 
        setTimeout(() => {
            submitError.style.display = 'none';
        }, 2000);
        return false;
    }
}