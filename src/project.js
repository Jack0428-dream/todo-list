class General {
    cosntructor() {
        this.generaltodos = [];

    }
    addGeneral(todos) {
        this.generaltodos.push(todos);
    }

    getGeneral() {
        return this.generallist;
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

    getPlist() {
        return this.todos;
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

export { General, Project, projectList}