export function createProject(name, description, dueDate){
    const toDo = [];
    function createToDoItem(name, description, dueDate){
        const item = {
            name:name,
            description:description,
            dueDate:dueDate,
        }
        toDo.push(item);
        return item;
    }
    return{name, description, dueDate, createToDoItem};
}

