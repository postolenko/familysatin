var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

// --------------

var parentBlock;
var dropdownMenu;

// --------------

var cardRow;
var countVal;
var priceValEl;
var priceVal;
var countInput;
var countVal;

// --------------

$(window).load(function() {

	getFooterPosition();
	showScrollTopBtn();
	$(".dropdown_card_menu").addClass("properties");
	$(".dropdown").addClass("properties");
	$("[data-sllist]").css({
		"display" : "none"
	});
	getAdaptivePositionElements();

});

$(window).resize(function() {

	bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    
	getFooterPosition();
	showScrollTopBtn();
	getAdaptivePositionElements();

});

$(document).scroll(function() {
	showScrollTopBtn();
});

$(document).ready(function() {

	// ---------------------------------------

	$("[data-dropdown]").addClass("hidden");
	$(".dropdown").addClass("hidden");

	$(".breadcrumbs ul li").each(function() {

		if( $(this).index() > 0 ) {

			$(this).prepend("<i class='fas fa-angle-right'></i>");

		}

	});

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

	// ---------------------------------------

	$(".count-box button").click(function(e) {

        e.preventDefault();
        parentBlock = $(this).closest(".count-box");
        cardRow = parentBlock.closest(".table-row");
        priceValEl = cardRow.find(".price_val");
        priceVal = parseInt( priceValEl.text() );
        countInput = parentBlock.find(".count-num input");
        countVal = countInput.val();

        if(countVal == "") {

            countVal = 1;

        }

        if( $(this).hasClass("minus-btn") && countVal > 1 ) {

            countVal--;

        } else if( $(this).hasClass("plus-btn")) {

            countVal++;

        }

        countInput.val(countVal);
        cardRow.find(".price_total_val").text(priceVal * countVal);

    });


    $(".count-num input").on("keyup", function(e) {

    	cardRow = $(this).closest(".table-row");
    	countVal = $(this).val();
    	priceValEl = cardRow.find(".price_val");
        priceVal = parseInt( priceValEl.text() );
        cardRow.find(".price_total_val").text(priceVal * countVal);

    });

    $(".card_table .table-row .close_btn").on("click", function(e) {

    	e.preventDefault();

    	parentBlock = $(this).closest(".table-row");

    	parentBlock.fadeOut(300);

    });

    // ---------------------------------------

    $(".tabs").each(function() {

        $(this).find(".tab-link").each(function() {

            if( $(this).hasClass("active") ) {

                indexActiveTab = $(this).index(".tab-link");

                $(this).click();

                return false;

            } else {

                indexActiveTab = 0;

            }

        });

        attrForTabLink = $(this).find(".tab-link").eq(indexActiveTab).attr("for");
        activeTabRadio = $(this).find(".radio-tab[id = '"+ attrForTabLink +"']");
        activeTabRadio.prop("checked", true);
        $(this).find(".tab-link").eq(indexActiveTab).addClass("active");

    });

    $(".tab-link").click(function (e) {

        if( $(this).hasClass("active") ) {

            e.preventDefault();

        } else {

            tabsParent = $(this).closest(".tabs");
            attrForTabLink = $(this).attr("for");
            activeTabRadio = tabsParent.find(".radio-tab[id = '"+ attrForTabLink +"']");
            activeTabRadio.prop("checked", true);

            tabsParent.find(".tab-link").each(function () {
                
                if( $(this).hasClass("active") ) {

                    $(this).removeClass("active");

                }

            });

            $(this).addClass("active");

        }

    });

    // -------------------------

	$(".scroll-top").click(function(e) {

        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 700);

    });

    // -----------------------

    $(".show_popup").click(function(e) {

        e.preventDefault();

        popupName = $(this).attr("data-popup-name");
        popupBlock = $("[data-popup = '"+ popupName +"']");

        $("body").addClass("popupshow");

        popupBlock.fadeIn(400);

    });

    $(this).keydown(function(eventObject){

        if (eventObject.which == 27) {

            if ( $(".popup_wrapp").is(":visible") ) {

                $(".popup_wrapp").fadeOut(300);

                $("body").removeClass("popupshow");

            }

        }

    });

    $(".close-popup, .popup_bg").click(function(e) {
        
        e.preventDefault();

        popupBlock = $(this).closest(".popup_wrapp");

        popupBlock.fadeOut(300);

        $("body").removeClass("popupshow");

    });

    // ----------------

    $(".resp_btn").click(function() {

        $(".resp_nav").fadeIn(300);

    });

    $(".resp_nav .close_btn_2").click(function() {

    	$(".resp_nav").fadeOut(300);

    });

    $(this).keydown(function(eventObject){

        if (eventObject.which == 27 &&
            $(".resp_nav").is(":visible") ) {

                $(".resp_nav").fadeOut(300);

        }

    });

    // ----------------

    $("#fiters_btn").on("click", function(e) {

    	$(".filter_resp_nav").addClass("active");

    });

    $(".filter_resp_nav .close_btn").on("click", function(e) {

    	$(".filter_resp_nav").removeClass("active");

    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27) {
            $(".filter_resp_nav").removeClass("active");
        }
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

function showScrollTopBtn() {

    if( $(window).scrollTop() > $(".header-site").height() ) {

        $(".scroll-top").fadeIn(300);

    } else {

        $(".scroll-top").fadeOut(300);

    }

}

function getAdaptivePositionElements() {

    $(".append-elem").each(function() {

        screenParam = parseInt( $(this).attr("data-min-screen") );

        indexElem = $(this).attr("data-append-desktop-elem");

        if( bodyWidth <= screenParam ) {

            $("[data-append-elem = '"+ indexElem +"']").append($(this).children());

        }

         if( bodyWidth > screenParam ) {

            $("[data-append-desktop-elem = '"+ indexElem +"']").append($("[data-append-elem = '"+ indexElem +"']").children());

        }

    });

}