$(document).ready(function() {
    const APIKEY = "61d277b1ccd0211b320894cd";

    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://interactivedev-8e44.restdb.io/rest/mochiiedutestimonial",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        }
    }

      
    $.ajax(settings).done(function (response) {
        console.log(response);
        $(".testimonial-list").empty();

        for(i=0; i<response.length; i++){
            let testimonialUserName = response[i].username;
            let testimonialRating = response[i].ratings;
            let testimonialClasses = response[i].classes;
            let testimonialReview = response[i].review;

            let testimonalCard = `
            <div class="col-lg-4 mb-3">
                <div class="card border-0">
                    <div class="d-flex p-3 just-content-start align-items-center">
                        <div class="image-area">
                            <img src="assets/user_display_picture/profile.jpg" class="display-picture">
                        </div>
        
                        <div class="px-3 name-class-rating">
                            <p class="m-0 testimonial-selected-name">${testimonialUserName}</p>
                            <p class="m-0 text-muted testimonial-selected-class">${testimonialClasses}</p>
        
                            <div class="m-0 text-left star-rating temp-star-rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </div>
        
                    </div>
                    <div class="card-body">
                        <div class="blockquote">
                            <i class="fa fa-quote-left fa-2x"></i>
                            <p class="mb-0 review-text">${testimonialReview}</p>
                        </div>
                    </div>
                </div>
            </div>`

            $(".testimonial-list").append(testimonalCard);

            $(`.temp-star-rating i:nth-child(${testimonialRating})`).toggleStarRatings();
            $(".temp-star-rating").attr("class", "m-0 text-left star-rating");
        }

        if(sessionStorage.getItem("username").length != 0){
            $(".testimonial-list").append(`
            <div class="col-lg-4 mb-3 text-center mt-4 add-testimonial-pic-container">
                <img src="./assets/testimonial_assets/addtestimonial.svg" id="addTestimonialPic" style="max-height: 25vh; opacity: 80%;" alt="add button">
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

            $(".container-description").remove();

            $("#addTestimonialPic").on("click", function(){
                let content = `
                <div class="col-lg-4 mb-3">
                    <div class="card border-0" id="newCard">
                        <div class="d-flex p-3 just-content-start align-items-center">
                            <div class="image-area">
                                <img src="assets/user_display_picture/profile.jpg" class="display-picture">
                            </div>
        
                            <div class="px-3 name-class-rating" id="newRatings">
                                <p class="m-0 testimonial-selected-name new-testimonial-selected-name"></p>
                                <div class="dropdown">
                                    <button type="button" class="btn btn-primary dropdown-toggle text-muted testimonial-selected-class new-class-btn" data-bs-toggle="dropdown">
                                        CLASSES
                                    </button>
                                    <div class="dropdown-menu class-dropdown-options testimonial-selected-class">
                                        <a class="dropdown-item-text text-muted">SCIENCE</a>
                                        <a class="dropdown-item-text text-muted">MATH</a>
                                        <a class="dropdown-item-text text-muted">ENGLISH</a>
                                    </div>
                                </div>
        
                                <div class="m-0 text-center star-rating new-star-rating">
                                    <i class="far fa-star" id="star1"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                            </div>
        
                        </div>
                        <div class="card-body new-card-body">
                            <div class="blockquote d-flex flex-column new-review-content">
                                <i class="fa fa-quote-left fa-2x"></i>
                                <textarea class="mt-2 mb-0 review-text" id="autoResize" placeholder="Type your personal opinion of our website :)" style="height: auto; max-height: 40vh; max-width: 60vh; border-color: grey;"></textarea>
                            </div>
                            <div class="d-flex justify-content-end submit-testimonial-btn">
                                <button type="button" id="testimonialSubmitBtn" class="btn btn-primary" onClick="emptyTestimonial()" style="background-color: pink; border: none;">Submit</button>
                            </div>               
                        </div>
                    </div>
                </div>`;
        
                $(content).insertBefore(".add-testimonial-pic-container");
        
                $("#autoResize").on('input', function(){
                    this.style.height = 'auto';
                    this.style.height = (this.scrollHeight) + 'px';
                });
        
                $(document).on("mouseenter", ".new-star-rating .fa-star", function(){
                    $(this).attr("class", "fas fa-star full-star");
                    $(this).prevAll().attr("class", "fas fa-star full-star");
                    $(this).nextAll().attr("class", "far fa-star empty-star");
                });
        
                let testimonialName = sessionStorage.getItem("username");
        
                $(".new-testimonial-selected-name").text(testimonialName);
                
                $(".dropdown-item-text").hover(function(){
                    $(this).css("cursor", "pointer");
                });
                $(".dropdown-item-text").on("click", function(){
                    $(".new-class-btn").text($(this).text());
                });
        
                $(".new-class-btn").css({
                    "background-color": "transparent",
                    "border": "none",
                    "cursor": "pointer",
                    "padding": "0.1rem"
                });
                $(".class-dropdown-options a").css({
                    "text-decoration": "none",
                });
        
                $("#addTestimonialPic").hide();
            });
        
            if($("#testimonialSubmitBtn") != null) {
                $("body").on("click", "#testimonialSubmitBtn", function(){
                    if($("#star1").hasClass("full-star") && !$(".new-class-btn").text().includes("CLASSES")){
                        $(".modal-content").html(`
                        <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_h2lo2hgb.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px; margin: 0 auto;"  loop  autoplay></lottie-player>
                        <h2 class="text-center w-100 mb-4" style="color:white;">Loading...</h2>`);
                        $(".modal-content").addClass("bg-transparent border-0");
                        $(".modal").modal({backdrop: "static", keyboard: false});
                        $(".modal").modal("toggle");

                        $("#testimonialSubmitBtn").removeAttr("onClick");
                        $(".submit-error-msg").remove();
                        $("#newCard").removeAttr("id");
                        $("#star1").removeAttr("id");
                        $(".new-card-body").removeClass("new-card-body");
        
                        let currentClass = $(".new-class-btn").text();
                        $(".dropdown").remove();
                        $("#newRatings").removeAttr("id");
                        $(`<p class="m-0 text-muted testimonial-selected-class">${currentClass}</p>`).insertAfter($(".new-testimonial-selected-name"));
                        $(".new-testimonial-selected-name").attr("class", "m-0 testimonial-selected-name");
        
                        $(".new-star-rating .fa-star").on("mouseenter", function(){
                            return false;
                        });
        
                        let reviewContent = $("#autoResize").val();
                        $("#autoResize").remove();
                        $(".submit-testimonial-btn").remove();
                        $(".new-review-content").append(`<p class="mb-0 review-text">${reviewContent}</p>`);
                        $(".new-review-content").attr("class", "blockquote");

                        let ratingsNum = $(".full-star:last").index() + 1;
                        let username = sessionStorage.getItem("username");

                        let jsondata = {"username": username,"classes": currentClass, "ratings": ratingsNum, "review": reviewContent};
                        settings = {
                        "async": true,
                        "crossDomain": true,
                        "url": "https://interactivedev-8e44.restdb.io/rest/mochiiedutestimonial",
                        "method": "POST",
                        "headers": {
                            "content-type": "application/json",
                            "x-apikey": APIKEY,
                            "cache-control": "no-cache"
                        },
                        "processData": false,
                        "data": JSON.stringify(jsondata),
                        "complete": function(){
                            $(".modal").modal("toggle");
                        }
                        }

                        $.ajax(settings).done(function (response) {
                            console.log(response);

                            $(".modal-content").html(`
                            <div class="modal-header">
                                <h2 class="modal-title text-center w-100" id="modal-title"></h2>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
            
                            </div>`);
                            $(".modal-content").removeClass("bg-transparent border-0");
                            $(".modal").modal({backdrop: true, keyboard: true});
                        });
        
                        $("#addTestimonialPic").show();
                    }
                });
            }
        }
    });
});

$.fn.toggleStarRatings = function(){
    $(this).attr("class", "fas fa-star full-star");
    $(this).prevAll().attr("class", "fas fa-star full-star");
    $(this).nextAll().attr("class", "far fa-star empty-star");
}

function emptyTestimonial() {
    if(!$("#star1").hasClass("full-star") || $(".new-class-btn").text().includes("CLASSES")){
        $("#newCard").addClass("card-shake");
        setTimeout(function(){
            $("#newCard").removeClass("card-shake");
        }, 500);
        if($(".new-card-body").children().length == 2){
            $(".new-card-body").prepend(`<div class="testimonial-selected-class submit-error-msg"><p style="color:red;font-size:small;">Please pick a class and rate us <i class="fas fa-star" style="color:red;"></i></div>`);
        }
    }
}