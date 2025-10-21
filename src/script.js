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
    if(addTaskForm.style.display === 'none') {
        addTaskForm.style.display = "grid";
        addTaskForm.style.gap = "1em";
    } else {
        addTaskForm.style.display = 'none';
        addTaskForm.style.gap = 'none';
    }
    })

document.querySelector("#new-task-form").addEventListener("submit", function(event) {
    let title = document.querySelector("#title").value;
    let day = document.querySelector("#day").value;
    let duration = document.querySelector("#duration").value;
    let description = document.querySelector("#description").value;
    let newTasks = ((title) + ("/") + (day) + ("/") + (duration) + ("/") + (description))
    const newDiv = document.createElement("div");
    newDiv.innerHTML = (newTasks);
    list.appendChild((newDiv));
    event.preventDefault();
    console.log(newTasks);
})

document.querySelector("#clear-btn").addEventListener("click", function() {
    title.value = "";
    day.value = "";
    duration.value = "";
    description.value = "";
})
document.querySelector('#clear-screen-btn').addEventListener('click', function() {
    const list = document.querySelector("#list");
    list.textContent = "";
})
