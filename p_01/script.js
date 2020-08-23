const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');


// Function to show error
function showErrorMsg(input) {
    const formControl = input.parentElement;
    formControl.classList.add('error');
    const error = formControl.querySelector('small');
    error.innerText = `${getFieldName(input)} is Required`;
    // console.log(formControl.classList);
    
};

//Function to Get input
function getFieldName(input){
    return input.id.toUpperCase().charAt(0)+input.id.slice(1);
}

// Function to show Success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

//Funtion to validate Email

function checkValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkInput(inputArray){
    inputArray.forEach(element => {
        if (element.value === '') {
            showErrorMsg(element);
        }
        else{
            if (element.id === 'email') {
                
                if (!checkValidEmail(element.value)) {
                    showErrorMsg(element);  
                }else{
                    showSuccess(element);
                }
            }else{
                showSuccess(element);
            }
            
        }
    });
};

form.addEventListener('submit', function(e){
    e.preventDefault();

    checkInput([username,email,password,confirm_password]);
   
});