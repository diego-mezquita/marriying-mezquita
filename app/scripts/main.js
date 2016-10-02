console.log('\'Allo \'Allo!');

$('.main').onepage_scroll();

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
