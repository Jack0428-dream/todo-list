class General {
    cosntructor() {
        this.generallist = [];

    }
    addGeneral(todos) {
        this.generallist.push(todos);
    }

    getGeneral() {
        return this.generallist;
    }
}

class project {
    constructor(name) {
        this.name = name,
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

    addProect(project) {
        this.projectList.push(project);
    }

    deleteProject(index) {
        this.projectList.splice(index, 1);
    }
}