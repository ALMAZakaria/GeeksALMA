export class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({
            id: Date.now(),
            text: task,
            completed: false
        });
        console.log(`Task added: ${task}`);
    }

    markAsComplete(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = true;
            console.log(`Task marked as complete: ${task.text}`);
        } else {
            console.log('Task not found');
        }
    }

    listTasks() {
        console.log('\nCurrent Tasks:');
        this.tasks.forEach(task => {
            console.log(`[${task.completed ? 'X' : ' '}] ${task.text} (ID: ${task.id})`);
        });
    }
} 