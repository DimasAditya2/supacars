let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll("#slider > div");
  const slider = document.getElementById("slider");

  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  const offset = -currentSlide * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

const circles = document.querySelectorAll(".circle");
let activeCircle = null;

circles.forEach((circle) => {
  circle.addEventListener("click", function () {
    if (activeCircle === this) {
      this.classList.remove("border-2", "border-slate-50");
      activeCircle = null;
    } else {
      if (activeCircle) {
        activeCircle.classList.remove("border-2", "border-slate-50");
      }

      this.classList.add("border-2", "border-slate-50");
      activeCircle = this;
    }
  });
});
