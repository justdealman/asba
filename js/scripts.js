$(function() {
	$('.img-bg').each(function() {
		$(this).parent().css({
			'background': 'url("'+$(this).attr('src')+'") no-repeat center center',
			'background-size': 'cover'
		});
	});
	$('.intro-b .list li h4').each(function() {
		$(this).css({
			'margin-top': -($(this).outerHeight()/2-20)+'px'
		});
	});
	$('.intro-b .benefits ul li p').on('mouseenter', function(e) {
		e.preventDefault();
		var t = $('.intro-b .benefits .tip');
		var c = $('.intro-b .benefits .tip > div');
		c.hide().empty().append('<p>'+$(this).html()+'</p>');
		if ( !$(this).find('em').length == 0 ) {
			c.prepend('<h5>'+$(this).find('em').text()+'</h5>');
		}
		c.css({
			'margin-top': -c.outerHeight()/2+'px'
		}).stop(true,true).fadeIn(2000);
		$(this).parent().addClass('active').siblings().removeClass('active');
	}).filter(':first').trigger('mouseenter');
	$('.clients-b > div').slick({
		arrows: true,
		dots: false,
		autoplay: true,
		infinite: true,
		slidesToShow: 7,
		slidesToScroll: 7
	});
	$('.decision-e ul li p').on('mouseenter', function(e) {
		e.preventDefault();
		var t = $('.decision-e .tip');
		var c = $('.decision-e .tip > div');
		c.hide().empty().append('<p>'+$(this).attr('data-tip')+'</p>').css({
			'margin-top': -c.outerHeight()/2+'px'
		}).stop(true,true).fadeIn(2000);
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
	$(window).load(function() {
		$('.decision-e ul li p').filter(':first').trigger('mouseenter')
	});
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});
	$('.reviews-ul > div').jScrollPane({
		autoReinitialise: true
	});
	$('.reviews-p').slick({
		arrows: true,
		dots: false,
		autoplay: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1
	});
	if ( $('.history-line').length > 0 ) {
		$(function() {
			$('body').append('<span class="history-bg"></span>');
			var justLoaded = false;
			var delay = 0;
			var bg = $('.history-bg');
			$('.history-line .item').on('click', function(e) {
				e.preventDefault();
				if ( !justLoaded ) {
					justLoaded = true;
				} else {
					delay = 500;
				}
				bg.stop().animate({
					'left': $(this).offset().left+'px',
					'top': $(this).offset().top+'px'
				}, delay);
				$(this).addClass('active').siblings().removeClass('active');
			}).filter(':first').click();
			$('.history-line').slick({
				arrows: true,
				dots: false,
				autoplay: false,
				infinite: false,
				draggable: false,
				slidesToShow: 4,
				slidesToScroll: 1
			});
			$('.history-line').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
				if ( nextSlide > currentSlide ) {
					$('.history-line .item.active').next().addClass('active').siblings().removeClass('active');
				} else {
					$('.history-line .item.active').prev().addClass('active').siblings().removeClass('active');
				}
			});
		});
	}
});