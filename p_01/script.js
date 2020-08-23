const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');


// Function to show error
function showErrorMsg(input,message) {
    const formControl = input.parentElement;
    formControl.classList.add('error');
    const error = formControl.querySelector('small');
    error.innerText = message;
    // console.log(formControl.classList);
    
};


// Function to show Success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

//Function to Get input
function getFieldName(input){
    return input.id.toUpperCase().charAt(0)+input.id.slice(1);
}


//Funtion to validate Email

function checkValidEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (re.test(input.value.trim())) {
        showSuccess(input);
    }
    else{
        showErrorMsg(input,'This is not a Valid Email');
    }
}

//Function to check Length of given values

function checkLength(input,min,max) {
    if (input.value.length < min) {
        showErrorMsg(input,`${getFieldName(input)} must be atleast ${min} characters`);
    }
    else if (input.value.length > max) {
        showErrorMsg(input,`${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Function to match confirm password

function checkConfirmPassword(password,confirm_password) {
    if (password.value !== confirm_password.value) {
        showErrorMsg(confirm_password,'Passwords Dont Match');
    }
}

function checkInput(inputArray){
    inputArray.forEach(element => {
        if (element.value === '') {
            showErrorMsg(element,`${getFieldName(element)} is Required`);
        }
        else{
           showSuccess(element);
        }
            
    });
};

form.addEventListener('submit', function(e){
    e.preventDefault();

    checkInput([username,email,password,confirm_password]);
    checkLength(username,3,10);
    checkLength(password,6,9);
    checkValidEmail(email);
    checkConfirmPassword(password,confirm_password);
   
});