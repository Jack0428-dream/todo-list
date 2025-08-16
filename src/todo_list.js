class todolist {
    constructor(name, priority, duedate, description, notes) {
        this.name = name,
        this.priority = priority,
        this.duedate = duedate,
        this.description = description,
        this.notes = notes;
        this.done = false;
    }

    // delete todo
    deleteTodo(todolist, index) {
        todolist.splice(index, 1);
    }
}

export { todolist }