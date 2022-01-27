/**
 * @file
 * custom.js
 *
 * Filename:     custom.js
 * Website:      http://www.ordasoft.com
 * Description:  template
 * Author:       ordasoft dev team ordasoft.com.
 */

(function ($, Drupal) {

  "use strict";



  Drupal.behaviors.osDeltaReady = {
    attach: function (context, settings) {
      var mainMenu = $('.region-primary-menu ul');
      mainMenu.find('li.menu-item--expanded > a').once().append('<span class="arrow"></span>');
      $(".menu li a").addClass("active");
      $(".menu li a + ul").addClass('sub_menu');
      var slideButton = $('.views_slideshow_controls_text');
      $(".views_slideshow_controls_text_previous > a").addClass('previous');
      $(".views_slideshow_controls_text_next > a").addClass('next');
      slideButton.find(".previous").once().append('<i class="fa fa-angle-left"></i>');
      $(".views_slideshow_controls_text_next > a").addClass('next');
      slideButton.find(".next").once().append('<i class="fa fa-angle-Right"></i>');
      $('.switchButton span').click(function () {
        var page = $('body').removeClass();
        if ($(this).hasClass('bt-red')) {
          page.addClass('default');
        }
        if ($(this).hasClass('bt-lghtGre')) {
          page.addClass('divLghtGreen');
        }
        if ($(this).hasClass('bt-blue')) {
          page.addClass('divBlue');
        }
        if ($(this).hasClass('bt-red')) {
          page.addClass('divRed');
        }
        if ($(this).hasClass('bt-green')) {
          page.addClass('divGreen');
        }
        if ($(this).hasClass('bt-indigo')) {
          page.addClass('divIndigo');
        }
        if ($(this).hasClass('bt-orange')) {
          page.addClass('divOrange');
        }
      });





      // var myWidth = 0;
      //   myWidth = window.innerWidth;
      //   $('body').prepend('<div id="size" style="display:none;background:#000;padding:5px;position:fixed;z-index:999;color:#fff;">Width = '+myWidth+'</div>');
      //   $(window).resize(function(){
      //       var myWidth = 0;
      //       myWidth = window.innerWidth;
      //       $('#size').remove();
      //       $('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:999;color:#fff;">Width = '+myWidth+'</div>');
      //   });
      
      // $('.contact-message-feedback-form .js-form-item-name') .addClass('left animated');
      // $('.contact-message-feedback-form .js-form-item-name').css('opacity', 0);
      // $('.service .views-row:first-child') .addClass('left animated');
      // $('.service .views-row:first-child').css('opacity', 0);
      // $('.service .views-row:nth-child(2)') .addClass('left animated');
      // $('.service .views-row:nth-child(2)').css('opacity', 0);
      // $('.activ:first-child') .addClass('left animated');
      // $('.activ:first-child').css('opacity', 0);
      // $('.activ:nth-child(2)') .addClass('left animated');
      // $('.activ:nth-child(2)').css('opacity', 0);
      // $('.regimen') .addClass('left animated');
      // $('.regimen').css('opacity', 0);
      // $(window).scroll(function () {
      //    $('.left') .each(function () {
      //        var imagePos = $(this).offset().top;
      //        var topOfWindow = $(window).scrollTop();
      //        if (imagePos < topOfWindow+400) {
      //           $(this) .addClass('bounceInLeft');
      //           $(this) .css('opacity', 1);
      //        };
      //    });
      // });

      // $('.contact-message-feedback-form .js-form-item-mail') .addClass('right animated');
      // $('.contact-message-feedback-form .js-form-item-mail').css('opacity', 0);
      // $('.service .views-row:nth-child(3)') .addClass('right animated');
      // $('.service .views-row:nth-child(3)') .css('opacity', 0);
      // $('.service .views-row:nth-child(4)') .addClass('right animated');
      // $('.service .views-row:nth-child(4)') .css('opacity', 0);
      // $('.activ:nth-child(3)') .addClass('right animated');
      // $('.activ:nth-child(3)') .css('opacity', 0);
      // $('.activ:nth-child(4)') .addClass('right animated');
      // $('.activ:nth-child(4)') .css('opacity', 0);
      // $(window).scroll(function () {
      //    $('.right') .each(function () {
      //        var imagePos = $(this).offset().top;
      //        var topOfWindow = $(window).scrollTop();
      //        if (imagePos < topOfWindow+400) {
      //           $(this) .addClass('bounceInRight');
      //           $(this) .css('opacity', 1);
      //        };
      //    });
      // });

      // $('.contact-message-feedback-form .field--name-subject') .addClass('top animated');
      // $('.contact-message-feedback-form .field--name-subject').css('opacity', 0);
      // $('.contact-message-feedback-form .form-type-textarea') .addClass('top animated');
      // $('.contact-message-feedback-form .form-type-textarea').css('opacity', 0);
      // $('.news .region-news-video p') .addClass('top animated');
      // $('.news .region-news-video p').css('opacity', 0);
      // $(window).scroll(function(){
      //    $('.top') .each(function() {
      //        var imagePos = $(this).offset().top;
      //        var topOfWindow = $(window).scrollTop();
      //        if (imagePos < topOfWindow+400) {
      //           $(this) .addClass('bounceInUp');
      //           $(this) .css('opacity', 1);
      //        };
      //    });
      // });


      // $('.news .region-news-video h2') .addClass('down animated');
      // $('.news .region-news-video h2').css('opacity', 0);
      // $(window).scroll(function(){
      //    $('.down') .each(function() {
      //        var imagePos = $(this).offset().top;
      //        var topOfWindow = $(window).scrollTop();
      //        if (imagePos < topOfWindow+400) {
      //           $(this) .addClass('bounceInDown');
      //           $(this) .css('opacity', 1);
      //        };
      //    });
      // });


      // $('.news .col-lg-4 .views-row') .addClass('left animated');
      // $('.news .col-lg-4 .views-row').css('opacity', 0);
      // $(window).scroll(function () {
      //    $('.left') .each(function () {
      //        var imagePos = $(this).offset().top;
      //        var topOfWindow = $(window).scrollTop();
      //        if (imagePos < topOfWindow+400) {
      //           $(this) .addClass('bounceInLeft');
      //           $(this) .css('opacity', 1);
      //        };
      //    });
      // });

      // $('.trainer .views-row:first-child') .addClass('rotate animated');
      // $('.trainer .views-row:first-child').css('opacity', 0);
      // $(window).scroll(function () {
      //    $('.rotate') .each(function () {
      //        var imagePos = $(this).offset().top;
      //        var topOfWindow = $(window).scrollTop();
      //        if (imagePos < topOfWindow+300) {
      //           $(this) .addClass('rotateInUpRight');
      //           $(this) .css('opacity', 1);
      //        };
      //    });
      // });
      // $('.trainer .views-row:nth-child(2)') .addClass('fli animated');
      // $('.trainer .views-row:nth-child(2)').css('opacity', 0);
      // $(window).scroll(function () {
      //    $('.fli') .each(function () {
      //        var imagePos = $(this).offset().top;
      //        var topOfWindow = $(window).scrollTop();
      //        if (imagePos < topOfWindow+400) {
      //           $(this) .addClass('flipInX');
      //           $(this) .css('opacity', 1);
      //        };
      //    });
      // });
      // $('.trainer .views-row:last-child') .addClass('rotate_left animated');
      // $('.trainer .views-row:last-child').css('opacity', 0);
      // $(window).scroll(function () {
      //    $('.rotate_left') .each(function () {
      //        var imagePos = $(this).offset().top;
      //        var topOfWindow = $(window).scrollTop();
      //        if (imagePos < topOfWindow+300) {
      //           $(this) .addClass('rotateInUpLeft');
      //           $(this) .css('opacity', 1);
      //        };
      //    });
      // });

      // $('.team .views-row:nth-child(2)') .addClass('shak animated');
      // $('.team .views-row:nth-child(2)').css('opacity', 0);
      // $(window).scroll(function () {
      //    $('.shak') .each(function () {
      //        var imagePos = $(this).offset().top;
      //        var topOfWindow = $(window).scrollTop();
      //        if (imagePos < topOfWindow+200) {
      //           $(this) .addClass('shake');
      //           // $(this) .css('opacity', 1);
      //        };
      //    });
      // });
      // $('.news .col-lg-4 .views-row:first-child') .addClass('left animated');
      // $('.news .col-lg-4 .views-row:first-child').css('opacity', 0);
      // $(window).scroll(function () {
      //    $('.left') .each(function () {
      //        var imagePos = $(this).offset().top;
      //        var topOfWindow = $(window).scrollTop();
      //        if (imagePos < topOfWindow+300) {
      //           $(this) .addClass('bounceInLeft');
      //           $(this) .css('opacity', 1);
      //        };
      //    });
      // });

      // var i=0;
      // $(".socBox .socIcons li").each(function () {
      //    i++;
      //   $(this).attr("id","soc"+i);
      // });
      // $('.socIcons li') .addClass('animated');
      // $('.socIcons li') .css('opacity', 0);
      // var li = $('.socIcons li'),
      // len = li.length;
      // var height = $(window).height();
      // var showEffect = height/100*95;

      // $.fn.bounceInUp = function () {
      //   return this.each(function () {
      //       var $this = $(this);
      //        var imagePos = $this.offset().top;
      //        var topOfWindow = $(window).scrollTop();
      //        if (imagePos < topOfWindow+showEffect) {
      //           $this.addClass('bounceInUp');
      //           $this.css('opacity', 1);
      //        };
      //    });
      // };

      // $.fn.bounceInLeft = function () {
      //   return this.each(function () {
      //       var $this = $(this);
      //        var imagePos = $this.offset().top;
      //        var topOfWindow = $(window).scrollTop();
      //        if (imagePos < topOfWindow+showEffect) {
      //           $this.addClass('bounceInLeft');
      //           $this.css('opacity', 1);
      //        };
      //    });
      // };

      // $.fn.bounceInRight = function () {
      //   return this.each(function () {
      //       var $this = $(this);
      //        var imagePos = $this.offset().top;
      //        var topOfWindow = $(window).scrollTop();
      //        if (imagePos < topOfWindow+showEffect) {
      //           $this.addClass('bounceInRight');
      //           $this.css('opacity', 1);
      //        };
      //    });
      // };

      // $(window).scroll(function () {
      //   $('.views-field-field-fitness-ball').bounceInLeft ();
      //   $('.views-field-field-fitness-ball').addClass('left animated');
      // });
      // $(window).scroll(function () {
      //     $('.contact-message-feedback-form').bounceInLeft();
      //   });

      // if (len == 1) {
      //   $(window).scroll(function () {
      //     $('#soc1').bounceInUp();
      //   });
      // } else if (len == 2) {
      //   $(window).scroll(function () {
      //     $('#soc1').bounceInLeft ();
      //     $('#soc2').bounceInRight ();      
      //   });
      // } else if (len == 3) {
      //   $(window).scroll(function () {
      //     $('#soc1').bounceInLeft ();
      //     $('#soc2').bounceInUp ();
      //     $('#soc3').bounceInRight ();
      //   });
      // } else if (len == 4) {
      //   $('.socIcons li') .addClass('four');
      //   $(window).scroll(function(){
      //     $('#soc1, #soc2').bounceInLeft ();
      //     $('#soc3, #soc4').bounceInRight ();
      //   });
      // } else if (len == 5) {
      //   $('.socIcons li') .addClass('five');
      //   $(window).scroll(function(){
      //     $('#soc1, #soc2').bounceInLeft ();
      //     $('#soc3').bounceInUp (); 
      //     $('#soc4, #soc5').bounceInRight ();
      //   });
      // } else if (len == 6) {
      //   $('.socIcons li') .addClass('six');
      //   $(window).scroll(function(){
      //     $('#soc1, #soc2, #soc3').bounceInLeft ();
      //     $('#soc4, #soc5, #soc6').bounceInRight ();
      //   });
      // } else if (len == 7) {
      //   $('.socIcons li') .addClass('seven');
      //   $(window).scroll(function(){
      //     $('#soc1, #soc2, #soc3').bounceInLeft ();
      //     $('#soc4').bounceInUp (); 
      //     $('#soc5, #soc6, #soc7').bounceInRight ();
      //   });
      // } else if (len == 8) {
      //   $('.socIcons li') .addClass('eight');
      //     $(window).scroll(function(){
      //     $('#soc1, #soc2, #soc3, #soc4').bounceInLeft ();
      //     $('#soc5, #soc6, #soc7, #soc8').bounceInRight ();
      //   });
      // } else if (len == 9) {
      //   $('.socIcons li') .addClass('nine');
      //   $(window).scroll(function(){
      //     $('#soc1, #soc2, #soc3').bounceInLeft ();
      //     $('#soc4, #soc5, #soc6').bounceInUp ();
      //     $('#soc7, #soc8, #soc9').bounceInRight ();
      //   });
      // } else if (len == 10) {
      //   $('.socIcons li') .addClass('ten');
      //   $(window).scroll(function(){
      //     $('#soc1, #soc2, #soc3, #soc4, #soc5').bounceInLeft ();
      //     $('#soc6, #soc7, #soc8, #soc9, #soc10').bounceInRight ();
      //   });
      // } else if (len == 11) {
      //   $('.socIcons li') .addClass('eleven');
      //   $(window).scroll(function(){
      //     $('#soc1, #soc2, #soc3, #soc4').bounceInLeft ();
      //     $('#soc5, #soc6, #soc7').bounceInUp ();
      //     $('#soc8, #soc9, #soc10, #soc11').bounceInRight ();
      //   });
      // } else {

      // };

        //Fixed Menu Top
      // var headerHeight = $('.top_bg').height();
      //  $(window).scroll(function(){
      //   if($(window).scrollTop() >= headerHeight) {
      //     $('.top_block').addClass('top_fixed_menu'); 
      //     } else {
      //     $('.top_block').removeClass('top_fixed_menu'); 
      //     }
      //   });


      //   function resetActive(event, percent) {
      //   $(".progress-bar").css("width", percent + "%").attr("aria-valuenow", percent);
      //   $(".progress-completed").text(percent + "%");
      //   $("div").each(function () {
      //       if ($(this).hasClass("activestep")) {
      //           $(this).removeClass("activestep");
      //       }
      //   });
      //   if (event.target.className == "col-lg-2") {
      //       $(event.target).addClass("activestep");
      //   }
      //   else {
      //       $(event.target.parentNode).addClass("activestep");
      //   }
      // }
      // $(".stepblok div").click(function(event) {
      //   resetActive(event, $(this).data("progress"));
      // });

      // $(window).on('load', function () {
      //     var $preloader = $('#page-preloader'),
      //         $spinner   = $preloader.find('.spinner');
      //     $spinner.fadeOut();
      //     $preloader.delay(350).fadeOut('slow');
      // });



    }
  };
})(jQuery, Drupal);

$('.tooltip-demo a').tooltip();

jQuery(document).ready(function(){
      jQuery('.our-agents.views-row').addClass('wow animated zoomIn')
      jQuery('.views-field.views-field-field-partners-logo img').addClass('wow animated bounceIn')
      new WOW().init();
});
(function ($){

    $(window).on('load', function () {
        var $preloader = $('#prelouder'),
            $spinner   = $preloader.find('.spinner');
        $spinner.fadeOut();
        $preloader.delay().fadeOut('slow');
    });

})(jQuery);
