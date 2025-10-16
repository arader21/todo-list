import "./styles.css";

const myTasks = []

function task(title, day, duration, description) {
    this.title = title;
    this.day = day;
    this.duration = duration;
    this.description = description;
}

const addTask = document.querySelector("#addTask");
    addTask.addEventListener("click", function() {
    let addTaskForm = document.querySelector("#new-task-form");
    addTaskForm.style.display = "grid";
    addTaskForm.style.gap = "1em";
    })

document.querySelector("#new-task-form").addEventListener("submit", function(event) {
    let title = document.querySelector("#title").value;
    let day = document.querySelector("#day").value;
    let duration = document.querySelector("#duration").value;
    let description = document.querySelector("#description").value;
    let newTasks = new task ((title) + ("/") + (day) + ("/") + (duration) + ("/") + (description))
    const newDiv = document.createElement("div");
    newDiv.innerHTML = (newTasks.textcontent);
    document.body.appendChild(newDiv);
    event.preventDefault();
    console.log(newTasks);
})

document.querySelector("#clear-btn").addEventListener("click", function() {
    title.value = "";
    day.value = "";
    duration.value = "";
    description.value = "";
})

