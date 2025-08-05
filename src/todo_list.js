class todolist {
    constructor(name, category, priority, duedate, description, notes, done) {
        this.name = name,
        this.category = category,
        this.priority = priority,
        this.duedate = duedate,
        this.description = description,
        this.notes = notes,
        this.done = done;
    }

    // delete todo
    deleteTodo(todolist, index) {
        todolist.splice(index, 1);
    }
}