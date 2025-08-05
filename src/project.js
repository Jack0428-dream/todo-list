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
    cosntructor(generallist) {
        this.generallist = generallist;
    }
    showingGeneral(object) {
        const generalcheck = object.category;
        if (generalcheck === "general") {
            console.log("This is"+generalcheck+" list")
            this.generallist = object;
        }
    }
}

class projectlist {

}