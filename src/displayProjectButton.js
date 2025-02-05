import { projectArray } from "./projectButton";
import { logProject } from "./displayProjectContents";


export function displayProjectButton(projects, display){
    projects.innerHTML = '';
    projectArray.forEach((project) => {
        const projectButton = document.createElement('button');
        projectButton.id = 'project-button';
        projectButton.textContent = project.name;
        projects.appendChild(projectButton);
        projectButton.addEventListener('click', () => {
            logProject(project, display);
        });
    });
}