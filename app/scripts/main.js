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

let lightboxIsVisibleValue = $('.lightbox--is-left').hasClass('lightbox--is-visible');
let activeSectionAboutUs;
let activeSectionFestivities;
const lightboxTexts = {
	'meet': '<div class="lightbox__text"><p>How we met</p><p>It was my (Holly’s) 2nd interview with the CEO of the company. I couldn’t have been any more nervous, and to make matters worse, my future boss had accidentally sent me the address to the wrong office. I frantically called around trying to figure out where I needed to be so I could get to the interview on time.</p><p>I finally found my way into a small office by the beach. Everyone was completely silent and staring my way when I walked in. I felt like I had just burst in on them, but what I thought at the time was a sweet little nerd, hopped up immediately to greet me with the biggest smile.</p><p>Before I let him speak I told him my situation, in Spanish, asking if the man I was going to have my interview with worked in this office or not. Funny enough, he answered me in English (was my Spanish really that bad?) letting me know that I had made it.</p><p>The boss came out from the back room jokingly telling everyone I had just passed my first test. And just a few short hours after the interview, I received a formal offer to join the team. I was just as excited (well, a bit nervous too) about the job as I was about seeing Diego again!</p></div>',
	'love': '<div class="lightbox__text"><p>How we started dating</p><p>It all started at the water tank. Well, sort of. We spent months and months slowly getting to know each other, mostly smiling at each other and finding excuses here and there to talk.</p><p>It wasn’t until we decided to grab a drink together after a long week at work that things really began. I don’t think either of us were really considering our first date to be an actual date or at least not in the beginning. We were both cautious, but after hours of getting lost in conversation, we quickly realized things felt right and from that point on we were inseparable.</p></div>',
	'porposal': '<div class="lightbox__text"><p>The Proposal</p><p>(Diego) If you know Holly, you know she is always on. So imagine trying to pull one over on her - it was no easy feat. It all started a few months before the proposal itself. I wanted to do things right, so I skyped with my future in-laws and asked them for their daughter’s hand in marriage. Holly who was supposed to be out for a run, cut her morning routine short and almost walked in on the big moment. Luckily her parents said “yes” just in time for me to hang up as Holly asked who I was talking to.</p><p>With the help of a few close friends and Holly’s sister, Stacey, we planned a proposal that we knew Holly would love. She had just bought a red dress, but she had never worn it so we came up with a plan for Stacey to invite her to a party for the local soccer team, Sporting (their colors are red and white). She was a bit hesitant, soccer isn’t her thing, but knowing that the party meant a lot to her sister she threw on the dress and got ready for a night out.</p><p>(Holly) Something was up. From the moment Stacey and Carlos came to pick me up for the Sporting Party, Stacey was acting a bit goofy and made me listen to a special soundtrack in the car, which included “Lady in red”... On the way over, I asked a few times where the party was and they claimed it was at a big house, so when we arrived at a park I was pretty suspicious.</p><p>Stacey kept repeating “I guess we got here first…” and they were taking an odd amount of pictures of me…Just as we were rounding a corner my sister told me to look up a little hill. There was a path that was lit with cute little lanterns and at the top of the hill I saw Diego. Our friends Laura and Berti were ducking around the corner. They played John Legend’s “All of me” as I made my way up to Diego. Cancio was also there, but doing his best to stay out of sight so he could record this special moment.</p><p>(Diego) I anxiously told her the words I’d practiced what must have been a hundred, if not a thousand times. I’ve never been so nervous before in my life. This was the most important question I’d ever ask. I got down on one knee, said her full name (my future sister-in-law gave me some good, American approved advice there) and I had champagne chilling, ready to toast.</p><p>(Holly) I wanted to freeze this moment in time. Just as I said "yes", our closest friends came out from where they’d been hiding to congratulate us, but everyone disappeared quickly, supposedly to give us our space. Diego was far from done though, he had a full 4-course dinner, champagne, and my favorite wine ready to enjoy while overlooking the ocean.</p><p>To make the night even more memorable, he rented a house and invited more friends to meet us there to celebrate a surprise engagement party. I was actually so busy staring at the ring and taking it all in that I didn’t even question why we had driven so far from the city or why we were going to a random house. I walked into another beautiful surprise. It was a night I’ll never forget.</p></div>',
	'ireland': '<div class="lightbox__text"><p>Why Ireland?</p><p>It’s no secret that we are both crazy about traveling and discovering new places so planning a destination wedding was a no brainer.</p><p>So, why Ireland? Our very first trip together was to Ireland. Holly has a few friends that live in the west and I had wanted to go somewhere to study English so we found a course for me to attend in Dublin and at the end of the course Holly came to visit me.</p><p>While we were busy falling for each other, we also fell in love with Ireland. There is just something so magical and special about it. Everyone you meet is friendly, the countryside and the coast are beautiful, and you can find live music just about everywhere you go.</p></div>',
	'ceremony': '<div class="lightbox__text"><p>The Ceremony & Reception</p><p>Where: Huntington Castle</p><pWhen: August 17, 2017p><p>We’ll be saying “I do” at one of Ireland’s best kept secrets. The ceremony will be followed with drinks, dinner and dancing.</p></div>',
	'there': '<div class="lightbox__text"><p>Getting there</p><p>More information coming soon…</p></div>'
};

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
	const lightboxText = $('.js-lightbox-text');

	lightboxText.html(lightboxTexts[iconClicked]);
}

