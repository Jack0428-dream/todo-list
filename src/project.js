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

class projectlist {
    constructor() {
        this.projectlist = [];
    }

    addPlist(todos) {
        this.projectlist.push(todos);
    }

    getPlist() {
        return this.projectlist;
    }

    deletePlist(index) {
        this.projectlist.splice(index, 1);
    }
}
