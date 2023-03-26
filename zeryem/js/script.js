var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

 
  // Get the value of the textarea
  var commentText = document.querySelector('#comment-text').value;
  if (commentText.trim() === '') {
    alert('Please enter a comment!!');
    return;
  }
  // Create a new slide with the comment content
  var newSlide = document.createElement('div');
  newSlide.classList.add('swiper-slide');
  newSlide.innerHTML = '<div class="comment-text"><p>' + commentText + '</p></div>';

  // Append the new slide to the Swiper slider
  var sliderWrapper = document.querySelector('.swiper-wrapper');
  sliderWrapper.appendChild(newSlide);

  // Update the Swiper instance and go to the last slide
  swiper.update();
  swiper.slideTo(swiper.slides.length - 1);

  // Display the submission hint
  var submissionHint = document.querySelector('.comment-container p');
  submissionHint.style.display = 'block';
});
