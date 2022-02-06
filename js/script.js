$(document).ready(function () {
    $("#login-btn").on("click", function(e){
        e.preventDefault();

        $.ajax({
            url: 'login.html',
            dataType: 'text',
            success: function(data) {
                $(".modal-content").html(data);
                $(".modal").modal("show");
            } 
        });
    });
    $("#signup-btn").on("click", function(e){
        e.preventDefault();

        $.ajax({
            url: 'login.html',
            dataType: 'text',
            success: function(data) {
                $(".modal-content").html(data);
                $("#login").addClass("form--hidden");
                $("#createAccount").removeClass("form--hidden");
                $(".modal").modal("show");
            } 
        });
    });
});
