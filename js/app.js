// When DOM loaded, do everything below
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  //Target the form using the ID and assign it to form variable
  const form = document.querySelector("#new-item-form")

  // Create a ul and assign to variable
  const toDoList = document.createElement("ul")

  // Save the location you want the item to go to a variable. #todo-list is the ID of the div at the bottom of the page
  const toDoDiv = document.querySelector("#todo-list")

  // Append the child (ul = toDoList) to the parent (the div - toDoDiv)
  toDoDiv.appendChild(toDoList);

  // Add addEventListener to the form, when form is submitted, do the callback function
  form.addEventListener('submit', (event) => {

  // Prevent the default activity (in this case submit as it is a form)
  event.preventDefault();

  // Assign the input form values to a variable - what, who and when are the input IDs in the form
  const whatToDo = event.target.what.value;
  const whoToDo = event.target.who.value;
  const whenToDo = event.target.when.value;

  //Create a new li element and assign to variable
  const toDoItem = document.createElement("td");

  // Define the toDoItem text content using the variables set above
  toDoItem.textContent = `What: ${whatToDo}, Who: ${whoToDo}, When: ${whenToDo}`

  // Append the todo item (li) item to the list (ul)
  toDoList.appendChild(toDoItem);

  //Resets the form after each input
  form.reset();

  // Make a delete button
  const deleteButton = document.querySelector("#button");

  // Listen for the click
  deleteButton.addEventListener("click", () => {
    toDoList.innerHTML = '';

    const whoTable = document.querySelector('#who-table')
    const whatTable = document.querySelector('#what-table')
    const whenTable = document.querySelector('#when-table')
    
});

});
  });
