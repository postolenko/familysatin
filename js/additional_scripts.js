$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

});

$(document).ready(function() {		

	$("select").each(function() {

		$(this).select2({
			minimumResultsForSearch: Infinity,
			width: '100%'
		});

	});

	$(".tape_slder").slick({
        dots: false,
        arrows: false,
        loop: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1200,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
		    {
		      breakpoint: 800,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 530,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
    });

    $(".articles_slider").slick({
        dots: false,
        arrows: true,
        loop: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        // variableWidth: true
    //     responsive: [
		  //   {
		  //     breakpoint: 800,
		  //     settings: {
		  //       slidesToShow: 2,
		  //       slidesToScroll: 2
		  //     }
		  //   },
		  //   {
		  //     breakpoint: 530,
		  //     settings: {
		  //       slidesToShow: 1,
		  //       slidesToScroll: 1
		  //     }
		  //   }
		  // ]
    });

    // $(".article_thumb").unwrap(".inner_wrapp");

    $(".goods_slider").slick({
        dots: false,
        arrows: true,
        loop: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 1
    //     responsive: [
		  //   {
		  //     breakpoint: 800,
		  //     settings: {
		  //       slidesToShow: 2,
		  //       slidesToScroll: 2
		  //     }
		  //   },
		  //   {
		  //     breakpoint: 530,
		  //     settings: {
		  //       slidesToShow: 1,
		  //       slidesToScroll: 1
		  //     }
		  //   }
		  // ]
    });

});

