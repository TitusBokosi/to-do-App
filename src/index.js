import './styles.css';
import { createProject } from './project.js';
import { createProjectForm } from './projectForm.js';
import { displayProjectButton } from './displayProjectButton.js';


const project =  createProject('Project One');
console.log(project.name);
const body = document.querySelector('body');
const bodyContainer = document.createElement('div');
bodyContainer.id = 'body-container';
body.appendChild(bodyContainer);

const header = document.createElement('header');
header.id = 'header';
bodyContainer.appendChild(header);

const heading = document.createElement('h1');
heading.textContent = 'Tee ToDo';
header.appendChild(heading);

const sideBar = document.createElement('div');
sideBar.id = 'side-bar';

const content = document.createElement('div');
content.id = 'content';
bodyContainer.appendChild(content);
content.appendChild(sideBar);

const projectList = document.createElement('div');
projectList.id = 'project-list';
sideBar.appendChild(projectList);

const projectListHeadingContainer = document.createElement('div');
projectListHeadingContainer.id = 'project-list-heading-container';
projectList.appendChild(projectListHeadingContainer);

const projectListHeading = document.createElement('h2');
projectListHeading.textContent = 'Projects';
projectListHeadingContainer.appendChild(projectListHeading);

const projectListAddButton = document.createElement('button');
projectListAddButton.id = 'project-list-add-button';
projectListAddButton.textContent = '+';
projectListHeadingContainer.appendChild(projectListAddButton);

 const projects = document.createElement('div');
projects.id = 'projects';
projectList.appendChild(projects);



 
const display = document.createElement('div');
display.id = 'display';
content.appendChild(display);

projectListAddButton.addEventListener('click', function(){
    createProjectForm(display, projects);
});
