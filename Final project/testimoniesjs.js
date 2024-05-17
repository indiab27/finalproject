// Arrays of images and casual yet detailed reviews for the first set of testimonials
const images = [
  "user_1.jpg",
  "user_2.png",
  "user_3.png",
  "user_4.png",
];
const text = [
  "Astrid Swift: 'This gym is fantastic! The 24/7 access is perfect for my late-night workouts after quests.'",
  "Thaddeus Blackwood: 'I've never felt more motivated than at Gym Mania. The trainers are top-notch.'",
  "Sylas Ironfist: 'Been here for months now. The community and equipment here are unbeatable.'",
  "Elena Moonshadow: 'Love the variety of classes! I've improved so much since joining this gym.'",
];

// Arrays of images and casual yet detailed reviews for the second set of testimonials
const imagesTestimony2 = [
  "user_5.png",
  "user_6.png",
  "user_7.png",
  "user_8.png",
];
const textTestimony2 = [
  "Finnegan Thorne: 'I've tried many gyms, but none compare to Gym Mania. It's truly exceptional.'",
  "Cassius Emberfall: 'Since joining, I've seen incredible progress. The facilities are top-notch.'",
  "Aurelia Stormblade: 'Love the diversity of workouts available. It keeps things interesting and effective.'",
  "Xander Starfall: 'The staff here genuinely cares about your fitness journey. It's motivating and inspiring.'",
];

// Variables for tracking current slides
let currentSlide = 0;
let currentSlideTestimony2 = 0;

// Function to change the slide for the first set of testimonials
function changeSlide() {
  const img = document.getElementById("testimonial-img-1");
  const textElement = document.getElementById("testimonial-text-1");

  img.src = images[currentSlide];
  textElement.innerHTML = `<em>${text[currentSlide]}</em>`; // Set the new text

  currentSlide = (currentSlide + 1) % images.length; // Increment slide index
}

// Function to change the slide for the second set of testimonials
function changeSlideTestimony2() {
  const img = document.getElementById("testimonial-img-2");
  const textElement = document.getElementById("testimonial-text-2");

  img.src = imagesTestimony2[currentSlideTestimony2];
  textElement.innerHTML = `<em>${textTestimony2[currentSlideTestimony2]}</em>`; // Set the new text

  currentSlideTestimony2 = (currentSlideTestimony2 + 1) % imagesTestimony2.length; // Increment slide index
}

// Start the slideshow for the first set of testimonials with an interval
setInterval(changeSlide, 4000); // Change slide every 4 seconds

// Start the slideshow for the second set of testimonials with an interval
setInterval(changeSlideTestimony2, 5000); // Change slide every 5 seconds
