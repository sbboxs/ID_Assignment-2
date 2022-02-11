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

$(document).ready(function () {
    const createAccountForm = document.querySelector("#createAccount");
    const APIKEY = "61d277b1ccd0211b320894cd";
    //If create account, hidden login form and show login form

    $("#linkLogin").on("click", function (e) {
        e.preventDefault();

        $.ajax({
            url: 'login.html',
            dataType: 'text',
            success: function (data) {
                $(".modal-body").html(data);
                $("#modal-title").text("Login");
                $(".modal").modal("show");
            }
        });
    });

    //Create account
    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();

        let userEmail = $("#signupEmailAddr").val();
        let userName = $("#signupUsername").val();
        let userPassword = $("#signupPassword").val();
        //Perform AJAX/Fetch
        let jsondata = { "email": userEmail, "username": userName, "password": userPassword };
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://interactivedev-8e44.restdb.io/rest/mochiiedulogin",
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "x-apikey": APIKEY,
                "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(jsondata),
            "success": function () {
                $(".modal-content").html(`<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button><lottie-player src="https://assets1.lottiefiles.com/packages/lf20_obhph3sh.json"  background="transparent"  speed="1"  style="width: 500px; height: 500px;"    autoplay></lottie-player>`);
            }
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            //If input does not pass validation, set and display the new error messaage
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 8) {
                setInputError(inputElement, "Username must be at least 8 characters in length");
            }
            else if (e.target.id === "signupEmailAddr") {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
                }
                else {
                    setInputError(inputElement, "Please enter a valid email address");
                }
            }
            else if (e.target.id === "signupPassword") {
                if (e.target.value.length > 5) {
                    if (e.target.value.search(/[A-z]/) == -1 || e.target.value.search(/[0-9]/) == -1) {
                        setInputError(inputElement, "Password must contain at least a capital letter and a number");
                    }
                }
                else {
                    setInputError(inputElement, "Password must be at least 5 characters in length");
                }
            }
            else if (e.target.id === "signupRePassword") {
                if (e.target.value != signupPassword.value) {
                    setInputError(inputElement, "Password is not match");
                }
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});


