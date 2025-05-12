// Smooth scroll to sections
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});



// Show confirmation message after form submission
function showSuccessMessage(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Show success message
  document.getElementById('successMessage').style.display = 'block';

  // Reset the form
  event.target.reset();

  // Hide the success message after 5 seconds (optional)
  setTimeout(function () {
    document.getElementById('successMessage').style.display = 'none';
  }, 5000);
}
