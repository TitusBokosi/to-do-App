

export function logProject(project, display){
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
    projectDueDate.textContent = project.date;
    projectContainer.appendChild(projectDueDate);

}