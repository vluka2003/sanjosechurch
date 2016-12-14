$(document).ready(function() {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage'], #back-top a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });


    $(window).scroll(function() {
        $(".slideanim").each(function() {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
    // jQuery to collapse the navbar on scroll
    /*$(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });*/

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
 
    $("#myBtn").click(function() {
        $("#myModal").modal();
    });

    /*testimony
    $(function() {
        $('#carousel-testimonials').owlCarousel({
            autoPlay: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true
        });
    });*/
    /*---------------------------------------*/
    /*  TESTIMONIALS SECTION
    /*---------------------------------------*/
    $('#testimonials').find('.testimonial-item').css('opacity', 0).one('inview', function(isInView) {
        if (isInView) {
            $(this).addClass('animated flipInY').css('opacity', 1);
        }
    })

    /*---------------------------------------*/
    /*  MEET THE TEAM SECTION
    /*---------------------------------------*/
    $('#meet-the-team').find('.team-element').each(function(i) {
        var element = $(this),
            itemsDelay = (isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay'));
        element.css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {
                setTimeout(function() {
                    element.addClass('animated fadeInUp').css('opacity', 1);
                }, itemsDelay * (i * 2));
            }
        });
    });


    /*Video-button*/
    var videoBtn = document.getElementById('showVideoModal');
    var modalVideo = document.getElementById('modal');
    if (videoBtn && modalVideo) {
        videoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modalVideo.className += ' open';
        }, false);

        var videoCloseBtn = document.getElementById('modalClose');
        videoCloseBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modalVideo.className = 'modalVideo';
            var iframe = modal.getElementsByTagName("iframe")[0].contentWindow;
            iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }, false);
    }

});