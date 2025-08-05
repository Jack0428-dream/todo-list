class Project {
    constructor(name, category, priority, duedate, description, notes) {
        this.name = name,
        this.category = category,
        this.priority = priority,
        this.duedate = duedate,
        this.description = description,
        this.notes = notes;
    }    
}

class General {
    cosntructor() {
        this.generallist = [];
    }
    addGeneral(object) {
        const generalcheck = object.category;
        if (generalcheck === "general") {
            console.log("This is"+generalcheck+" list")
            this.generallist.push(object);
        }
    }

    getGeneral() {
        return this.generallist;
    }
}

class projectlist {
    constructor() {
        this.projectlist = [];
    }

    addPlist(object) {
        const pListcheck = object.category;
        if(pListcheck !== "general") {
            console.log("This is not general list");
            this.projectlist.push(object);
        }
    }

    getPlist() {
        return this.projectlist;
    }

    deletePlist(index) {
        this.projectlist.splice(index, 1);
    }
}