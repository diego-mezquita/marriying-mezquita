console.log('\'Allo \'Allo!');

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
