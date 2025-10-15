<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Contact Us</title>
  <link rel="stylesheet" href="css/style.css"/>
</head>
<body>
  <header>
    <nav>
      <h1>EdTech</h1>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="services.html">Courses</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section class="contact-form">
    <h2>Contact Us</h2>
    <form id="contactForm" method="POST" action="contact.php" onsubmit="return validateForm()">
      <input type="text" name="name" placeholder="Your Name" required/>
      <input type="email" name="email" placeholder="Your Email" required/>
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </section>

  <footer>
    <p>&copy; 2025 EdTech Platform</p>
  </footer>

  <script src="js/script.js"></script>
</body>
</html>
function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightbox.style.display = "flex";
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

