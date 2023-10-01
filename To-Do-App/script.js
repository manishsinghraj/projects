const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask() {
    if (inputBox.value === '') {
        alert("you must type something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        //Add cross icon at the end of list
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = '';
    saveData();
}

//Make task checked,unchecked Or remove the Li Task
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showSavedTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showSavedTask();