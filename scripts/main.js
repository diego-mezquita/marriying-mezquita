"use strict";function onScroll(i){var t=$(document).scrollTop();$(".sections-menu a").each(function(){var i=$(this);if(i.context.id&&"openup"===i.context.id)return i=$(this),!0;var e=$(i.attr("href"));e&&e.position().top<=t&&e.position().top+e.height()>t?($(".sections-menu nav-menu a").removeClass("active-link js-active-link"),i.addClass("active-link js-active-link"),$(".js-open-menu")[0].innerText=i.context.innerText):i.removeClass("active-link js-active-link")})}function setLightboxTextOurStory(i){var t=$(".js-our-story-text");t.load("html/"+i+".html")}function setLightboxTextFestivities(i){var t=$(".js-festivities-text");t.load("html/"+i+".html")}function setLightboxTextTravel(i){var t=$(".js-travel-text");t.load("html/"+i+".html")}function ourStoryAnimationApply(){console.log("I`m here OUR STORY!");var i=this.classList[0].split("__")[2],t=$(".lightbox-our-story"),e=($(".about-us__options"),$(".js-meet-click")),s=$(".js-love-click"),o=$(".js-porposal-click");setLightboxTextOurStory(i),t.hasClass("lightbox--is-visible")||lightboxIsVisibleValueAboutUs?lightboxIsVisibleValueAboutUs===!0?i!==activeSectionAboutUs?($(".lightbox-our-story").toggleClass("lightbox--is-"+activeSectionAboutUs),$(".lightbox-our-story").toggleClass("lightbox--is-"+i),activeSectionAboutUs=i):console.log("hola our STORY"):lightboxIsVisibleValueAboutUs=t.hasClass("lightbox--is-visible"):(e.toggleClass("about-us__icon--is-animation about-us__icon--is-animation-left"),s.toggleClass("about-us__icon--is-animation about-us__icon--is-animation-up"),o.toggleClass("about-us__icon--is-animation about-us__icon--is-animation-right"),activeSectionAboutUs=i,$(".about-us__icon--is-animation").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){t.toggleClass("animated fadeIn lightbox__about-us--is-visible lightbox--is-"+i)}),lightboxIsVisibleValueAboutUs=!lightboxIsVisibleValueAboutUs)}function festivitiesAnimationApply(){console.log("I`m here FESTIVITIES!");var i=this.classList[0].split("__")[2],t=$(".lightbox-festivities"),e=($(".festivities__options"),$(".js-ireland")),s=$(".js-ceremony"),o=$(".js-there");setLightboxTextFestivities(i),t.hasClass("lightbox--is-visible")||lightboxIsVisibleValueFestivities?lightboxIsVisibleValueFestivities===!0?i!==activeSectionFestivities?($(".lightbox-festivities").toggleClass("lightbox--is-"+activeSectionFestivities),$(".lightbox-festivities").toggleClass("lightbox--is-"+i),activeSectionFestivities=i):console.log("hola festivities"):lightboxIsVisibleValueFestivities=t.hasClass("lightbox--is-visible"):(e.toggleClass("festivities__icon--is-animation festivities__icon--is-animation-left"),s.toggleClass("festivities__icon--is-animation festivities__icon--is-animation-up"),o.toggleClass("festivities__icon--is-animation festivities__icon--is-animation-right"),activeSectionFestivities=i,$(".festivities__icon--is-animation").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){t.toggleClass("animated fadeIn lightbox__festivities--is-visible lightbox--is-"+i)}),lightboxIsVisibleValueFestivities=!lightboxIsVisibleValueFestivities)}function travelAnimationApply(){console.log("I`m here TRAVEL!");var i=this.classList[0].split("__")[2],t=$(".lightbox-travel"),e=($(".travel__options"),$(".js-eat")),s=$(".js-see"),o=$(".js-sleep");setLightboxTextTravel(i),t.hasClass("lightbox--is-visible")||lightboxIsVisibleValueTravel?lightboxIsVisibleValueTravel===!0?i!==activeSectionTravel?($(".lightbox-travel").toggleClass("lightbox--is-"+activeSectionTravel),$(".lightbox-travel").toggleClass("lightbox--is-"+i),activeSectionTravel=i):console.log("hola travel"):lightboxIsVisibleValueTravel=t.hasClass("lightbox--is-visible"):(e.toggleClass("travel__icon--is-animation travel__icon--is-animation-left"),s.toggleClass("travel__icon--is-animation travel__icon--is-animation-up"),o.toggleClass("travel__icon--is-animation travel__icon--is-animation-right"),activeSectionTravel=i,$(".travel__icon--is-animation").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){t.toggleClass("animated fadeIn lightbox__travel--is-visible lightbox--is-"+i)}),lightboxIsVisibleValueTravel=!lightboxIsVisibleValueTravel)}console.log("'Allo 'Allo!"),$(window).on("load",function(){$(".se-pre-con").fadeOut("slow")}),$(document).ready(function(){$("#slides").superslides()}),$(document).ready(function(){$(document).on("scroll",onScroll),$('a[href^="#"]').on("click",function(i){i.preventDefault(),$(document).off("scroll"),$("a").each(function(){$(this).removeClass("active-link js-active-link")}),$(this).addClass("active-link js-active-link");var t=this.hash,e=$(t);$("html, body").stop().animate({scrollTop:e.offset().top+2},500,"swing",function(){window.location.hash=t,$(document).on("scroll",onScroll)})})}),$(window).scroll(function(){$(".main-title").css("opacity",1-$(window).scrollTop()/250)}),$(document).scroll(function(){var i=$(this).scrollTop();i>$(window).height()-100&&$(".sections-menu").css("visibility","visible"),i>$(window).height()?$(".sections-menu").fadeIn():$(".sections-menu").fadeOut()}),$(".js-pic-nav-right").click(function(){var i=$(".picture-wrapper .active"),t=i.parent().nextAll().find(".picture").first();0===t.length&&(t=i.parent().prevAll().find(".picture").first()),t.addClass("active"),i.removeClass("active")}),$(".js-pic-nav-left").click(function(){var i=$(".picture-wrapper .active"),t=i.parent().prevAll().find(".picture").last();0===t.length&&(t=i.parent().nextAll().find(".picture").last()),t.addClass("active"),i.removeClass("active")});var lightboxIsVisibleValueAboutUs=$(".js-meet-click").hasClass("lightbox--is-visible"),lightboxIsVisibleValueFestivities=$(".js-ireland").hasClass("lightbox--is-visible"),lightboxIsVisibleValueTravel=$(".js-see").hasClass("lightbox--is-visible"),activeSectionAboutUs=void 0,activeSectionFestivities=void 0,activeSectionTravel=void 0;$(".js-open-menu").click(function(){var i=$(".js-nav-menu--options").find(".js-active-link");if(i.href)return void $(".js-open-menu").attr("href",i[0].href)}),$(window).scroll(function(){$(".main-title").each(function(){var i=$(this).offset().top,t=$(this).height(),e=$(window).scrollTop();i<e+t&&i+t>e?$(this).addClass("animated fadeOut"):$(this).removeClass("animated fadeIn")})}),$(".js-meet-click").click(ourStoryAnimationApply),$(".js-love-click").click(ourStoryAnimationApply),$(".js-porposal-click").click(ourStoryAnimationApply),$(".js-ireland").click(festivitiesAnimationApply),$(".js-ceremony").click(festivitiesAnimationApply),$(".js-there").click(festivitiesAnimationApply),$(".js-eat").click(travelAnimationApply),$(".js-see").click(travelAnimationApply),$(".js-sleep").click(travelAnimationApply),$(function(){var i=$("nav ul");$("#openup").on("click",function(t){t.preventDefault(),i.slideToggle()}),$("nav li").on("click",function(t){var e=$(window).width();e<680&&i.slideToggle()}),$(".open-menu").height($(window).height())});var dialog=document.querySelector("dialog");document.querySelector("#show").onclick=function(){dialog.showModal()},document.querySelector("#close").onclick=function(){dialog.close()},$(".js-iframe-form").load(function(){"Your response has been recorded."===$(".freebirdFormviewerViewResponseConfirmationMessage").val()});