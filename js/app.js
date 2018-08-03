document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-item-form")
  const toDoList = document.createElement("ul")
  const toDoDiv = document.querySelector("#todo-list")
  toDoDiv.appendChild(toDoList);


  form.addEventListener('submit' (event) => {
  event.preventDefault();


  const whatToDo = event.target.what.value;
  const whoToDo = event.target.who.value;
  const whenToDo = event.target.when.value;

  const toDoItem = document.createElement("li");

  toDoItem.textContent = `${whatToDo}, ${whoToDo}, ${whenToDo}`
  toDoList.appendChild(toDoItem)


})
  });























})
