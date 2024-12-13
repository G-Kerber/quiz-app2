const checkbox = document.querySelector('[data-js="darkmode-input"]');

checkbox.addEventListener("input", (event) => {
  document.body.classList.toggle("dark-mode");
});
