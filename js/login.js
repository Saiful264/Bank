// step 1: add click event handler with submit button

document.getElementById('btn-submit').addEventListener('click', function(){
    //step-2: get the emild adderss insider the input field
    // always remember to use .value to get text form an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step-3: get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    // DO NOT VERIFY email passworld n cliend side
    // step 4: verify email and password
    if (email === "saiful@gmail.com" && password === "1234sa") {
        window.location.href = 'bank.html';
    }else{
        alert('Invalid user');
    }

})