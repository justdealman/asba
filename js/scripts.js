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
	$('.history-line li').on('click', function(e) {
		e.preventDefault();
		$(this).siblings('.bg').stop().animate({
			'left': $(this).position().left+'px'
		}, 500);
		$(this).addClass('active').siblings().removeClass('active');
	}).filter(':first').click();
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
});