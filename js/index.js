// phew… not a lot going on here. Please add some code!

const bookmarkButton = document.querySelector('[data-js="bookmark"]');
const cardAnswerButton = document.querySelector(
  '[data-js="card-button-answer"]'
);
const cardAnswer = document.querySelector('[data-js="card-answer"]');

// set bookamrk
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

// show answer
cardAnswerButton.addEventListener("click", () => {
  const partvar = cardAnswerButton.textContent;
  if (partvar === "Hide answer") {
    cardAnswerButton.textContent = "Show answer";
  } else {
    cardAnswerButton.textContent = "Hide answer";
  }
  cardAnswer.classList.toggle("card__answer--active");
});
