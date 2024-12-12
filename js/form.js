const form = document.querySelector('[data-js="form"]');

const questionInput = document.querySelector('[data-js="questionInput"]');
const answerInput = document.querySelector('[data-js="answerInput"]');
const questionInputCounter = document.querySelector(
  '[data-js="questionInputCounter"]'
);
const answerInputCounter = document.querySelector(
  '[data-js="answerInputCounter"]'
);
const questionInputLengthMax = 150;
const answerInputLengthMax = 150;
questionInputCounter.textContent = questionInputLengthMax + " character left";
answerInputCounter.textContent = answerInputLengthMax + " character left";

function calculateCharacterLeft(InputLength, InputLengthMax) {
  return InputLengthMax - InputLength + " character left";
}

questionInput.addEventListener("input", (event) => {
  event.preventDefault();
  let questionInputLength = event.target.value.length;
  let InputLengthMax = questionInputLengthMax;
  let InputLength = questionInputLength;
  questionInputCounter.textContent = calculateCharacterLeft(
    InputLength,
    InputLengthMax
  );
});

answerInput.addEventListener("input", (event) => {
  event.preventDefault();
  let answerInputLength = event.target.value.length;
  let InputLengthMax = answerInputLengthMax;
  let InputLength = answerInputLength;
  answerInputCounter.textContent = calculateCharacterLeft(
    InputLength,
    InputLengthMax
  );
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
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
  console.log(question);
  console.log(tag);

  document.body.append(article);
  article.classList.add("card");

  article.append(h2);
  h2.classList.add("card__question");
  h2.textContent = question;

  article.append(button);
  button.classList.add("card__button-answer");
  button.setAttribute("type", "button");
  button.setAttribute("data-js", "card-button-answer");
  button.textContent = buttonLabel;

  article.append(p);
  p.classList.add("card__answer", "card__answer--active");
  p.textContent = answer;

  article.append(ul);
  ul.classList.add("card__tag-list");

  ul.append(li);
  li.classList.add("card__tag-list-item");
  li.textContent = tag;

  article.append(div);
  div.classList.add("card__button-bookmark");

  div.append(bookmark);
  bookmark.classList.add("bookmark");
  bookmark.setAttribute("aria-label", "bookmark");
  bookmark.setAttribute("type", "button");
  bookmark.setAttribute("data-js", "bookmark");
});
