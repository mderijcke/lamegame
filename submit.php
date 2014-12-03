<?php
$user = 'root';
$pass = '1310Semnb';

try {
	$dbh = new PDO('mysql:host=127.0.0.1:3306;dbname=lamegame', $user, $pass);
	if ($dbh == false) {
		die("Could not connect");
	}

	$sth = $dbh->query("SELECT `highscore_id`, `highscore_date`, `highscore_score` from `highscore` ORDER BY `highscore_score` ASC");
	if ($sth == false) {
		die("Could not query");
	}

	while ($row = $sth->fetch(PDO::FETCH_NUM)) {
		echo implode(',', $row) . "\n";
	}

	$dbh = null;
} catch (PDOException $e) {
	print "Error!: " . $e->getMessage() . "<br/>";
	die();
}

