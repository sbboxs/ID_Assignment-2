// With reference to dcode's video, https://www.youtube.com/watch?v=3GsKEtBcGTk&ab_channel=dcode

// Create a custom error message
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

// Login
$(document).ready(function () {
    const loginForm = document.querySelector("#login");
    const APIKEY = "61d277b1ccd0211b320894cd";

    // Open register modal from login modal
    $("#linkCreateAccount").on("click", function (e) {
        e.preventDefault();

        $.ajax({
            url: 'register.html',
            dataType: 'text',
            success: function (data) {
                $(".modal-body").html(data);
                $("#modal-title").text("Register");
                // Displaying additional link on locked features modal
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

    //Login
    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Get account details from API
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
            let loginUserName = $("#loginUserName").val();
            let loginUserPass = $("#loginUserPass").val();
            let status = false;

            for (i = 0; i < response.length; i++) {
                if (response[i].username == loginUserName && response[i].password == loginUserPass) {
                    status = true;
                    break;
                }
            }
            // Checking if login successful
            if (status) {
                setFormMessage(loginForm, "success", "Login successful");
                sessionStorage.setItem('username', loginUserName);
                $(".modal").modal("toggle");
                location.reload();
            }
            else {
                setFormMessage(loginForm, "error", "Invalid username/password combination");
            }

        });
    });
});


