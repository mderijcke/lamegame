var score;
var time;
var achievement = '.achievement'

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
		$(achievement).popover('hide')
		var achievement = '#achievement1'

		$('#achievement1').popover('show')
		setTimeout(function() {
    	$(achievement).popover('hide')
		}, 7 * 1000);
	}
		if (score == 200) {
		$(achievement).popover('hide')
		var achievement = '#achievement2'

		$('#achievement2').popover('show')
		setTimeout(function() {
    	$(achievement).popover('hide')
		}, 7 * 1000);
	}
		if (score == 300) {
		$(achievement).popover('hide')
		var achievement = '#achievement3'

		$('#achievement3').popover('show')
		setTimeout(function() {
    	$(achievement).popover('hide')
		}, 7 * 1000);
	}
		if (score == 400) {
		$(achievement).popover('hide')
		var achievement = '#achievement4'

		$('#achievement4').popover('show')
		setTimeout(function() {
    	$(achievement).popover('hide')
		}, 7 * 1000);
	}
		if (score == 4000) {
		$(achievement).popover('hide')
		var achievement = '#achievement5'
		score = score = 0

		$('#achievement5').popover('show')
		setTimeout(function() {
    	$(achievement).popover('hide')
		}, 7 * 1000);
	}
});

$(function() {
	$('#myTab a:first').tab('show')
});


