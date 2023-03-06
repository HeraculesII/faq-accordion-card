const faqBox = document.querySelectorAll ('.faq-box');


for(let i = 0 ; i < faqBox.length; i++) {
  faqBox[i].addEventListener('click', function (event) {
    let currentDiv = event.currentTarget;
    const active = document.querySelector ('.answershow');
    currentDiv.classList.toggle ('answershow');
    active?.classList.remove('answershow');
  });
}