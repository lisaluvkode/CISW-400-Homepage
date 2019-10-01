<?php
$P = doubleval($_GET['P']);
$R = doubleval($_GET['R']);
$N = doubleval($_GET['N']);


$M = ($R / 100) / 12;
$T = $N * 12;

$PMT = floor( ( $P * $M ) / ( 1- pow( ( 1 + $M ) , (-1 * $T) ) ) * 100 ) / 100;
echo $PMT;
?>
