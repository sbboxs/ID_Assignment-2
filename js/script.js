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

document.getElementById("biologyBtn").onclick = function(){
    location.href = "biology.html";
};

document.getElementById("englishBtn").onclick = function(){
    location.href = "english.html";
};

document.getElementById("wordleGame").onclick = function(){
    location.href = "wordle.html";
};

document.getElementById("mathBtn").onclick = function(){
    location.href = "mathematics.html";
};