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
});

$(function() {
	$('#myTab a:first').tab('show')
});

