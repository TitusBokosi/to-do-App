import { displayToDoItems } from "./displayToDoItems";
export function deleteToDoItem(project, item, display){
    project.toDo.splice(project.toDo.indexOf(item), 1);
    display.innerHTML = '';
    displayToDoItems(project, display);
}