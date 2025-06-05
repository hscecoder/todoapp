function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const existingTasks = document.querySelectorAll("#taskList li");
    for (let task of existingTasks) {
        const text = task.firstChild.textContent.trim().toLowerCase();
        if (text === taskText.toLowerCase()) {
            alert("This task already exists!");
            return;
        }
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "❌";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}