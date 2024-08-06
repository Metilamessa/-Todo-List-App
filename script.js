document.getElementById("addTaskButton").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value.trim();
  if (taskValue === "") {
    alert("enter a task");
    return;
  }

  const task = document.getElementById("task");
  const newTask = document.createElement("li");
  newTask.textContent = taskValue;
  newTask.addEventListener("click", function () {
    task.removeChild(newTask);
  });

  task.appendChild(newTask);
  taskInput.value = "";
}