function setLightboxTextFestivities(iconClicked) {
	const lightboxText = $('.js-ligh');

	lightboxText.html(lightboxTexts[iconClicked]);
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

function ourStoryAnimationApply() {
  'use strict';
  console.log('I`m here!');

  let iconClicked = this.classList[0].split('__')[2];

  let lightbox = $('.lightbox-our-story');
  let optionsMenu = $('.about-us__options');
  let iconLeft = $('.js-meet-click');
  let iconCenter = $('.js-love-click');
  let iconRight= $('.js-porposal-click');

	setLightboxTextOurStory(iconClicked);

  if(!lightbox.hasClass('lightbox--is-visible') && !lightboxIsVisibleValue) {
    iconLeft.toggleClass('about-us__icon--is-animation about-us__icon--is-animation-left');
    iconCenter.toggleClass('about-us__icon--is-animation about-us__icon--is-animation-up');
    iconRight.toggleClass('about-us__icon--is-animation about-us__icon--is-animation-right');

    activeSectionAboutUs = iconClicked;

    // TODO add prefixes for all browsers
    $('.about-us__icon--is-animation').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd',
      function(){
        lightbox.toggleClass('animated fadeIn lightbox__about-us--is-visible lightbox--is-' + iconClicked);
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

$('.js-ireland').click(festivitiesAnimationApply);
$('.js-ceremony').click(festivitiesAnimationApply);
$('.js-there').click(festivitiesAnimationApply);

function festivitiesAnimationApply() {
  'use strict';
  console.log('I`m here FESTIVITIES!');

  let iconClicked = this.classList[0].split('__')[2];

  let lightbox = $('.lightbox-festivities');
  let optionsMenu = $('.festivies__options');
  let iconLeft = $('.js-ireland');
  let iconCenter = $('.js-ceremony');
  let iconRight= $('.js-there');

	setLightboxTextFestivities(iconClicked);

  if(!lightbox.hasClass('lightbox--is-visible') && !lightboxIsVisibleValue) {
    iconLeft.toggleClass('festivitieses__icon--is-animation festivities__icon--is-animation-left');
    iconCenter.toggleClass('festivities__icon--is-animation festivities__icon--is-animation-up');
    iconRight.toggleClass('festivities__icon--is-animation festivities__icon--is-animation-right');

    activeSectionFestivities = iconClicked;

    // TODO add prefixes for all browsers
    $('.festivtiies__icon--is-animation').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd',
      function(){
        lightbox.toggleClass('animated fadeIn lightbox__festivities--is-visible lightbox--is-' + iconClicked);
    });
    lightboxIsVisibleValue = !lightboxIsVisibleValue;
  } else if (lightboxIsVisibleValue === true) {
    if (iconClicked !== activeSectionFestivities) {
      $('.lightbox').toggleClass('lightbox--is-' + activeSectionFestivities);
      $('.lightbox').toggleClass('lightbox--is-' + iconClicked);

      activeSectionFestivities = iconClicked;
    } else {
      console.log('hola');
    }

  } else {
    lightboxIsVisibleValue = lightbox.hasClass('lightbox--is-visible');
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
