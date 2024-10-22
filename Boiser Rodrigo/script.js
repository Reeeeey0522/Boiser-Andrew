<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = htmlspecialchars($_POST['firstName']);
    $lastName = htmlspecialchars($_POST['lastName']);
    $age = htmlspecialchars($_POST['age']);
    $contact = htmlspecialchars($_POST['contact']);
    $address = htmlspecialchars($_POST['address']);

    // Here you can process the data (e.g., save to a database, send an email, etc.)
    
    // For demonstration, we just display the submitted data
    echo "<h1>Form Submitted Successfully!</h1>";
    echo "<p>First Name: $firstName</p>";
    echo "<p>Last Name: $lastName</p>";
    echo "<p>Age: $age</p>";
    echo "<p>Contact: $contact</p>";
    echo "<p>Address: $address</p>";
} else {
    echo "Invalid request.";
}
?>
