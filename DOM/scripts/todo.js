document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const todoList = document.querySelector("#todo");
    const todoItem = document.querySelector("#todo-item");

    const li = document.createElement("li");
    li.textContent = todoItem.value;
    todoList.appendChild(li);

    todoItem.value = "";
  });
});
