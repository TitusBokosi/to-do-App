import { projectButton } from "./projectButton";


export function displayProjectButton(projects){
    projectButton.forEach((project) => {
        const projectButton = document.createElement('button');
        projectButton.id = 'project-button';
        projectButton.textContent = project.name;
        projects.appendChild(projectButton);
    });
}