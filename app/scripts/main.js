console.log('\'Allo \'Allo!');

$(document).ready(function(){
  $('#slides').superslides();
});

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active-link');
        })
        $(this).addClass('active-link');

        var target = this.hash,
            menu = target;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.sections-menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.sections-menu nav-menu a').removeClass("active-link");
            currLink.addClass("active-link");
        }
        else{
            currLink.removeClass("active-link");
        }
    });
}

// $(document).ready(function(){
//   $('.main').onepage_scroll({
//     sectionContainer: 'section',
//     pagination: true,
//     loop: true,
//     responsiveFallback: false
//   });
// });

// Fade out title image when scroll
$(window).scroll(function(){
    $('.main-title').css('opacity', 1 - $(window).scrollTop() / 250);
  });

$(document).scroll(function () {
  const yPosition = $(this).scrollTop();
  if (yPosition > $(window).height()) {
      $('.sections-menu').fadeIn();
  } else {
      $('.sections-menu').fadeOut();
  }
});

$('.js-pic-nav-right').click(function () {
    'use strict';

    let currentActive = $('.picture-wrapper .active');
    let nextActive = currentActive.parent().nextAll().find('.picture').first();
    if (nextActive.length === 0) {
      nextActive = currentActive.parent().prevAll().find('.picture').first();
    }

    nextActive.addClass('active');
    currentActive.removeClass('active');
});

$('.js-pic-nav-left').click(function () {
    'use strict';

    let currentActive = $('.picture-wrapper .active');
    let prevActive = currentActive.parent().prevAll().find('.picture').last();
    if(prevActive.length === 0) {
      prevActive = currentActive.parent().nextAll().find('.picture').last();
    }
    prevActive.addClass('active');
    currentActive.removeClass('active');
});

let lightboxIsVisibleValue = $('.lightbox--is-left').hasClass('lightbox--is-visible');
let activeSectionAboutUs;

function ourStoryAnimationApply() {
  'use strict';
  console.log('I`m here!');

  let iconClicked = this.classList[0].split('-')[2];

  let lightbox = $('.lightbox');
  let optionsMenu = $('.about-us__options');
  let iconLeft = $('.js-meet-click');
  let iconCenter = $('.js-love-click');
  let iconRight= $('.js-porposal-click');

  if(!lightbox.hasClass('lightbox--is-visible') && !lightboxIsVisibleValue) {
    iconLeft.toggleClass('about-us__icon--is-animation about-us__icon--is-animation-left');
    iconCenter.toggleClass('about-us__icon--is-animation about-us__icon--is-animation-up');
    iconRight.toggleClass('about-us__icon--is-animation about-us__icon--is-animation-right');

    activeSectionAboutUs = iconClicked;

    // TODO add prefixes for all browsers
    $('.about-us__icon--is-animation').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd',
      function(){
        lightbox.toggleClass('animated fadeIn lightbox--is-visible lightbox--is-' + iconClicked);
    });
    lightboxIsVisibleValue = !lightboxIsVisibleValue;
  } else if (lightboxIsVisibleValue === true) {
    if (iconClicked !== activeSectionAboutUs) {
      $('.lightbox').toggleClass('lightbox--is-' + activeSectionAboutUs);
      $('.lightbox').toggleClass('lightbox--is-' + iconClicked);

      activeSectionAboutUs = iconClicked;
    } else {
      console.log('hola');
    }

  } else {
    lightboxIsVisibleValue = lightbox.hasClass('lightbox--is-visible');
  }

}

$(window).scroll(function () {
    $('.main-title').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            $(this).addClass('animated fadeOut');
        } else {
            $(this).removeClass('animated fadeIn');
        }
    });
});

// $('.js-meet-click').click(function () {
//     'use strict';
//     console.log('I`m here!');
//
//
//     let lightbox = $('.lightbox--is-left');
//     let optionsMenu = $('.about-us__options');
//     let iconLeft = $('.js-meet-click');
//     let iconRight=$('.js-porposal-click');
//
//     optionsMenu.toggleClass('about-us__icon--is-animation about-us__icon--is-animation-up');
//     iconLeft.toggleClass('about-us__icon--is-animation about-us__icon--is-animation-left');
//     iconRight.toggleClass('about-us__icon--is-animation about-us__icon--is-animation-right');
//
//     // TODO add prefixes for all browsers
//     $(".about-us__icon--is-animation").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
//       function(){
//         lightbox.toggleClass('lightbox--is-visible');
//     });
//
// });

// $('.js-meet-click').click(funtion () {
//   ourStoryAnimationApply();
//   });
$('.js-meet-click').click(ourStoryAnimationApply);
$('.js-love-click').click(ourStoryAnimationApply);
$('.js-porposal-click').click(ourStoryAnimationApply);


