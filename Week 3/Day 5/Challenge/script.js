let tasks = [];
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const listTasks = document.querySelector('.listTasks');
const clearBtn = document.getElementById('clearBtn');

// Load tasks from localStorage
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    tasks = savedTasks ? JSON.parse(savedTasks) : [];
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Initialize the app
function init() {
    loadTasks();
    tasks.forEach(task => renderTask(task));
}

taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    addTask();
});

clearBtn.addEventListener('click', function() {
    if (confirm('Are you sure you want to clear all tasks?')) {
        listTasks.innerHTML = '';
        tasks.length = 0;
        saveTasks();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        showError('Task cannot be empty!');
        return;
    }
    if (taskText.length > 100) {
        showError('Task is too long! Maximum 100 characters.');
        return;
    }

    const task = {
        task_id: Date.now(), // Using timestamp for unique IDs
        text: taskText,
        done: false,
        created_at: new Date().toISOString()
    };

    tasks.push(task);
    saveTasks();
    renderTask(task);
    taskInput.value = '';
}

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-2';
    errorDiv.role = 'alert';
    errorDiv.textContent = message;
    
    taskForm.appendChild(errorDiv);
    setTimeout(() => errorDiv.remove(), 3000);
}

function renderTask(task) {
    const taskItem = document.createElement('div');
    taskItem.className = 'flex items-center py-2 px-4 border-b border-gray-200';
    taskItem.setAttribute('data-task-id', task.task_id);
    taskItem.setAttribute('role', 'listitem');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'mr-3 h-4 w-4 text-green-500 rounded focus:ring-green-500';
    checkbox.checked = task.done;
    checkbox.setAttribute('aria-label', `Mark "${task.text}" as ${task.done ? 'incomplete' : 'complete'}`);
    checkbox.addEventListener('change', function() {
        doneTask(task.task_id, this.checked);
    });

    const label = document.createElement('label');
    label.className = 'flex-grow mr-3' + (task.done ? ' line-through text-red-500' : '');
    label.textContent = task.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'text-red-500 hover:text-red-700 focus:outline-none';
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    deleteBtn.setAttribute('aria-label', `Delete task "${task.text}"`);
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
        saveTasks();
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
        saveTasks();
        const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
        if (taskElement) {
            taskElement.remove();
        }
    }
}

// Initialize the app when the page loads
init();