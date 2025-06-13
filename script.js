// Contact form handler (no backend, just a simple UI message)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-message').textContent = "Thank you for reaching out! I'll get back to you soon.";
  this.reset();
});