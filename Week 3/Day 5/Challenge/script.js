const tasks = [];
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const listTasks = document.querySelector('.listTasks');
const clearBtn = document.getElementById('clearBtn');

taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    addTask();
});

clearBtn.addEventListener('click', function() {
    listTasks.innerHTML = '';
    tasks.length = 0;
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const task = {
        task_id: tasks.length,
        text: taskText,
        done: false
    };

    tasks.push(task);
    renderTask(task);
    taskInput.value = '';
}

function renderTask(task) {
    const taskItem = document.createElement('div');
    taskItem.className = 'flex items-center py-2 px-4 border-b border-gray-200';
    taskItem.setAttribute('data-task-id', task.task_id);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'mr-3 h-4 w-4 text-green-500 rounded focus:ring-green-500';
    checkbox.checked = task.done;
    checkbox.addEventListener('change', function() {
        doneTask(task.task_id, this.checked);
    });

    const label = document.createElement('label');
    label.className = 'flex-grow mr-3' + (task.done ? ' line-through text-red-500' : '');
    label.textContent = task.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'text-red-500 hover:text-red-700 focus:outline-none';
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    deleteBtn.addEventListener('click', function() {
        deleteTask(task.task_id);
    });

    taskItem.appendChild(checkbox);
    taskItem.appendChild(label);
    taskItem.appendChild(deleteBtn);
    listTasks.appendChild(taskItem);
}

function doneTask(taskId, isDone) {
    const task = tasks.find(t => t.task_id === taskId);
    if (task) {
        task.done = isDone;
        const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
        if (taskElement) {
            const label = taskElement.querySelector('label');
            if (isDone) {
                label.classList.add('line-through', 'text-red-500');
            } else {
                label.classList.remove('line-through', 'text-red-500');
            }
        }
    }
}

function deleteTask(taskId) {
    const taskIndex = tasks.findIndex(t => t.task_id === taskId);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
        if (taskElement) {
            taskElement.remove();
        }
    }
}