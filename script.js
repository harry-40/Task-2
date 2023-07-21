const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const dateElement = document.getElementById("date");

function addTask() {
    if (inputBox.value === "") {
        alert("please write something here");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

inputBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

listContainer.addEventListener(
    "click",
    function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    },
    false
);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

function getCurrentDate() {
    const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    };
    const today = new Date();
    dateElement.innerHTML = today.toLocaleDateString("en-US", options);
}

getCurrentDate();