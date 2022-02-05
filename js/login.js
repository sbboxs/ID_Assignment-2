function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}
//If user input error,  show the message of the error
function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

//If user new input, remove error message
function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    //If create account, hidden login form and show login form
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });
    //if choose to login, hidden create account form and show login form.
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login
        
        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            //If input does not pass validation, set and display the new error messaage
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
                console.log(e.target.value);
            }
            else if (e.target.id === "signupEmailAddr" ) {
                if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value) ){
                }
                else{
                    setInputError(inputElement, "Please enter a valid email address");
                }
            }
            else if (e.target.id === "signupPassword" ) {
                if(e.target.value.length > 5 ){
                    if(e.target.value.search(/[A-z]/) == -1 || e.target.value.search(/[0-9]/) == -1 ){
                        setInputError(inputElement, "Password must contain at least a capital letter or a number");
                    }
                }
                else{
                    setInputError(inputElement, "Password must be at least 5 characters in length");
                }
            }
            else if (e.target.id === "signupRePassword" ) {
                if(e.target.value != signupPassword.value){
                    setInputError(inputElement, "Password is not match");
                }
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});


