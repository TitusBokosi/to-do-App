export function createProject(name, description, dueDate){
    const toDo = [];
    function createToDoItem(name, description, dueDate, dueTime){
        const item = {
            name:name,
            description:description,
            dueDate:dueDate,
            dueTime: dueTime,
        }
        toDo.push(item);
        return item;
    }
    return{name, description, dueDate, createToDoItem, toDo};
}

