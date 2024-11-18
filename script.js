const intputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(intputBox.value === ''){
        alert("You must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = intputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    intputBox.value = "";
    savedData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedData();
    }
}, false);

function savedData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();