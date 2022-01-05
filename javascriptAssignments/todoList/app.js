let taskTextBox = document.getElementById("taskTextBox");
let btnAdd = document.getElementById("btnAdd");
let pendingTasks = document.getElementById("pendingTasks");
let completedTasks = document.getElementById("completedTasks");
const draggables = document.querySelectorAll(".draggable");
const container = document.querySelectorAll(".container");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragstart", () => {
    draggable.classList.remove("dragging");
  });
});

container.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector(".dragging");
    console.log(draggable);
    if (afterElement == null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });
});

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

btnAdd.addEventListener("click", function () {
  let task = taskTextBox.value;

  let checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");

  let taskLi = document.createElement("li");

  let removeBtn = document.createElement("button");
  removeBtn.innerHTML = "Remove";

  removeBtn.addEventListener("click", function () {
    pendingTasks.removeChild(this.parentElement);
  });

  removeBtn.addEventListener("click", function () {
    completedTasks.removeChild(this.parentElement);
  });

  checkBox.addEventListener("change", function () {
    if (this.checked) {
      completedTasks.appendChild(taskLi);
    } else {
      pendingTasks.appendChild(taskLi);
    }
  });

  let labelItem = document.createElement("p");
  labelItem.innerHTML = task;

  taskLi.setAttribute("class", "draggable");
  taskLi.setAttribute("draggable", "true");

  pendingTasks.appendChild(taskLi);
  taskLi.appendChild(checkBox);
  taskLi.appendChild(labelItem);
  taskLi.appendChild(removeBtn);
});
