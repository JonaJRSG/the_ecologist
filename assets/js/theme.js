(function ($) {
    'use strict';

    // Mobile Menu
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
        meanMenuOpen: "<span></span> <span></span> <span></span>",
        onePage: false,
    });

/*faqs*/
    $(document).ready(function() {
  $(".faqs-container .faq-singular:first-child").addClass("active").children(".faq-answer").slideDown();//Remove this line if you dont want the first item to be opened automatically.
  $(".faq-question").on("click", function(){
    if( $(this).parent().hasClass("active") ){
      $(this).next().slideUp();
      $(this).parent().removeClass("active");
    }
    else{
      $(".faq-answer").slideUp();
      $(".faq-singular").removeClass("active");
      $(this).parent().addClass("active");
      $(this).next().slideDown();
    }
  });
});


// :: Hero Home one Slides
    if ($.fn.owlCarousel) {
        var welcomeSlider = $('.hero-slides');
        welcomeSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 6000,
            dots: true,
            center: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
            
        })

        welcomeSlider.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        welcomeSlider.on('translated.owl.carousel', function () {
            var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });
    } 

 // single-animal-box box Active js
    $(document).ready(function() {
        $('.single-animal-box').on('mouseenter', function () {
            $(this).addClass('active'); // Add the 'active' class to the current element
            $('.single-animal-box').not(this).removeClass('active'); // Remove the 'active' class from other elements
        });
    });
//Header Search
    if($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function() {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function() {
            $('body').removeClass('search-active');
        });
    }

    // sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });

  // Venubox
    $('.venobox').venobox({
        numeratio: true,
        infinigall: true

    });

    // Loder  //
    $(function () {
        $('body').addClass('loaded');
    });

   // marquee
    function updateMarqueDivWidth() {

    const flexContainer = document.querySelector('.marquee');
    const flexItems = document.querySelectorAll('.marquee .scroll');
      
    let totalWidth = 0;
    flexItems.forEach((item) => {
        totalWidth += item.offsetWidth;
    });
        
}
window.addEventListener('load', updateMarqueDivWidth);
window.addEventListener('resize', updateMarqueDivWidth);


 // Sidebar
    "use strict";
        jQuery(document).ready(function (o) {
            0 < o(".offset-side-bar").length &&
                o(".offset-side-bar").on("click", function (e) {
                    e.preventDefault(), e.stopPropagation(), o(".cart-group").addClass("isActive");
                }),
                0 < o(".close-side-widget").length &&
                    o(".close-side-widget").on("click", function (e) {
                        e.preventDefault(), o(".cart-group").removeClass("isActive");
                    }),
                0 < o(".navSidebar-button").length &&
                    o(".navSidebar-button").on("click", function (e) {
                        e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
                    }),
                0 < o(".close-side-widget").length &&
                    o(".close-side-widget").on("click", function (e) {
                        e.preventDefault(), o(".info-group").removeClass("isActive");
                    }),
                o("body").on("click", function (e) {
                    o(".info-group").removeClass("isActive"), o(".cart-group").removeClass("isActive");
                }),
                o(".xs-sidebar-widget").on("click", function (e) {
                    e.stopPropagation();
                }),
                0 < o(".xs-modal-popup").length &&
                    o(".xs-modal-popup").magnificPopup({
                        type: "inline",
                        fixedContentPos: !2,
                        fixedBgPos: !0,
                        overflowY: "auto",
                        closeBtnInside: !2,
                        callbacks: {
                            beforeOpen: function () {
                                this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
                            },
                        },
                    });
            });




})(jQuery);

