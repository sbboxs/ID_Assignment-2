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

    //Go to login modal from register modal
    $("#linkLogin").on("click", function (e) {
        e.preventDefault();

        $.ajax({
            url: 'login.html',
            dataType: 'text',
            success: function (data) {
                $(".modal-body").html(data);
                $("#modal-title").text("Login");
                // Displaying locked features modal
                if ($(".modal").attr("id") == "lockedModal"){
                    $("form").append(`
                    <div class="my-4 text-center form__input-group">
                        <p class="form__text ">
                            <a class="form__link" href="index.html" style="float:right;"><- Return to home</a>
                        </p>
                    </div>`);
                }
                $(".modal").modal("show");
                if (location.href.includes("biology") || location.href.includes("english") || location.href.includes("classes") || location.href.includes("mathematics")){
                    $(".other-pgs-styles").attr("href", "css/classes.css");
                }
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
                //success modal
                $(".modal-content").html(`
                <button type="button" class="btn-close" id="sucessBtn" data-bs-dismiss="modal" aria-label="Close" style="position:absolute;top:0;right:0;color:white;"></button>
                <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_obhph3sh.json"  background="transparent"  speed="1"  style="width: 600px; height: 600px; margin: 0 auto;"    autoplay></lottie-player>
                <h2 class="text-center w-100 mb-4" style="color:white;">Account Created Successfully</h2>`);
                $(".modal-content").addClass("bg-transparent border-0");
            }
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
            sessionStorage.setItem("username", userName);

            $("#successBtn").on("click", function(){
                location.reload();
            });
            $(".modal").on('hidden.bs.modal', function() {
                location.reload();
            });
        });
    });

    // Input validation and database checking
    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            //If input does not pass validation, set and display the new error messaage
            if (e.target.id === "signupUsername"){
                if(e.target.value.length > 0 && e.target.value.length < 8) {
                    setInputError(inputElement, "Username must be at least 8 characters in length");
                } else if (e.target.value.length == 0) {
                    setInputError(inputElement, "Please enter a username");
                }

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
                };
        
                $.ajax(settings).done(function (response) {
                    console.log(response);
        
                    for (i = 0; i < response.length; i++) {
                        if (response[i].username == e.target.value) {
                            setInputError(inputElement, "Username already taken");
                            break;
                        }
                    }
                });
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
                    setInputError(inputElement, "Password must be at least 8 characters in length");
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


