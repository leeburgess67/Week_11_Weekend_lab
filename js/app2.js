
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    //Assign Variables from form input ids
    const what = event.target.what.value;
    const who = event.target.who.value;
    const when = event.target.when.value;

    //Create new ul item and assign to variable
    const newListItem = document.createElement('ul')

    //Create new li items and assign to variables
    const newWhatItem = document.createElement("li");
    const newWhoItem = document.createElement("li");
    const newWhenItem = document.createElement("li");

    //Assign values to the new items created
    newWhatItem.textContent = `What: ${what}`;
    newWhoItem.textContent = `Who: ${who}`;
    newWhenItem.textContent = `When: ${when}`;

    //Append new li items created to parent ul
    newListItem.appendChild(newWhatItem);
    newListItem.appendChild(newWhoItem);
    newListItem.appendChild(newWhenItem);


    const toDoList = document.querySelector('#todo-list')
    toDoList.appendChild(newListItem);

    form.reset();
  });

  // Make a delete button
  const deleteButton = document.querySelector("#button");

  // Listen for the click
  deleteButton.addEventListener("click", () => {
    toDoList.innerHTML = '';
  });

});
