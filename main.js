$(document).ready(function() {	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 2000);

});

$(function () {
  // $('.animate-rotate-1').animatedHeadline({
  //     animationType: 'rotate-1'
  // });

  // $('.animate-type').animatedHeadline({
  //     animationType: 'type'
  // });

  // $('.animate-rotate-2').animatedHeadline({
  //     animationType: 'rotate-2'
  // });

  // $('.animate-loading-bar').animatedHeadline({
  //     animationType: 'loading-bar'
  // });

  // $('.animate-slide').animatedHeadline({
  //     animationType: 'slide'
  // });

  // $('.animate-clip').animatedHeadline({
  //     animationType: 'clip'
  // });

  // $('.animate-zoom').animatedHeadline({
  //     animationType: 'zoom'
  // });

  // $('.animate-rotate-3').animatedHeadline({
  //     animationType: 'rotate-3'
  // });

  $('.animate-scale').animatedHeadline({
    animationType: 'scale'
  });

  // $('.animate-push').animatedHeadline({
  //     animationType: 'push'
  // });
});



function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

var config = document.querySelector('.places');
var mixer = mixitup(config);


$('.respon').slick({
  dots: true,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
         arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
         arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.gallery').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
         arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
         arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




