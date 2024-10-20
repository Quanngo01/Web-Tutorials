const panels = document.querySelectorAll(".panel");

panels.forEach((item) => {
  item.addEventListener("click", () => {
    removeActive();
    item.classList.add("active");
  });
});

function removeActive() {
  panels.forEach((item) => {
    item.classList.remove("active");
  });
}

const prog = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const steps = document.querySelectorAll(".step");

let currentActive = 1;

next.addEventListener("click", () => {
  changeStep(1);
});
prev.addEventListener("click", () => {
  changeStep(-1);
});

function changeStep(step) {
  currentActive += step;
  update();
}
function update() {
  steps.forEach((step, idx) => {
    if (idx < currentActive) {
      step.classList.add("active");
    } else step.classList.remove("active");
  });

  prev.disabled = currentActive == 1;
  next.disabled = currentActive == steps.length;
  prog.style.width = ((currentActive - 1) / (steps.length - 1)) * 100 + "%";
}

const search = document.querySelector(".search");
const btn = document.querySelector(".search-btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
