import { createProject } from "./project";
import { addProjectButton } from "./projectButton";
import { displayProjectButton } from "./displayProjectButton";



function createProjectForm(display, projects){
    const form = document.createElement('form');
    form.id = 'form';
    display.appendChild(form);

    const formHeading = document.createElement('h2');
    formHeading.textContent = 'Add Project';
    form.appendChild(formHeading);

    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'project name';
    
    const nameContainer = document.createElement('div');
    nameContainer.appendChild(nameLabel);
    form.appendChild(nameContainer);

    const name = document.createElement('input');
    name.id = 'name';
    name.setAttribute('type', 'text');
    name.setAttribute('name', 'name');
    name.setAttribute('required', 'required');
    nameContainer.appendChild(name);

    const descriptionContainer = document.createElement('div');
    form.appendChild(descriptionContainer);

    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'description');
    descriptionContainer.appendChild(descriptionLabel);
    descriptionLabel.textContent = 'description';

    const description = document.createElement('input');
    description.id = 'description';
    description.setAttribute('name', 'description');
    descriptionContainer.appendChild(description);

    const dateContainer = document.createElement('div');
    form.appendChild(dateContainer);

    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'date');
    dateContainer.appendChild(dateLabel);
    dateLabel.textContent = 'due date';

    const date = document.createElement('input');
    date.id = 'date';
    date.setAttribute('type', 'date');
    date.setAttribute('name', 'date');
    date.setAttribute('required', 'required');
    dateContainer.appendChild(date);

    const submit = document.createElement('button');
    submit.id = 'submit';
    submit.textContent = 'create project';
    form.appendChild(submit);
    
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        const project = createProject(name.value, description.value, date.value);
        addProjectButton(project);
        displayProjectButton(projects);
        form.reset();
    });
}
export {createProjectForm};