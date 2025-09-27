const body = document.body;
const checkbox = document.getElementById("checkboxInput");
const loader = document.getElementById("loader");
const content = document.querySelector(".content");
const toggleSwitch = document.querySelector(".toggleSwitch");
const hamburger = document.querySelector(".hamburger");
const menu = document.getElementById("menu");
const burgerCheckbox = hamburger.querySelector("input");

// Loading screen
setTimeout(() => {
  loader.style.display = "none";
  content.classList.remove("hidden");
  toggleSwitch.style.display = "flex";
}, 2000);

// Theme switch
checkbox.addEventListener("change", () => {
  body.classList.toggle("light");
});

// Burger menu
burgerCheckbox.addEventListener("change", () => {
  menu.classList.toggle("active", burgerCheckbox.checked);
});

// Draggable burger
let isDragging = false, offsetX = 0, offsetY = 0;
hamburger.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - hamburger.offsetLeft;
  offsetY = e.clientY - hamburger.offsetTop;
});
document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    hamburger.style.left = `${e.clientX - offsetX}px`;
    hamburger.style.top = `${e.clientY - offsetY}px`;
  }
});
document.addEventListener("mouseup", () => { isDragging = false; });

// Touch support
hamburger.addEventListener("touchstart", (e) => {
  isDragging = true;
  const touch = e.touches[0];
  offsetX = touch.clientX - hamburger.offsetLeft;
  offsetY = touch.clientY - hamburger.offsetTop;
});
document.addEventListener("touchmove", (e) => {
  if (isDragging) {
    const touch = e.touches[0];
    hamburger.style.left = `${touch.clientX - offsetX}px`;
    hamburger.style.top = `${touch.clientY - offsetY}px`;
  }
});
document.addEventListener("touchend", () => { isDragging = false; });
