const form = document.getElementById("form");
const tableBody = document.getElementById("tableBody");
const noTask = document.getElementById("noTask");
const table = document.getElementById("table");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let editingTaskId = null;

/* ---------- STORAGE ---------- */
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

/* ---------- RENDER ---------- */
function displayTask() {
    tableBody.innerHTML = "";

    if (tasks.length === 0) {
        noTask.hidden = false;
        table.hidden = true;
        return;
    }

    noTask.hidden = true;
    table.hidden = false;

    tasks.forEach(task => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${task.id}</td>
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td>${task.status ? "Completed" : "Pending"}</td>
        `;

        const editBtn = document.createElement("button");
        editBtn.className = "edit";
        editBtn.textContent = "Edit";
        editBtn.onclick = () => startEdit(task.id);

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete";
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => removeTask(task.id);

        const actionTd = document.createElement("td");
        actionTd.className = "action";
        actionTd.append(editBtn, deleteBtn);

        row.appendChild(actionTd);
        tableBody.appendChild(row);
    });
}

/* ---------- FORM SUBMIT ---------- */
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const id = document.getElementById("taskId").value.trim();
    const name = document.getElementById("name").value.trim();
    const description = document.getElementById("description").value.trim();
    const status = document.getElementById("status").checked;

    if (!id || !name || !description) return;

    const taskData = { id, name, description, status };

    if (editingTaskId) {
        updateTask(taskData);
    } else {
        addTask(taskData);
    }

    saveTasks();
    displayTask();
    resetForm();
});

/* ---------- DATA OPERATIONS ---------- */
function addTask(task) {
    if (tasks.some(t => t.id === task.id)) {
        alert("Task with this ID already exists");
        return;
    }
    tasks.push(task);
}

function updateTask(updatedTask) {
    tasks = tasks.map(task =>
        task.id === editingTaskId ? updatedTask : task
    );
}

function removeTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    displayTask();
}

/* ---------- EDIT MODE ---------- */
function startEdit(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    editingTaskId = id;

    document.getElementById("taskId").value = task.id;
    document.getElementById("taskId").disabled = true;
    document.getElementById("name").value = task.name;
    document.getElementById("description").value = task.description;
    document.getElementById("status").checked = task.status;
    document.getElementById("submit").value = "Update";
}

/* ---------- RESET ---------- */
function resetForm() {
    form.reset();
    editingTaskId = null;
    document.getElementById("taskId").disabled = false;
    document.getElementById("submit").value = "submit";
}

function resetTasks() {
    tasks = [];
    saveTasks();
    displayTask();
}

/* ---------- INIT ---------- */
displayTask();
 