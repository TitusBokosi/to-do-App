import { projectArray } from "./projectButton";
import { displayProjectButton } from "./displayProjectButton";
import { toDoForm } from "./toDo.Form";

export function logProject(project, display, projects){
    display.innerHTML = '';
    const projectContainer = document.createElement('div');
    projectContainer.id = 'project-container';
    display.appendChild(projectContainer);

    const projectHeading = document.createElement('h2');
    projectHeading.textContent = project.name;
    projectContainer.appendChild(projectHeading);

    const projectDescription = document.createElement('p');
    projectDescription.textContent = project.description;
    projectContainer.appendChild(projectDescription);

    const projectDueDate = document.createElement('p');
    projectDueDate.textContent = project.dueDate;
    projectContainer.appendChild(projectDueDate);

    const toDoContainer = document.createElement('div');
    projectContainer.appendChild(toDoContainer);

    const actionButtons = document.createElement('div');
    actionButtons.id = 'action-buttons';
    projectContainer.appendChild(actionButtons);

    const deleteButton = document.createElement('button');
    deleteButton.id = 'delete-button';
    deleteButton.textContent = 'delete';
    deleteButton.style.backgroundColor = 'red';
    deleteButton.style.color = 'white';

    const addToDoItemButton = document.createElement('button');
    addToDoItemButton.id = 'add-todo-item-button';
    addToDoItemButton.textContent = 'add todo item';
    actionButtons.appendChild(addToDoItemButton);
    actionButtons.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        projectArray.splice(projectArray.indexOf(project), 1);
        display.innerHTML = '';
        displayProjectButton(projects, display);

    });

    addToDoItemButton.addEventListener('click', () => {
        toDoForm(project, toDoContainer);
    });

}