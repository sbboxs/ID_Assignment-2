if(sessionStorage.getItem("username") != null) {
    $(".login-signup-btns").empty();
    $(".login-signup-btns").html(`
    <li class="nav-item">
        <p style="padding-top: 0.8rem;">Welcome <span id="currentUser"></span>
    </li>
    <li class="nav-item">
        <div class="dropdown">
            <button type="button" class="btn btn-primary text-muted" data-bs-toggle="dropdown" style="background-color:transparent;">
                <img src="./assets/user_display_picture/profile.jpg" style="height: 5rem; width: 5rem; border-radius: 75%;">
            </button>
            <div class="dropdown-menu class-dropdown-options">
                <a class="dropdown-item-text text-decoration-none logout-btn">Log Out</a>
            </div>
        </div>
    </li>`);
    $(".login-signup-btns").addClass("d-flex align-items-center");
    $(".dropdown-item-text").hover(function(){
        $(this).css("cursor", "pointer");
    });
    $("#currentUser").text(sessionStorage.getItem("username"));

    $(document).on("click", ".logout-btn", function(){
        sessionStorage.removeItem("username");
        location.reload();
    });
}

$("#loginBtn").on("click", function (e) {
    e.preventDefault();

    $.ajax({
        url: 'login.html',
        dataType: 'text',
        success: function (data) {
            $(".modal-body").html(data);
            $("#modal-title").text("Login");
            $(".modal").modal("show");
            if (location.href.includes("biology") || location.href.includes("english") || location.href.includes("classes") || location.href.includes("mathematics")){
                $(".other-pgs-styles").attr("href", "css/classes.css");
            }
            if (location.href.includes("wordle")){
                $(".other-pgs-styles").attr("href", "css/wordle.css");
            }
        }
    });
});
$("#registerBtn").on("click", function (e) {
    e.preventDefault();

    $.ajax({
        url: 'register.html',
        dataType: 'text',
        success: function (data) {
            $(".modal-body").html(data);
            $("#modal-title").text("Register");
            $(".modal").modal("show");
            if (location.href.includes("biology") || location.href.includes("english") || location.href.includes("classes") || location.href.includes("mathematics")){
                $(".other-pgs-styles").attr("href", "css/classes.css");
            }
            if (location.href.includes("wordle")){
                $(".other-pgs-styles").attr("href", "css/wordle.css");
            }
        }
    });
});
if (document.getElementById("biologyBtn") != null){
    document.getElementById("biologyBtn").onclick = function(){
        location.href = "biology.html";
    };
}
if (document.getElementById("englishBtn") != null){
    document.getElementById("englishBtn").onclick = function(){
        location.href = "english.html";
    };
}
if (document.getElementById("mathBtn") != null){
    document.getElementById("mathBtn").onclick = function(){
        location.href = "mathematics.html";
    };
}
if (document.getElementById("mathPracticeBtn") != null){
    document.getElementById("mathPracticeBtn").onclick = function() {
        location.href = "quizgame.html";
    };
}

if (document.getElementById("wordleGameBtn") != null){
    document.getElementById("wordleGameBtn").onclick = function() {
        location.href = "wordle.html";
    };
}
