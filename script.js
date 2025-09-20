const pages = document.querySelectorAll(".page");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const dotsContainer = document.querySelector(".dots");

let current = 0;
const delay = 5000;
let interval;

// Create dots
pages.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    current = i;
    showPage(current);
    resetInterval();
  });
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dot");

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.remove("active");
    dots[i].classList.remove("active");
    if (i === index) {
      page.classList.add("active");
      dots[i].classList.add("active");
    }
  });
}

// Next & Prev
nextBtn.addEventListener("click", () => {
  current = (current + 1) % pages.length;
  showPage(current);
  resetInterval();
});

prevBtn.addEventListener("click", () => {
  current = (current - 1 + pages.length) % pages.length;
  showPage(current);
  resetInterval();
});

// Auto change
function startInterval() {
  interval = setInterval(() => {
    current = (current + 1) % pages.length;
    showPage(current);
  }, delay);
}

function resetInterval() {
  clearInterval(interval);
  startInterval();
}

startInterval();

// Form demo
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for contacting me! (Demo only)");
});
