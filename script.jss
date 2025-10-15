function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById('taskList');

    // Create a new list item (li)
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="removeTask(this)">X</button>
    `;

    // Add the new item to the list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
}

function removeTask(buttonElement) {
    // 'buttonElement.parentNode' refers to the <li> element
    const listItem = buttonElement.parentNode;
    listItem.remove();
}