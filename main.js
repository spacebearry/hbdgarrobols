window.onload = function () {
  const card = document.querySelector(".card__inner");
  const button = document.getElementById('start');
  const question = document.getElementsByClassName('header')[0];
  const backheader = document.getElementsByClassName('question')[0];
  const container = document.getElementsByClassName('container')[0];

  let counter = 0;
  let initialfront = document.getElementsByClassName('card__face--front')[0];
  let initialBack = document.getElementsByClassName('card__face--back')[0];

  button.onclick = () => {
    checkToggle(card);
    counter++;

    if (counter == 1) {
      flipColor();
    }

    if (counter <= window.dataArray.length) {
      const currentQuestion = window.dataArray[counter - 1].question;
      question.innerHTML = currentQuestion;
    } else {
      displayLetterMessage();
    }
  };

  function checkToggle(element) {
    if (element.classList.toggle('is-flipped')) {
      element.classList.remove('is-flipped');
    }
  }

  function flipColor() {
    initialfront.style.backgroundColor = "#F7F6F9";
    question.style.color = "#c10016";
    initialBack.style.backgroundColor = "#c10016";
    backheader.style.color = "#F7F6F9";
    button.innerHTML = "NEXT";
  }

  function displayLetterMessage() {
    container.innerHTML = '';
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = window.letterContent;
    container.appendChild(messageElement);
  }

  card.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
  });
};
