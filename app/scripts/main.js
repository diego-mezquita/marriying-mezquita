console.log('\'Allo \'Allo!');

// LOADING
// Wait for window load
// $(window).load(function() {
$(window).on('load', function() {
	// Animate loader off screen
	$('.se-pre-con').fadeOut('slow');;
});

$(document).ready(function(){
  $('#slides').superslides();
});

// i18next js set up
//  VERSION ONE
// $(document).ready(function() {
// 	// load modules
// 	var express = require('express');
//   var i18n = require("i18n");
//
// 	i18n.configure({
//     locales:['en', 'es'],
//     directory: __dirname + '/locales'
// 	});
//
// 	getlocale();
// });
//  VERSION TWO
// var resources = {
//     "es": {
//         "translation": {
//             "title": "título",
//                 "placeholder_1": "introduce nombre",
//                 "value_1": "valor_1"
//         }
//     },
//         "en": {
//         "translation": {
//             "title": "title of the page",
//                 "placeholder_1": "enter name",
//                 "value_1": "value 1"
//         }
//     }
// };
//
// $(document).ready(function () {
//     i18n.init({
//         "lng": 'en',
//         "resStore": resources,
//         "fallbackLng" : 'en'
//     }, function (t) {
//         $(document).i18n();
//     });
//
//     $('.lang').click(function () {
//         var lang = $(this).attr('data-lang');
//         i18n.init({
//             lng: lang
//         }, function (t) {
//             $(document).i18n();
//         });
//     });
// });
//  VERSION ONE
// $(document).ready(function () {
// 	i18n.init(function(err, t) {
// 	  // translate nav
// 	  $('.nav').i18n();
//
// 	  // programatical access
// 	  var appName = t('app.name');
// 	});
// });


$(document).ready(function () {
  $(document).on('scroll', onScroll);

  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off('scroll');

    $('a').each(function () {
        $(this).removeClass('active-link js-active-link');
    })
    $(this).addClass('active-link js-active-link');

    var target = this.hash,
      menu = target;
    var $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top+2
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on('scroll', onScroll);
    });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.sections-menu a').each(function () {
    var currLink = $(this);
		if (currLink.context.id && currLink.context.id === 'openup') {
			currLink = $(this);
			return true;
		}
    var refElement = $(currLink.attr('href'));
    if (refElement && refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('.sections-menu nav-menu a').removeClass('active-link js-active-link');
      currLink.addClass('active-link js-active-link');
    }
    else{
      currLink.removeClass('active-link js-active-link');
    }
  });
}

// Fade out title image when scroll
$(window).scroll(function(){
    $('.main-title').css('opacity', 1 - $(window).scrollTop() / 250);
  });

