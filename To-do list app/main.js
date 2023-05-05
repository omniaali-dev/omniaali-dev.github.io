let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");
let arrayOfTasks = [];
if (localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}
// Trigger Get Data From Local Storage Function
getDataFromLocalStorage();
// function to put tasks into array
submit.onclick = function () {
  if (input.value !== "") {
    addTasksToArray(input.value);
    input.value = "";
  }
};
//click on task element
tasksDiv.addEventListener("click", (e) => {
  //check if it is del butoon
  if (e.target.classList.contains("del")) {
    //remove elemnt from local storage
    deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
    // Remove element from page
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains("task")) {
    toggleStatusTaskWith(e.target.getAttribute("data-id"));
    // Toggle done class
    e.target.classList.toggle("done");
  }
});

function addTasksToArray(taskText) {
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };
  // push tasks to array of tasks
  arrayOfTasks.push(task);
  //add elements to page
  addElementToPageFrom(arrayOfTasks);
  addTasksToLocalStorageFrom(arrayOfTasks);
}
function addElementToPageFrom(arrayOfTasks) {
  tasksDiv.innerHTML = "";
  arrayOfTasks.forEach((task) => {
    //create main div
    let div = document.createElement("div");
    div.className = "task";
    if (task.completed) {
      div.className = "task done";
    }
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    // create delete button
    let span = document.createElement("input");
    span.className = "del";
    span.type = "checkbox";
    //append del
    div.appendChild(span);
    // add task div to tasks conatiner
    tasksDiv.appendChild(div);
  });
}
function addTasksToLocalStorageFrom(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}
function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addElementToPageFrom(tasks);
  }
}
function deleteTaskWith(taskId) {
  // I just want to get all the ids except the id for the element that I clicked its del button
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  addTasksToLocalStorageFrom(arrayOfTasks);
}
function toggleStatusTaskWith(taskId) {
  for (let i = 0; i < arrayOfTasks.length; i++) {
    if (arrayOfTasks[i].id == taskId) {
      arrayOfTasks[i].completed == false
        ? (arrayOfTasks[i].completed = true)
        : (arrayOfTasks[i].completed = false);
    }
  }
  addTasksToLocalStorageFrom(arrayOfTasks);
}
document.querySelector(".delete").onclick = function () {
  tasksDiv.innerHTML = "";
  window.localStorage.removeItem("tasks");
};
