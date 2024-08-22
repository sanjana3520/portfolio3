function addTask() {
    const taskInput = document.getElementById('inputTask');
    const dateInput = document.getElementById('inputDate');
    const taskList = document.getElementById('tasklist');

    if (taskInput.value.trim() !== '') {
        const newTask = document.createElement('li');
        const taskText = document.createElement('span');
        const taskDate = document.createElement('span');

        taskText.innerText = taskInput.value;

        // Format the date
        const dateValue = dateInput.value ? new Date(dateInput.value).toLocaleDateString() : 'No date';
        taskDate.innerText = dateValue;
        taskDate.classList.add('task-date');

        const taskButtons = document.createElement('div');
        taskButtons.classList.add('task-buttons');

        const editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.classList.add('edit-btn');
        editButton.onclick = function () {
            const newTaskText = prompt('Edit your task:', taskText.innerText);
            if (newTaskText !== null) {
                taskText.innerText = newTaskText;
            }
            const newDateValue = prompt('Edit date (YYYY-MM-DD):', dateInput.value);
            if (newDateValue !== null) {
                dateInput.value = newDateValue;
                taskDate.innerText = new Date(newDateValue).toLocaleDateString();
            }
        };

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function () {
            taskList.removeChild(newTask);
        };

        taskButtons.appendChild(editButton);
        taskButtons.appendChild(deleteButton);
        newTask.appendChild(taskText);
        newTask.appendChild(taskDate);
        newTask.appendChild(taskButtons);
        taskList.appendChild(newTask);

        taskInput.value = '';
        dateInput.value = '';
    } else {
        alert('Please enter a task.');
    }
}