// $('.js-nav-btn').click(function () {
//   $(this.href).
// });
//
// $(function() {
//   $('.jshhh-nav-btn').click(function() {
//     $('input[type=checkbox]').removeAttr('checked');
//   });
//   // Animated Scroll
//   $('a[href*=#]:not([href=#])').click(function(e) {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
//       var hash = this.hash;
//       var target = $(hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top
//         }, 1000, function() {
//           window.location.hash = hash;
//         });
//         e.preventDefault();
//       }
//     }
//   });
//   // Cache selectors
//   var lastId,
//     topMenu = $("#menu"),
//     topMenuHeight = topMenu.outerHeight() + 15,
//     // All list items
//     menuItems = topMenu.find("a"),
//     // Anchors corresponding to menu items
//     scrollItems = menuItems.map(function() {
//       try {
//         var item = $($(this).attr("href"));
//         if (item.length) {
//           return item;
//         }
//       } catch (e) {
//         // do nothing
//       }
//     });
//   // Bind to scroll
//   $(window).scroll(function() {
//     // Get container scroll position
//     var fromTop = $(this).scrollTop() + topMenuHeight;
//     // Get id of current scroll item
//     var cur = scrollItems.map(function() {
//       if ($(this).offset().top < fromTop)
//         return this;
//     });
//     // Get the id of the current element
//     cur = cur[cur.length - 1];
//     var id = cur && cur.length ? cur[0].id : "";
//     if (lastId !== id) {
//       lastId = id;
//       // Set/remove active class
//       menuItems
//         .parent().removeClass("nav-active")
//         .end().filter("[href=#" + id + "]").parent().addClass("nav-active");
//     }
//   });
// });

      //
      // var forms = $("#cfp-form, #diversity-scholarship-form");
      // if (forms.length) {
      //   forms.submit(function(e) {
      //     e.preventDefault();
      //     var $t = $(e.target);
      //     var req = $.ajax({
      //       url: $t.attr("action"),
      //       data: $t.serialize(),
      //       type: "post"
      //     });
      //     req.done(function(resp) {
      //       window.alert(resp.success);
      //     });
      //     req.fail(function(resp) {
      //       window.alert(JSON.stringify(resp));
      //     })
      //   });
      // }
      // $(document).on("click", ".abstract-toggle", function(e) {
      //   $(e.target).text(function(i, t) {
      //     console.log(i, t);
      //     return t === "Read More" ? "Close Description" : "Read More"
      //   }).next().toggleClass("active")
      // });
      // $(document).on("click", ".expand_transcript", function(e) {
      //   $(e.target).closest('.video').toggleClass("active");
      // });
      // $(document).on("click", ".hide_transcript", function(e) {
      //   $(e.target).closest('.video').toggleClass("active");
      // });
      // $(function() {
      //   $(".nav-btn").click(function() {
      //     $('input[type=checkbox]').removeAttr('checked');
      //   });
      //   // Animated Scroll
      //   $('a[href*=#]:not([href=#])').click(function(e) {
      //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
      //       var hash = this.hash;
      //       var target = $(hash);
      //       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      //       if (target.length) {
      //         $('html,body').animate({
      //           scrollTop: target.offset().top
      //         }, 1000, function() {
      //           window.location.hash = hash;
      //         });
      //         e.preventDefault();
      //       }
      //     }
      //   });
      //   // Cache selectors
      //   var lastId,
      //     topMenu = $("#menu"),
      //     topMenuHeight = topMenu.outerHeight() + 15,
      //     // All list items
      //     menuItems = topMenu.find("a"),
      //     // Anchors corresponding to menu items
      //     scrollItems = menuItems.map(function() {
      //       try {
      //         var item = $($(this).attr("href"));
      //         if (item.length) {
      //           return item;
      //         }
      //       } catch (e) {
      //         // do nothing
      //       }
      //     });
      //   // Bind to scroll
      //   $(window).scroll(function() {
      //     // Get container scroll position
      //     var fromTop = $(this).scrollTop() + topMenuHeight;
      //     // Get id of current scroll item
      //     var cur = scrollItems.map(function() {
      //       if ($(this).offset().top < fromTop)
      //         return this;
      //     });
      //     // Get the id of the current element
      //     cur = cur[cur.length - 1];
      //     var id = cur && cur.length ? cur[0].id : "";
      //     if (lastId !== id) {
      //       lastId = id;
      //       // Set/remove active class
      //       menuItems
      //         .parent().removeClass("nav-active")
      //         .end().filter("[href=#" + id + "]").parent().addClass("nav-active");
      //     }
      //   });
      // });
      //
