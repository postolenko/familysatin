$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();
	getSlider();
	getScrollSidebar();

});

$(window).on("resize",function(){

	getSlider();
	getScrollSidebar();

});

$(document).ready(function() {		

	$("select").each(function() {

		$(this).select2({
			minimumResultsForSearch: Infinity,
			width: '100%'
		});

	});

	$(".tape_slder").not(".slick-initialized").slick({
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
		      breakpoint: 1150,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 420,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
    });

    $(".articles_slider").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        loop: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1
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

    $(".articles_slider_2").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        loop: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1
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

    $(".goods_slider").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        loop: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
		    {
		      breakpoint: 1120,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 750,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    }
		  ]
    });

});


function getSlider() {

	if( bodyWidth <= 900 ) {
		if( !$(".promo_box").hasClass("slick-initialized") ) {

			$(".promo_box").not(".slick-initialized").slick({
		        dots: false,
		        arrows: true,
		        autoplay: true,
		        autoplaySpeed: 5000,
		        speed: 1200,
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        responsive: [
				    {
				      breakpoint: 600,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1
				      }
				    }
				  ]
		    });

		}		

	} else {

		if( $(".promo_box").hasClass('slick-initialized')) {

			$(".promo_box").slick("unslick");

		}

	}

	// if( bodyWidth <= 1160 ) {

	// 	$(".articles_slider .article_thumb").unwrap(".inner_wrapp");

	// 	$(".articles_slider").not(".slick-initialized").slick({
	//         dots: false,
	//         arrows: true,
	//         loop: false,
	//         autoplay: true,
	//         autoplaySpeed: 5000,
	//         speed: 1200,
	//         slidesToShow: 1,
	//         slidesToScroll: 1,
	//         responsive: [
	// 		    {
	// 		      breakpoint: 1160,
	// 		      settings: {
	// 		        slidesToShow: 1,
	// 		        slidesToScroll: 1
	// 		      }
	// 		    }
	// 		  ]
	//     });

	// } else {

	// 	$(".articles_slider .article_thumb").wrap(".inner_wrapp");

	// 	$(".articles_slider").not(".slick-initialized").slick({
	//         dots: false,
	//         arrows: true,
	//         loop: false,
	//         autoplay: true,
	//         autoplaySpeed: 5000,
	//         speed: 1200,
	//         slidesToShow: 2,
	//         slidesToScroll: 1
	//     });



	// }

}

function getScrollSidebar() {

	if(bodyWidth <= 750) {

		$("#resp_sidebar").mCustomScrollbar();

	} else {

		$("#resp_sidebar").mCustomScrollbar("destroy");

	}	

}
