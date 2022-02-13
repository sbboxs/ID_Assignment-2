if($("#addTestimonialPic") != null) {
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

        $(document).on("mouseenter", ".new-star-rating .fa-star", toggleStarRatings);

        function toggleStarRatings(){
            $(this).attr("class", "fas fa-star full-star");
            $(this).prevAll().attr("class", "fas fa-star full-star");
            $(this).nextAll().attr("class", "far fa-star empty-star");
        }

        let testimonialName = sessionStorage.getItem("username");

        $(".new-testimonial-selected-name").text(testimonialName);

        $(".dropdown-item-text").on("click", function(){
            $(".new-class-btn").text($(this).text());
        })

        $(".new-class-btn").css({
            "background-color": "transparent",
            "border": "none",
            "cursor": "pointer",
            "padding": "0.1rem"
        });
        $(".class-dropdown-options a").css({
            "text-decoration": "none",
        })

        $("#addTestimonialPic").hide();
    });
}

if($("#testimonialSubmitBtn") != null) {
    $("body").on("click", "#testimonialSubmitBtn", function(){
        if($("#star1").hasClass("full-star") && !$(".new-class-btn").text().includes("CLASSES")){
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

            $("#addTestimonialPic").show();
        }
    });
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