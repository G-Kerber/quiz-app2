const form = document.querySelector('[data-js="form"]');

const questionInput = document.querySelector('[data-js="questionInput"]');
const answerInput = document.querySelector('[data-js="answerInput"]');
const questionInputCounter = document.querySelector(
  '[data-js="questionInputCounter"]'
);
const answerInputCounter = document.querySelector(
  '[data-js="answerInputCounter"]'
);
const questionInputLengthMax = questionInput.getAttribute("maxlength");
const answerInputLengthMax = answerInput.getAttribute("maxlength");
questionInputCounter.textContent = questionInputLengthMax + " character left";
answerInputCounter.textContent = answerInputLengthMax + " character left";

function calculateCharacterLeft(InputLength, InputLengthMax) {
  let CharacterLeft = InputLengthMax - InputLength + " character left";
  return CharacterLeft;
}

questionInput.addEventListener("input", (event) => {
  event.preventDefault();
  let InputLength = event.target.value.length;
  let InputLengthMax = questionInputLengthMax;
  questionInputCounter.textContent = calculateCharacterLeft(
    InputLength,
    InputLengthMax
  );
});

answerInput.addEventListener("input", (event) => {
  event.preventDefault();
  let InputLength = event.target.value.length;
  let InputLengthMax = answerInputLengthMax;
  answerInputCounter.textContent = calculateCharacterLeft(
    InputLength,
    InputLengthMax
  );
});

function createNewCard(data) {
  const main = document.querySelector("main");
  const ul0 = document.createElement("ul");
  const li0 = document.createElement("li");
  const article = document.createElement("article");
  const button = document.createElement("button");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const div = document.createElement("div");
  const bookmark = document.createElement("button");
  bookmark.innerHTML = `<svg
                    class="bookmark__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewbox="0 0 24 24">
                    <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
                  </svg>`;

  const question = data.yourQuestion;
  const answer = data.yourAnswer;
  const tag = data.questionTag;
  const buttonLabel = "Hide answer";

  //create article
  main.append(article);
  // main.append(ul0);
  // ul0.classList.add("card-list");
  // ul0.append(li0);
  // li0.classList.add("class-list__item");
  // li0.append(article);
  article.classList.add("card");

  //create article.h2
  article.append(h2);
  h2.classList.add("card__question");
  h2.textContent = question;

  //create article.button
  article.append(button);
  button.classList.add("card__button-answer");
  button.setAttribute("type", "button");
  button.setAttribute("data-js", "card-button-answer");
  button.textContent = buttonLabel;

  //create article.p
  article.append(p);
  p.classList.add("card__answer", "card__answer--active");
  p.setAttribute("data-js", "card-answer");
  p.textContent = answer;

  //create article.ul
  article.append(ul);
  ul.classList.add("card__tag-list");

  //create article.ul.li
  ul.append(li);
  li.classList.add("card__tag-list-item");
  li.textContent = tag;

  //create article.div
  article.append(div);
  div.classList.add("card__button-bookmark");

  //create article.div.bookmark
  div.append(bookmark);
  bookmark.classList.add("bookmark");
  bookmark.setAttribute("aria-label", "bookmark");
  bookmark.setAttribute("type", "button");
  bookmark.setAttribute("data-js", "bookmark");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  createNewCard(data);

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
});
