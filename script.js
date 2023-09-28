// example from rampup demo
function myFunction() {
    alert("This is the correct way to do js ☺️ 😊🥰👉👈");
  }

// if user tries to input an empty task :'(
function emptyTask() {
    userInput = document.getElementById("input-box");
    if (userInput.value.length == 0) {
        alert("please don't put an empty task 🙈");
    }
}

const addedTask = document.getElementById("input-box");
const taskList = document.getElementById("submitted");
const submitButton = document.getElementById("add-button");


submitButton.addEventListener("click", () => {
  if (addedTask.value.length > 0) {
      const task = document.createElement("li"); // creates a li element
      task.textContent = addedTask.value; // the li element is whatever was inputted in input-box
      taskList.appendChild(task); // adds task to the list created
      addedTask.value = ""; // clearing input field
  }
});


const clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", () => {
  taskList.replaceChildren(); // clears the list
  addedTask.value = "";
});
