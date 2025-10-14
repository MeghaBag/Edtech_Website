<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST["name"]);
  $email = htmlspecialchars($_POST["email"]);
  $phone = htmlspecialchars($_POST["phone"]);
  $course = htmlspecialchars($_POST["course"]);
  $message = htmlspecialchars($_POST["message"]);

  // You can log or email the data
  $to = "your-email@example.com"; // Replace with your email
  $subject = "New Course Enrollment";
  $body = "Name: $name\nEmail: $email\nPhone: $phone\nCourse: $course\nMessage: $message";

  if (mail($to, $subject, $body)) {
    echo "Enrollment successful. We'll contact you soon!";
  } else {
    echo "Something went wrong. Please try again.";
  }
}
?>
