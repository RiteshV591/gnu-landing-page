var swiper = new Swiper(".swiper-container", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
  },
  slidesPerView: 1,
  spaceBetween: 10,
});

var swiper = new Swiper(".students-swiper", {
  loop: true,
  pagination: {
    el: ".students-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
  },
  slidesPerView: 1,
  spaceBetween: 10,
});

// First row slider (moves right)
var swiper1 = new Swiper(".swiper-row1", {
  loop: true,
  spaceBetween: 36,
  slidesPerView: 10,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 3000,
  freeMode: true,
  freeModeMomentum: true,
  on: {
    slideChange: function () {
      swiper.update();
    },
  },
});

// Second row slider (moves left)
var swiper2 = new Swiper(".swiper-row2", {
  loop: true,
  spaceBetween: 36,
  slidesPerView: 10,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  speed: 3000,
  freeMode: true,
  freeModeMomentum: true,
  on: {
    slideChange: function () {
      swiper.update();
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const programTypes = document.querySelectorAll(".program-type");
  const featureContents = document.querySelectorAll(".feature-content");

  // Function to show the corresponding feature content based on program type clicked
  programTypes.forEach((program) => {
    program.addEventListener("click", function (event) {
      event.preventDefault();

      // Remove the active class from all program types
      programTypes.forEach((p) => p.classList.remove("program-type-active"));

      // Add the active class to the clicked program type
      this.classList.add("program-type-active");

      // Get the program type clicked
      const selectedType = this.getAttribute("data-type");

      // Hide all feature contents
      featureContents.forEach((content) => (content.style.display = "none"));

      // Show the content that matches the selected program type
      document.querySelector(
        `.feature-content[data-type="${selectedType}"]`
      ).style.display = "block";
    });
  });
});
