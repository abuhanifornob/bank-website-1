document.getElementById('submit-btn').addEventListener("click", function() {
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;

    if (email === 'hanifcse90@gmail.com' && password === 'secretMERN') {
        window.location.href = "bank.html";
        email.value = "";

    } else {

        alert("Invalid Emai Or Passord");

    }
})