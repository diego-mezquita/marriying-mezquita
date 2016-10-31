console.log('\'Allo \'Allo!');

// LOADING
// Wait for window load
// $(window).load(function() {
$(window).on('load', function() {
	// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");;
});

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

let lightboxIsVisibleValue = $('.lightbox--is-left').hasClass('lightbox--is-visible');
let activeSectionAboutUs;
const lightboxTexts = {
	'meet': '<div class="lightbox__text"><p> How we met</p><p>It was my (Holly’s) 2nd interview with the CEO of the company. I couldn’t have been any more nervous, and to make matters worse, my future boss had accidentally sent me the address to the wrong office. I frantically called around trying to figure out where I needed to be so I could get to the interview on time.</p><p>I finally found my way into a small office by the beach. Everyone was completely silent and staring my way when I walked in. I felt like I had just burst in on them, but what I thought at the time was a sweet little nerd, hopped up immediately to greet me with the biggest smile.</p><p>Before I let him speak I told him my situation, in Spanish, asking if the man I was going to have my interview with worked in this office or not. Funny enough, he answered me in English (was my Spanish really that bad?) letting me know that I had made it.</p><p>The boss came out from the back room jokingly telling everyone I had just passed my first test. And just a few short hours after the interview, I received a formal offer to join the team. I was just as excited (well, a bit nervous too) about the job as I was about seeing Diego again!</p></div>',
	'love': '',
	'porposal': ''
};

function setLightboxText(iconClicked) {
	const lightboxText = $('.js-lightbox-text');

	lightboxText.append(lightboxTexts[iconClicked]);
}

function ourStoryAnimationApply() {
  'use strict';
  console.log('I`m here!');

  let iconClicked = this.classList[0].split('__')[2];

  let lightbox = $('.lightbox');
  let optionsMenu = $('.about-us__options');
  let iconLeft = $('.js-meet-click');
  let iconCenter = $('.js-love-click');
  let iconRight= $('.js-porposal-click');

	setLightboxText(iconClicked);

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

$('.js-meet-click').click(ourStoryAnimationApply);
$('.js-love-click').click(ourStoryAnimationApply);
$('.js-porposal-click').click(ourStoryAnimationApply);
