function toGridView() {
    document.getElementById("gridView").style.display = "grid";
    document.getElementById("taskList").style.display = "none";
    document.getElementById("addTask").style.display = "none";
}

function toTaskList() {
    document.getElementById("gridView").style.display = "none";
    document.getElementById("taskList").style.display = "block";
    document.getElementById("addTask").style.display = "none";
}

function toAddTask() {
    document.getElementById("gridView").style.display = "none";
    document.getElementById("taskList").style.display = "none";
    document.getElementById("addTask").style.display = "block";
}

exports.toGridView = toGridView;
exports.toTaskList = toTaskList;
exports.toAddTask = toAddTask;