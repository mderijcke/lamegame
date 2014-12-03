<?php
	$user = 'root';
	$pass = '1310Semnb';
	
	try {
    $dbh = new PDO('mysql:host=127.0.0.1:3306;dbname=lamegame', $user, $pass);
    foreach($dbh->query('SELECT * from highscore') as $row) {
        print_r($row);
    }
    $dbh = null;
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>