// Made By - Prajval Patel C0911611
// Date - March 29th, 2024

//On submit function
function formSubmit() {
    let hasErrors = false;
    //Validating mandatory fields
    const requiredFields = ['first_name', 'last_name', 'email', 'password', 'confirm_password'];
    requiredFields.forEach(input => {
        if (!validate(input, /.+/, input.replace('_', ' '))) {
            hasErrors = true;
        }        
    });  
    //Validating Term Selection (atleast one)
    if (!document.querySelector('input[name="term"]:checked')) {
        showErrorMessage('term', 'please select at least one term');
        hasErrors = true;
    } else {
        document.getElementById('term_error').textContent = ""; // Clear error message    
    }
     //Validating Email format
    if (!validate('email', /\S+@\S+\.\S+/, 'email')) {
        hasErrors = true;
    }        
    //Validating Password COmplexity
    if (!validate('password', /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/, 'password must be at least 8 characters long, must contain at least one uppercase letter and one special character')) {
        hasErrors = true;
    }
    //Validating Confirm password match
    if (!validateMatch('password', 'confirm_password', 'Passwords do not match')) {
        hasErrors = true;
    }     

    // If there are no errors, show success message
    if (!hasErrors) {
        window.alert("Student registered successfully!");
        window.location.reload();
    }
}

//Function to show error message
function showErrorMessage(elementid, msg) {
    document.getElementById(elementid + '_error').textContent = msg;    
}

function validate(elementid, regex, errorMsg) {
    // debugger
    const user_input = document.getElementById(elementid).value.trim();    
    //User input is empty
    if(!user_input) {
        showErrorMessage(elementid, `${errorMsg} is required`);
        return false;
    }        
    //Need to validate regex expression
    else if(!regex.test(user_input)) {
        showErrorMessage(elementid, `invalid ${errorMsg}`);
        return false;
    } 
    else {
        document.getElementById(elementid + '_error').textContent = ""; // Clear error message
        return true;
    }
}

//Function to check if confirm password is same as password
function validateMatch(id1, id2, errorMsg) {
    const input1 = document.getElementById(id1);
    const input2 = document.getElementById(id2);
    if (input1.value !== input2.value) {
        showErrorMessage(id2, errorMsg);
        return false;
    } else {
        return true;
    }
}