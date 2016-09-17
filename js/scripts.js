/*function slider() {
	$('.slider .temp > div').each(function() {
		var path = $(this).children('img').attr('src');
		$(this).css({
			'background': 'url("'+path+'") no-repeat center center'
		});
	})
	$('.slider .container').empty();
	$('.slider .prev, .slider .next, .slider .pagination').remove();
	$('.slider .container').html($('.slider .temp').html());
	$('.slider, .slider .container, .slider .container > div').width($('.wrapper').width());
	$('.slider').slides({
		generatePagination: false,
		generateNextPrev: true,
		container: 'container',
		effect: 'slide',
		slideSpeed: 500,
		slideEasing: 'easeInOutQuad',
		play: 10000,
		pause: 2500,
	});
}*/
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
	/*if ( $('.slider').length > 0 ) {
		slider();
		$('.slider').bind('swipeleft', function() {
			$('.slider .next').trigger('click');
		});
		$('.slider').bind('swiperight', function() {
			$('.slider .prev').trigger('click');
		});
	}
	if ( $('.card').length > 0 ) {
		$('.card .photos').slides({
			generatePagination: true,
			generateNextPrev: true,
			container: 'container',
			effect: 'slide',
			slideSpeed: 500,
			slideEasing: 'easeInOutQuad',
			play: 10000,
			pause: 2500,
		});
		$('.card .photos').bind('swipeleft', function() {
			$('.card .photos .next').trigger('click');
		});
		$('.card .photos').bind('swiperight', function() {
			$('.card .photos .prev').trigger('click');
		});
	}
	if ( $('.similar').length > 0 ) {
		$('.similar ul').jcarousel({
			scroll: 5,
			animation: 500,
			easing: 'easeInOutQuad',
			wrap: 'circular'
		});
		$('.similar .jcarousel-container').bind('swipeleft', function() {
			$('.similar .jcarousel-container .jcarousel-next').trigger('click');
		});
		$('.similar .jcarousel-container').bind('swiperight', function() {
			$('.similar .jcarousel-container .jcarousel-prev').trigger('click');
		});
	}
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});
	var c = 0;
	$('header').load(function() {
		console.log('asdasd');
	});*/
});