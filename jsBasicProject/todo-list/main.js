const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTodo() {
    if (inputBox.value === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        savaData();
       
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savaData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savaData();
    }
}, false)


function savaData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showData()