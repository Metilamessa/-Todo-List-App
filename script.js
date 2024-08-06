document.getElementById("addTaskButton").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value.trim();
  if (taskValue === "") {
    alert("enter a task");
    return;
  }

  const taskList = document.getElementById("task");
  const newTask = document.createElement("li");

  const taskText = document.createElement("span");
  taskText.textContent = taskValue;
  taskText.className = "task-text";

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "edit-button";
  editButton.addEventListener("click", function () {
    const isEditing = editButton.textContent === "Save";
    if (isEditing) {
      taskText.contentEditable = "false";
      editButton.textContent = "Edit";
    } else {
      taskText.contentEditable = "true";
      editButton.textContent = "Save";
    }
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-button";
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(newTask);
  });

  newTask.appendChild(taskText);
  newTask.appendChild(editButton);
  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask);

  editButton.style.backgroundColor = "White";
  editButton.style.color = "Blue";
  editButton.style.fontSize = "16px";
  editButton.style.padding = "10px 20px";

  deleteButton.style.backgroundColor = "White";
  deleteButton.style.color = "Red";
  deleteButton.style.fontSize = "16px";
  edeleteButton.style.padding = "10px 20px";

  taskInput.value = "";
}
