// Select all elements
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;
let autoSlideInterval; // Variable to store the interval ID

// Function to update the slider
function updateSlider() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentSlide) {
      slide.classList.add('active');
    }
  });
}

// Function to move to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
}

// Function to move to the previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
}

// Event listener for the next button
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide(); // Reset the timer after manual interaction
});

// Event listener for the previous button
prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide(); // Reset the timer after manual interaction
});

// Function to start automatic sliding
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 3 seconds
}

// Function to stop automatic sliding
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Function to reset the auto-slide timer
function resetAutoSlide() {
  stopAutoSlide(); // Stop the current interval
  startAutoSlide(); // Restart the interval
}

// Initialize the slider and start automatic sliding
updateSlider();
startAutoSlide();

// Optional: Pause automatic sliding on hover (for better UX)
const slider = document.querySelector('.slider');
slider.addEventListener('mouseenter', stopAutoSlide); // Stop auto-slide when hovering
slider.addEventListener('mouseleave', startAutoSlide); // Resume auto-slide when not hovering