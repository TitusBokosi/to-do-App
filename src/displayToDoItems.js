import { deleteToDoItem } from "./deleteToDo";

export function displayToDoItems(project, display){
    project.toDo.forEach(element => {
        const toDoContainer = document.createElement('div');
        display.appendChild(toDoContainer);

        const toDoHeader = document.createElement('div');
        toDoContainer.appendChild(toDoHeader);

        const toDoHeading = document.createElement('h2');
        toDoHeading.textContent = element.name;
        toDoHeader.appendChild(toDoHeading);

        const toDoDeleteButton = document.createElement('button');
        toDoDeleteButton.id = 'to-do-delete-button';
        toDoDeleteButton.textContent = 'delete';
        toDoHeader.appendChild(toDoDeleteButton);
        toDoDeleteButton.style.backgroundColor = 'red';
        toDoDeleteButton.style.color = 'white';

        const toDoContent = document.createElement('div');
        toDoContainer.appendChild(toDoContent);

        const toDoDescription = document.createElement('p');
        toDoDescription.textContent = element.description;
        toDoContent.appendChild(toDoDescription);

        const toDoDueDate = document.createElement('p');
        toDoDueDate.textContent = element.dueDate;
        toDoContent.appendChild(toDoDueDate);

        const toDoDueTime = document.createElement('p');
        toDoDueTime.textContent = element.dueTime;
        toDoContent.appendChild(toDoDueTime);

        toDoDeleteButton.addEventListener('click', () => {
            deleteToDoItem(project, element, display);
        })

        
    });
}