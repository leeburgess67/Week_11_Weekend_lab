document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const textInput = document.querySelector('#input');
  textInput.addEventListener('input', (todoInput) => {
    const resultParagraph = document.querySelector('#input-result');
    resultParagraph.textContent = todoInput.target.value;
  });

















})
