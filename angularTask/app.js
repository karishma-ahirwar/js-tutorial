
        // JavaScript code
        document.addEventListener("DOMContentLoaded", function() {
            const taskInput = document.getElementById("task-input");
            const addButton = document.getElementById("add-button");
            const taskList = document.getElementById("task-list");

            addButton.addEventListener("click", function() {
                const taskText = taskInput.value.trim();
                if (taskText !== "") {
                    const taskItem = document.createElement("li");
                    taskItem.classList.add("task-item");
                    taskItem.innerHTML = `
                        <span>${taskText}</span>
                        <div class="task-buttons">
                            <button class="complete-button">Complete</button>
                            <button class="delete-button">Delete</button>
                        </div>
                    `;

                    taskList.appendChild(taskItem);
                    taskInput.value = "";

                    const completeButton = taskItem.querySelector(".complete-button");
                    const deleteButton = taskItem.querySelector(".delete-button");

                    completeButton.addEventListener("click", function() {
                        taskItem.classList.toggle("completed");
                    });

                    deleteButton.addEventListener("click", function() {
                        taskList.removeChild(taskItem);
                    });
                }
            });

            taskInput.addEventListener("keydown", function(event) {
                if (event.key === "Enter") {
                    addButton.click();
                }
            });
        });

        console.log(localStorage.getItem('name', 'kaju'));            