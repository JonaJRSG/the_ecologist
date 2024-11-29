(function ($) {
    'use strict';


 // Hero Slider Home Five
    $(".hero-slide-five")
    .on("initialized.owl.carousel changed.owl.carousel", function (e) {
      if (!e.namespace) {
        return;
      }
      var carousel = e.relatedTarget;
      $(".slider-counter").text(
        carousel.relative(carousel.current()) +
          1 +
          "/" +
          carousel.items().length
      );
    })
    .owlCarousel({
      loop: true,
      autoplay: true,
      smartSpeed: 1500,
      autoplayTimeout: 1500,
      dots: true,
      dotsData: false,
      nav: false,
      margin: 30,
      navText: [""],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        768: {
          items: 1,
        },
        992: {
          items: 1,
        },
        1200: {
          items: 1,
        },
        1920: {
          items: 1,
        },
      },
    });

    // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

     // Service List-1
    $('.service-list-1').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        nav: true,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items:1
            },
            600: {
                items:1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })      
     // Service List-2 Home Two
    $('.service-list-2').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items:1
            },
            600: {
                items:1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })       
    // Service List-6 Home Six
    $('.service-list-6').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items:1
            },
            600: {
                items:1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 4
            }
        }
    })    

   // text List-1
    $('.text-list-1').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 10000,
        dots: false,
        nav: false,
        center:true,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items:2
            },
            600: {
                items:3
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            },
            1000: {
                items: 5
            },
            1920: {
                items: 5
            }
        }
    })    

     // Project List-1
    $('.project-list-1').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        nav: true,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items:1
            },
            600: {
                items:1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 3
            },
            1920: {
                items: 4
            }
        }
    })      
  // Project List-2 Home Two
    $('.project-list-2').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        center:true,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items:1
            },
            600: {
                items:1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })    

     // Project List-3 Home Three
    $('.project-list-3').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        center:true,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items:1
            },
            600: {
                items:1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })      

      // Project List-7 Home Seven
    $('.project-list-7').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        nav: false,
        center:true,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items:1
            },
            600: {
                items:1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })   

    // Testimonial List-1
    $('.testimonial-list-1').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items:1
            },
            600: {
                items:1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    })     
    
    // Testimonial List-6 Home-Six
    $('.testimonial-list-6').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items:1
            },
            600: {
                items:1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })     

        // Testimonial List-7 Home-Seven
    $('.testimonial-list-7').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items:1
            },
            600: {
                items:1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    })     

    // Brand List-1
    $('.brand-list-1').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items:2
            },
            600: {
                items:2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 5
            },
            1920: {
                items: 5
            }
        }
    })    

     // Brand List-2 Home Two
    $('.brand-list-2').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items:1
            },
            600: {
                items:2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 5
            },
            1920: {
                items: 5
            }
        }
    })     

     // Donate List-2 Home two 
    $('.donate-list-2').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items:1
            },
            600: {
                items:1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })   
   // Teasti List-2 Home Two
    $('.testi-list-2').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        nav: true,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items:1
            },
            600: {
                items:1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })   

 // Teasti List-3 Home Three
    $('.testi-list-3').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items:1
            },
            600: {
                items:1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    })  

    // Teasti List-4 Home Four
    $('.testi-list-4').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items:1
            },
            600: {
                items:1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    }) 

     // Teasti List-5 Home Five
    $('.testi-list-5').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items:1
            },
            600: {
                items:1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    })    

     // Gallery List Home Five
    $('.gallery-list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items:1
            },
            600: {
                items:2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1171: {
                items: 5
            },
            1920: {
                items: 5
            }
        }
    })      
  

    // Blog Post List Blog Details
    $('.blog-post-list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        nav: true,
        navText: ["<i class='bi bi-chevron-double-left''></i>Previous Post", "Next Post<i class='bi bi-chevron-double-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items:1
            },
            600: {
                items:1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1171: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    }) 


  // scroll up
    if($('.prgoress_indicator path').length){
        var progressPath = document.querySelector('.prgoress_indicator path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var progress = pathLength - (scroll * pathLength / height);
          progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).on('scroll', updateProgress);
        var offset = 250;
        var duration = 550;
        jQuery(window).on('scroll', function () {
          if (jQuery(this).scrollTop() > offset) {
            jQuery('.prgoress_indicator').addClass('active-progress');
          } else {
            jQuery('.prgoress_indicator').removeClass('active-progress');
          }
        });
        jQuery('.prgoress_indicator').on('click', function (event) {
          event.preventDefault();
          jQuery('html, body').animate({ scrollTop: 0 }, duration);
          return false;
        });
    }





})(jQuery);