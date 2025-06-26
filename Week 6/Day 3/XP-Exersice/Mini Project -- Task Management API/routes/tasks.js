const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

const tasksFile = path.join(__dirname, '../data/tasks.json');

// Helper function to read tasks
async function readTasks() {
    try {
        const data = await fs.readFile(tasksFile, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            return [];
        }
        throw error;
    }
}

// Helper function to write tasks
async function writeTasks(tasks) {
    await fs.writeFile(tasksFile, JSON.stringify(tasks, null, 2));
}

// GET all tasks
router.get('/', async (req, res, next) => {
    try {
        const tasks = await readTasks();
        res.json({
            success: true,
            data: tasks
        });
    } catch (error) {
        next(error);
    }
});

// GET single task
router.get('/:id', async (req, res, next) => {
    try {
        const tasks = await readTasks();
        const task = tasks.find(t => t.id === parseInt(req.params.id));
        
        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }

        res.json({
            success: true,
            data: task
        });
    } catch (error) {
        next(error);
    }
});

// POST new task
router.post('/', async (req, res, next) => {
    try {
        const { title, description, status } = req.body;

        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: 'Title and description are required'
            });
        }

        const tasks = await readTasks();
        const newTask = {
            id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
            title,
            description,
            status: status || 'pending',
            createdAt: new Date().toISOString()
        };

        tasks.push(newTask);
        await writeTasks(tasks);

        res.status(201).json({
            success: true,
            data: newTask
        });
    } catch (error) {
        next(error);
    }
});

// PUT update task
router.put('/:id', async (req, res, next) => {
    try {
        const { title, description, status } = req.body;
        const tasks = await readTasks();
        const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));

        if (taskIndex === -1) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }

        const updatedTask = {
            ...tasks[taskIndex],
            title: title || tasks[taskIndex].title,
            description: description || tasks[taskIndex].description,
            status: status || tasks[taskIndex].status,
            updatedAt: new Date().toISOString()
        };

        tasks[taskIndex] = updatedTask;
        await writeTasks(tasks);

        res.json({
            success: true,
            data: updatedTask
        });
    } catch (error) {
        next(error);
    }
});

// DELETE task
router.delete('/:id', async (req, res, next) => {
    try {
        const tasks = await readTasks();
        const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));

        if (taskIndex === -1) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }

        tasks.splice(taskIndex, 1);
        await writeTasks(tasks);

        res.json({
            success: true,
            message: 'Task deleted successfully'
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router; 