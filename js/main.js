var score;
var time;

$('#start').click(function() {
	score = 0;
	time = 0;

	$('#start').css('display', 'none');
	$('#target').css('display', 'block');

	var timer = setInterval(function() {
		time++;
		$('#countdown').text(60 - time);

		if (time >= 60) {
			clearInterval(timer);

			$('#start').css('display', 'block');
			$('#target').css('display', 'none');
		}
	}, 1000);
});

$('#target').click(function() {
	if (time < 60) {
		score++;
		$('#score').text(score);
	}
	if (score == 100) {

		var achievement = '#achievement1'

		$(achievement).popover('show')

		setTimeout(function() {
    	$(achievement).popover('hide')
		}, 7 * 1000);
	}
		if (score == 200) {

		var achievement = '#achievement2'

		$(achievement).popover('show')

		setTimeout(function() {
    	$(achievement).popover('hide')
		}, 7 * 1000);
	}
		if (score == 300) {

		var achievement = '#achievement3'

		$(achievement).popover('show')

		setTimeout(function() {
    	$(achievement).popover('hide')
		}, 7 * 1000);
	}
		if (score == 400) {

		var achievement = '#achievement4'

		$(achievement).popover('show')

		setTimeout(function() {
    	$(achievement).popover('hide')
		}, 7 * 1000);
	}
		if (score == 1000) {

		var achievement = '#achievement5'
		score = score = 0

		$(achievement).popover('show')

		setTimeout(function() {
    	$(achievement).popover('hide')
		}, 7 * 1000);
	}
});

$(function() {
	$('#myTab a:first').tab('show')
});