// Fade in and out the sections-menu
$(document).scroll(function () {
  const yPosition = $(this).scrollTop();

  if (yPosition > $(window).height() - 100) {
    $('.sections-menu').css('visibility', 'visible');
  }

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

let lightboxIsVisibleValueAboutUs = $('.js-meet-click').hasClass('lightbox--is-visible');
let lightboxIsVisibleValueFestivities = $('.js-ireland').hasClass('lightbox--is-visible');
let lightboxIsVisibleValueTravel = $('.js-see').hasClass('lightbox--is-visible');
let activeSectionAboutUs;
let activeSectionFestivities;
let activeSectionTravel;

$('.js-open-menu').click(function () {
	const active = $('.js-nav-menu--options').find('.js-active-link');
	// const linkTo = !active[0].href ?  : active[0].href.split('#');

	if(!!active.href) {
		$('.js-open-menu').attr('href', active[0].href);
		return;
	}

  return;
	// $("#linkId").attr("href", "http://the.new.url");

});

function setLightboxTextOurStory(iconClicked) {
	const lightboxText = $('.js-our-story-text');

	lightboxText.load(`html/${iconClicked}.html`);
}

function setLightboxTextFestivities(iconClicked) {
	const lightboxText = $('.js-festivities-text');

	lightboxText.load(`html/${iconClicked}.html`);
}

function setLightboxTextTravel(iconClicked) {
	const lightboxText = $('.js-travel-text');

	lightboxText.load(`html/${iconClicked}.html`);
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


// ABOUT US / OUR STORY ANIMATIONS
$('.js-meet-click').click(ourStoryAnimationApply);
$('.js-love-click').click(ourStoryAnimationApply);
$('.js-porposal-click').click(ourStoryAnimationApply);

function ourStoryAnimationApply() {
  'use strict';
  console.log('I`m here OUR STORY!');

  let iconClicked = this.classList[0].split('__')[2];

  let lightbox = $('.lightbox-our-story');
  let optionsMenu = $('.about-us__options');
  let iconLeft = $('.js-meet-click');
  let iconCenter = $('.js-love-click');
  let iconRight= $('.js-porposal-click');

	setLightboxTextOurStory(iconClicked);

  if(!lightbox.hasClass('lightbox--is-visible') && !lightboxIsVisibleValueAboutUs) {
    iconLeft.toggleClass('about-us__icon--is-animation about-us__icon--is-animation-left');
    iconCenter.toggleClass('about-us__icon--is-animation about-us__icon--is-animation-up');
    iconRight.toggleClass('about-us__icon--is-animation about-us__icon--is-animation-right');

    activeSectionAboutUs = iconClicked;

    // TODO add prefixes for all browsers
    $('.about-us__icon--is-animation').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd',
      function(){
        lightbox.toggleClass('animated fadeIn lightbox__about-us--is-visible lightbox--is-' + iconClicked);
    });
    lightboxIsVisibleValueAboutUs = !lightboxIsVisibleValueAboutUs;
  } else if (lightboxIsVisibleValueAboutUs === true) {
    if (iconClicked !== activeSectionAboutUs) {
      $('.lightbox-our-story').toggleClass('lightbox--is-' + activeSectionAboutUs);
      $('.lightbox-our-story').toggleClass('lightbox--is-' + iconClicked);

      activeSectionAboutUs = iconClicked;
    } else {
      console.log('hola our STORY');
    }

  } else {
    lightboxIsVisibleValueAboutUs = lightbox.hasClass('lightbox--is-visible');
  }
}

// FESTIVITIES ANIMATIONS
$('.js-ireland').click(festivitiesAnimationApply);
$('.js-ceremony').click(festivitiesAnimationApply);
$('.js-there').click(festivitiesAnimationApply);

function festivitiesAnimationApply() {
  'use strict';
  console.log('I`m here FESTIVITIES!');

	let iconClicked = this.classList[0].split('__')[2];

	let lightbox = $('.lightbox-festivities');
	let optionsMenu = $('.festivities__options');
	let iconLeft = $('.js-ireland');
	let iconCenter = $('.js-ceremony');
	let iconRight= $('.js-there');


	setLightboxTextFestivities(iconClicked);

  if(!lightbox.hasClass('lightbox--is-visible') && !lightboxIsVisibleValueFestivities) {
    iconLeft.toggleClass('festivities__icon--is-animation festivities__icon--is-animation-left');
    iconCenter.toggleClass('festivities__icon--is-animation festivities__icon--is-animation-up');
    iconRight.toggleClass('festivities__icon--is-animation festivities__icon--is-animation-right');

    activeSectionFestivities = iconClicked;

    // TODO add prefixes for all browsers
    $('.festivities__icon--is-animation').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd',
      function(){
        lightbox.toggleClass('animated fadeIn lightbox__festivities--is-visible lightbox--is-' + iconClicked);
    });
    lightboxIsVisibleValueFestivities = !lightboxIsVisibleValueFestivities;
  } else if (lightboxIsVisibleValueFestivities === true) {
    if (iconClicked !== activeSectionFestivities) {
      $('.lightbox-festivities').toggleClass('lightbox--is-' + activeSectionFestivities);
      $('.lightbox-festivities').toggleClass('lightbox--is-' + iconClicked);

      activeSectionFestivities = iconClicked;
    } else {
      console.log('hola festivities');
    }

  } else {
    lightboxIsVisibleValueFestivities = lightbox.hasClass('lightbox--is-visible');
  }
}


// TRAVEL ANIMATIONS
$('.js-eat').click(travelAnimationApply);
$('.js-see').click(travelAnimationApply);
$('.js-sleep').click(travelAnimationApply);

function travelAnimationApply() {
  'use strict';
  console.log('I`m here TRAVEL!');

	let iconClicked = this.classList[0].split('__')[2];

	let lightbox = $('.lightbox-travel');
  let optionsMenu = $('.travel__options');
  let iconLeft = $('.js-eat');
  let iconCenter = $('.js-see');
  let iconRight= $('.js-sleep');

	setLightboxTextTravel(iconClicked);

  if(!lightbox.hasClass('lightbox--is-visible') && !lightboxIsVisibleValueTravel) {
    iconLeft.toggleClass('travel__icon--is-animation travel__icon--is-animation-left');
    iconCenter.toggleClass('travel__icon--is-animation travel__icon--is-animation-up');
    iconRight.toggleClass('travel__icon--is-animation travel__icon--is-animation-right');

    activeSectionTravel = iconClicked;

    // TODO add prefixes for all browsers
    $('.travel__icon--is-animation').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd',
      function(){
        lightbox.toggleClass('animated fadeIn lightbox__travel--is-visible lightbox--is-' + iconClicked);
    });
    lightboxIsVisibleValueTravel = !lightboxIsVisibleValueTravel;
  } else if (lightboxIsVisibleValueTravel === true) {
    if (iconClicked !== activeSectionTravel) {
      $('.lightbox-travel').toggleClass('lightbox--is-' + activeSectionTravel);
      $('.lightbox-travel').toggleClass('lightbox--is-' + iconClicked);

      activeSectionTravel = iconClicked;
    } else {
      console.log('hola travel');
    }

  } else {
    lightboxIsVisibleValueTravel = lightbox.hasClass('lightbox--is-visible');
  }
}


  // RESPONSIVE TOP NAVIGATION
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//     var x = document.getElementsById('myTopnav');
//     if (x.className === "nav-menu") {
//         x.className += " responsive";
//     } else {
//         x.className = "nav-menu";
//     }
// }

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }

$(function() {
	const menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault();
		menu.slideToggle();
  });

  // $(window).resize(function(){
  //   var w = $(this).width();
	//
	// 	if(w > 680 && menu.is(':hidden')) {
  //     menu.removeAttr('style');
  //   }
  // });

  $('nav li').on('click', function(e) {
    var w = $(window).width();

		if(w < 680 ) {
      menu.slideToggle();
    }
  });

  $('.open-menu').height($(window).height());
});

// dialog-polyfill - START
var dialog = document.querySelector('dialog');
document.querySelector('#show').onclick = function() {
  dialog.showModal();
};
document.querySelector('#close').onclick = function() {
  dialog.close();
};
// dialog-polyfill - END

// iframe google form - START
$('.js-iframe-form').load(function(){
    // alert('frame has (re)loaded');
		const final = $('.freebirdFormviewerViewResponseConfirmationMessage').val() === 'Your response has been recorded.';
});
// iframe google form - END

// travel suggestions - START
// $(document).ready(function() {
// 	$(function() {
	// $('js-image-hover > li').hoverdir();
// 	});
// });
