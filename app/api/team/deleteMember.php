<?php
include '../credentials.php';

$postdata = file_get_contents("php://input");

$conn = new mysqli($servername, $username, $password, $dbname);

$id = $postdata;

$sql = "DELETE FROM Team WHERE id=$id";

if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . $conn->error;
}

$conn->close();

?>