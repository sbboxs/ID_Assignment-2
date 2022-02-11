
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

$(document).ready(function () {
    const loginForm = document.querySelector("#login");
    const APIKEY = "61d277b1ccd0211b320894cd";

    //If create account, hidden login form and show login form
    $("#linkCreateAccount").on("click", function(e){
        e.preventDefault();

        $.ajax({
            url: 'signup.html',
            dataType: 'text',
            success: function(data) {
                $(".modal-body").html(data);
                $("#modal-title").text("Register");
                $(".modal").modal("show");
            } 
        });
    });

    //Login
    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://interactivedev-8e44.restdb.io/rest/mochiiedulogin",
            "method": "GET",
            "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
            }
          }
          
        $.ajax(settings).done(function (response) {
            console.log(response);
            
        });
          
        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });
});


