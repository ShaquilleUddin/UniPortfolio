// Select the Scroll-to-Top button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show/Hide the button based on the scroll position
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    // Show the button when scrolled 100px or more
    scrollToTopBtn.style.display = 'block';
  } else {
    // Hide the button when near the top
    scrollToTopBtn.style.display = 'none';
  }
};

// Scroll to the top when the button is clicked
scrollToTopBtn.addEventListener('click', function () {
  // Smoothly scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
}); 