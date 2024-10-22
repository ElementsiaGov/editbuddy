
  document.addEventListener("DOMContentLoaded", function () {
      var loaderElement = document.getElementById('lottie-loader');
      var contentElement = document.querySelector('.content');

      // Initialize Lottie animation
      var animation = lottie.loadAnimation({
          container: loaderElement, // the DOM element to render the animation
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: 'assets/lottie/Animation-1727177353731.json' // Provide the correct path to the Lottie JSON
      });

      // Add the load event listener to ensure the content is shown only when the page is fully loaded
      window.addEventListener('load', function () {
          setTimeout(function () {
              loaderElement.style.display = 'none'; // Hide the loader
              contentElement.style.display = 'block'; // Show the content
          }, 1000);  // Fake 1-second delay
      });
  });
// Scroll animation for services section
document.addEventListener('DOMContentLoaded', function () {
    const services = document.querySelectorAll('.service');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    services.forEach(service => {
        observer.observe(service);
    });
});

