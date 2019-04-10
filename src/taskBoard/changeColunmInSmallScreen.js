function todo() {
    document.getElementById("taskBoard-todoColumn").style.display = "block";
    document.getElementById("taskBoard-inProgressColumn").style.display = "none";
    document.getElementById("taskBoard-reviewColumn").style.display = "none";
    document.getElementById("taskBoard-doneColumn").style.display = "none";
    document.getElementById("taskBoard-dropManu-button").innerText = "To do";
}
function inProgress() {
    document.getElementById("taskBoard-todoColumn").style.display = "none";
    document.getElementById("taskBoard-inProgressColumn").style.display = "block";
    document.getElementById("taskBoard-reviewColumn").style.display = "none";
    document.getElementById("taskBoard-doneColumn").style.display = "none";
    document.getElementById("taskBoard-dropManu-button").innerText = "In Progress";
}
function toReview() {
    document.getElementById("taskBoard-todoColumn").style.display = "none";
    document.getElementById("taskBoard-inProgressColumn").style.display = "none";
    document.getElementById("taskBoard-reviewColumn").style.display = "block";
    document.getElementById("taskBoard-doneColumn").style.display = "none";
    document.getElementById("taskBoard-dropManu-button").innerText = "Review";
}
function toDone() {
    document.getElementById("taskBoard-todoColumn").style.display = "none";
    document.getElementById("taskBoard-inProgressColumn").style.display = "none";
    document.getElementById("taskBoard-reviewColumn").style.display = "none";
    document.getElementById("taskBoard-doneColumn").style.display = "block";
    document.getElementById("taskBoard-dropManu-button").innerText = "Done";
}

exports.toTodo = todo;
exports.toInProgress = inProgress;
exports.toReview = toReview;
exports.toDone = toDone;