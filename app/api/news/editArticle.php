<?php

include '../credentials.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection


$request->text =  addslashes($request->text);
$request->spec =  addslashes($request->spec);

$sql = "UPDATE News SET title='$request->title', spec='$request->spec', text='$request->text', image='$request->image' WHERE id='$request->id'";

if ($conn->query($sql) === TRUE) {
    echo "successfully updated";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

// $request->title = "lolo";
// echo(json_encode($request));

?>