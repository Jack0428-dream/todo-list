class General {
    cosntructor() {
        this.generaltodos = [];

    }
    addTodos(todos) {
        this.generaltodos.push(todos);
    }

    deleteTodos(index) {
        this.generaltodos.splice(index, 1);
    }
}

class Project {
    constructor(title, deadline) {
        this.title = title,
        this.deadline = deadline,
        this.todos = [];
    }

    addTodos(todos) {
        this.todos.push(todos);
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