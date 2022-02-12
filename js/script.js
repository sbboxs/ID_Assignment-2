if(sessionStorage.getItem("username") != null) {
    $(".login-signup-btns").empty();
    $(".login-signup-btns").html(`
    <li class="nav-item">
        <p style="padding-top: 0.8rem;">Welcome <span id="currentUser"></span>
    </li>
    <li class="nav-item">
        <img src="./assets/user_display_picture/profile.jpg" style="height: 5rem; width: 5rem; border-radius: 75%;">
    </li>`);
    $(".login-signup-btns").addClass("d-flex align-items-center");
    $("#currentUser").text(sessionStorage.getItem("username"));

    $(".testimonial-list").append(`
    <div class="col-lg-4 mb-3 text-center mt-4 add-testimonial-pic-container">
        <img src="/assets/testimonial_assets/addtestimonial.svg" id="addTestimonialPic" style="max-height: 25vh; opacity: 80%;">
    </div>`);

    $("#addTestimonialPic").hover(function(){
        $(this).css("transition", "0.4s");
        $(this).css("transform", "scale(1.15)");
        $(this).css("opacity", "100%");
    }, function(){
        $(this).css("transition", "0.4s");
        $(this).css("transform", "scale(1)");
        $(this).css("opacity", "80%");
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

/* needs fixing
document.getElementById("wordleGame").onclick = function(){
    location.href = "wordle.html";
};
*/