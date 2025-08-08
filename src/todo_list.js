class todolist {
    constructor(name, priority, duedate, description, notes) {
        this.name = name,
        this.priority = priority,
        this.duedate = duedate,
        this.description = description,
        this.notes = notes,
        this.done = false;
    }

    //checking the todo list if user finished the list
    checkingTodos() {
        if ( this.done === false ) {
            this.done = true;
        } else if ( this.done === true ) {
            this.done = false;
        }
    }

    // delete todo
    deleteTodo(todolist, index) {
        todolist.splice(index, 1);
    }
}