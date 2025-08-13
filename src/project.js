class General {
    constructor() {
        this.todos = [];
    }

    addTodos(todo) { 
        this.todos.push(todo);
    }

    deleteTodos(index) {
        this.todos.splice(index, 1);
    }
}

class Project {
    constructor(title, deadline) {
        this.title = title,
        this.deadline = deadline,
        this.todos = [];
    }

    addTodos(todo) {
        this.todos.push(todo);
    }

    deleteTodos(index) {
        this.todos.splice(index, 1);
    }
}

class projectList {
    constructor() {
        this.projectList = [];
    }

    addProject(project) {
        this.projectList.push(project);
    }

    deleteProject(index) {
        this.projectList.splice(index, 1);
    }
}

export { General, Project, projectList }