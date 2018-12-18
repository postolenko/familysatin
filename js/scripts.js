var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var parentBlock;
var dropdownMenu;

$(window).load(function() {

	getFooterPosition();
	$(".dropdown_card_menu").addClass("properties");
	$(".dropdown").addClass("properties");
	$("[data-sllist]").css({
		"display" : "none"
	})

});

$(window).resize(function() {
    
	getFooterPosition();

});

$(document).ready(function() {

	$("[data-dropdown]").addClass("hidden");
	$(".dropdown").addClass("hidden"); 

	$("[data-dropdownbtn]").on('click', function(e) {

		e.preventDefault();		

		dropdownMenu = $("[data-dropdown = '"+ $(this).attr("data-dropdownbtn") + "']");

		if( dropdownMenu.find(".card_item").length > 0 ) {

			if(dropdownMenu.hasClass("active")) {
				dropdownMenu.removeClass("active");
				setTimeout(function() {
					dropdownMenu.css({
						"left" : -9999999 + "px"
					});
				}, 400);

			} else {
				dropdownMenu.css({
					"left" : 0
				});
				dropdownMenu.addClass("active");
			}

		}		

	});

	$(this).keydown(function(eventObject){

        if (eventObject.which == 27) {

            if ( $("[data-dropdown]").hasClass("active") ) {

                $("[data-dropdown]").removeClass("active");
				setTimeout(function() {
					$("[data-dropdown]").css({
						"left" : -9999999 + "px"
					});
				}, 400);

            }

            if ( $("[data-dropdown2]").hasClass("active") ) {

                $("[data-dropdown2]").removeClass("active");
				setTimeout(function() {
					$("[data-dropdown2]").css({
						"left" : -9999999 + "px"
					});
				}, 400);

            }

        }

    });

	$(document).mouseup(function (e){

        hide_element = $(".header_card");

        if (!hide_element.is(e.target)

            && hide_element.has(e.target).length === 0) {

            $("[data-dropdown]").removeClass("active");
			setTimeout(function() {
				$("[data-dropdown]").css({
					"left" : -9999999 + "px"
				});
			}, 400);
        }

    });

	$(".card_item .close_btn").click(function(e) {

		e.preventDefault();

		parentBlock = $(this).closest(".card_item");

		parentBlock.addClass("hidden");

		parentBlock.animate({
			"height" : 0
		}, 600);

		if( parentBlock.closest(".dropdown_card_menu").find(".card_item").length == 1 ) {
			parentBlock.closest(".dropdown_card_menu").removeClass("active");
		}

		setTimeout(function() {
			parentBlock.remove();			
		}, 600);

	});

	$("[data-dropdownbtn2], .select_input").on('click', function(e) {

		e.preventDefault();

		if( $(this).hasClass("select_input") ) {

			var dropdownMenuName = $(this).closest(".dropdowm_select_menu").find('[data-dropdownbtn2]').attr("data-dropdownbtn2");

			var dropdownMenu = $("[data-dropdown2 = '"+ dropdownMenuName + "']");

		} else {

			var dropdownMenu = $("[data-dropdown2 = '"+ $(this).attr("data-dropdownbtn2") + "']");

		}		

		if(dropdownMenu.hasClass("active")) {
			dropdownMenu.removeClass("active");
			setTimeout(function() {
				dropdownMenu.css({
					"left" : -9999999 + "px"
				});
			}, 400);

		} else {
			dropdownMenu.css({
				"left" : 0
			});
			dropdownMenu.addClass("active");
		}

	});

	$(document).mouseup(function (e){

        hide_element = $(".dropdowm_select_menu");

        if (!hide_element.is(e.target)

            && hide_element.has(e.target).length === 0) {

            $("[data-dropdown2]").removeClass("active");
			setTimeout(function() {
				$("[data-dropdown2]").css({
					"left" : -9999999 + "px"
				});
			}, 400);
        }

    });

	$(".dropdown_select_list p").on('click', function(e) {

		e.preventDefault();

		var val = $(this).text();
		parentBlock = $(this).closest(".dropdowm_select_menu");
		var selectInput = parentBlock.find(".select_input");
		selectInput.val(val);

		var dropdownMenu = $(this).closest(".dropdown");
		dropdownMenu.removeClass("active");
		setTimeout(function() {
			dropdownMenu.css({
				"left" : -9999999 + "px"
			});
		}, 400);

	});

	$("[data-slbtn]").on('click', function(e) {

		e.preventDefault();

		var slName = $(this).attr("data-slbtn");
		var slideBox = $("[data-sllist = '"+ slName +"']");

		if( slideBox.is(":hidden") ) {

			slideBox.slideDown(300);
			$(this).addClass("active");

		} else {

			slideBox.slideUp(300);
			$(this).removeClass("active");

		}

	});

	$( ".catalog_thumb" ).on('mouseenter', function(e) {
		$( this ).addClass( "z_index" );
	});

	$( ".catalog_thumb" ).on('mouseleave', function(e) {
		setTimeout(function() {
			$( this ).removeClass( "z_index" );
		}, 400);
	});


});

function getFooterPosition() {

    $(".footer_section").css({
        "margin-top" : -$(".footer_section").height() + "px"
    });

    $(".wrapper").css({
        "padding-bottom" : $(".footer_section").height() + "px"
    });

}