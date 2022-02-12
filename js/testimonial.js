if($("#addTestimonialPic") != null) {
    $("#addTestimonialPic").on("click", function(){
        let content = `
        <div class="col-lg-4 mb-3">
            <div class="card border-0">
                <div class="d-flex p-3 just-content-start align-items-center">
                    <div class="image-area">
                        <img src="assets/user_display_picture/sdsdsfds.jpg" class="display-picture">
                    </div>

                    <div class="px-3 name-class-rating">
                        <p class="m-0 testimonial-selected-name">Emily</p>
                        <p class="m-0 text-muted testimonial-selected-class">J2-MATH</p>

                        <div class="m-0 text-center star-rating new-star-rating">
                            <i class="far fa-star" id="star1"></i>
                            <i class="far fa-star" id="star2"></i>
                            <i class="far fa-star" id="star3"></i>
                            <i class="far fa-star" id="star4"></i>
                            <i class="far fa-star" id="star5"></i>
                        </div>
                    </div>

                </div>
                <div class="card-body">
                    <div class="blockquote d-flex flex-column">
                        <i class="fa fa-quote-left fa-2x"></i>
                        <textarea class="mt-2 mb-0 review-text" id="autoResize" placeholder="Type your personal opinion of our website :)" style="height: auto; max-height: 40vh; max-width: 60vh; border-color: grey;"></textarea>
                    </div>
                    
                </div>
            </div>
        </div>`;

        $(content).insertBefore(".add-testimonial-pic-container");

        $("#autoResize").on('input', function(){
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        })
        
        $(document).on("mouseenter", ".new-star-rating .fa-star", toggleStarRatings);
        $(document).on("mouseleave", ".new-star-rating", resetStarRatings);
        
        function toggleStarRatings(){
            $(this).attr("class", "fas fa-star");
            $(this).prevAll().attr("class", "fas fa-star");
            $(this).nextAll().attr("class", "far fa-star");
        }
        function resetStarRatings(){
            $(this).children().attr("class", "far fa-star");
        }
    });
}