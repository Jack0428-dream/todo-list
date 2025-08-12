import { todolist } from "./todo_list.js";
import { showingaffirmations } from "./affirmation.js";
import { General, Project, projectList } from "./project.js";
import { Content } from "./contentui.js"

// header 
// showing affirmation
const header = document.querySelector("#header");

header.textContent = "Your mantra for Today: " + showingaffirmations();

// sidebar
// projec + , general, project lists
const sidebar = document.querySelector("#sidebar");

const title = document.createElement("div");
title.classList.add("title");

const pContainer = document.createElement("div");
pContainer.classList.add("pcontainer");
const project = document.createElement("div");
project.classList.add("project");
const svgp = document.querySelector(".plusbox");

const gContainer = document.createElement("div");
gContainer.classList.add("gcontainer");
const general = document.createElement("div");
general.classList.add("general");
const svgg = document.querySelector(".plusbox2");

const pLists = document.createElement("div");
pLists.classList.add("plists");

sidebar.appendChild(title);
sidebar.appendChild(pContainer);

pContainer.appendChild(svgp);
pContainer.appendChild(project);
pContainer.insertBefore(project, svgp);
sidebar.appendChild(gContainer);

gContainer.appendChild(svgg);
gContainer.appendChild(general);
gContainer.insertBefore(general, svgg);
sidebar.appendChild(pLists);

title.textContent = "Jack's Todolists"
project.textContent = "Project";
general.textContent = "General";
pLists.textContent = "Project List";

// adding project to list
// showing dialog 
const dialog = document.querySelector(".pdialog");
svgp.addEventListener("click", () => {
    dialog.showModal();
});

// closing dialog
const close = document.querySelector(".close");
close.addEventListener("click", () => {
    dialog.close();
})

// connect function with button
const titleIn = document.querySelector("#title");
const deadlineIn = document.querySelector("#deadline");

const add = document.querySelector("#add");
const nPlist = new projectList();

// const nameIn = document.querySelector("#name");
// const priorIn = document.querySelector("#priority");
// const dueIn = document.querySelector("#duedate");
// const desIn = document.querySelector("#description");
// const notesIn = document.querySelector("#notes");

add.addEventListener("click", () => {
    const newProject = new Project(titleIn.value, deadlineIn.value);

    nPlist.addProject(newProject);

    const nplist = document.createElement("div");
    pLists.appendChild(nplist);
    nplist.textContent = newProject.title + ", " + newProject.deadline;
    
    const pbtn1 = document.createElement("span");
    const pbtn2 = document.createElement("span");
    pbtn1.classList.add("pbtn1");
    pbtn2.classList.add("pbtn2");
    nplist.appendChild(pbtn1);
    nplist.appendChild(pbtn2);

    //showing todo list & deleting project list
    // showing todo list 
    pbtn1.addEventListener("click", () => {
        // Pl Content UI
        const plContent = new Content();
        const plCui = plContent.contentUi();
        plContent.todoBox(plCui);
        const plNds = plContent.inputNodes();
        plContent.eventHandler(plContent, plCui, plNds, newProject);

        // // Saving Plinfo
        // const plTodo = new todolist(nameIn.value, priorIn.value, dueIn.value, desIn.value, notesIn.value);
        // newProject.addTodos(plTodo);
    })


    pbtn2.addEventListener("click", () => {
        // delete div (interface)
        const parDiv = pbtn2.parentNode;

        // delete the data inside the array
        let number = nPlist.projectList.findIndex(item =>(item.title + ', '+item.deadline) === parDiv.textContent)
        // console.log(number);
        nPlist.deleteProject(number);

        pLists.removeChild(parDiv);
        // console.log(nPlist.projectList);
    })

    titleIn.value = "";
    deadlineIn.value = "";
    dialog.close();
    // console.log(nPlist.projectList);
})

const gnbtn = document.querySelector(".plusbox2");
const gnList = new General();

gnbtn.addEventListener("click", () => {
    // general Content UI
    const gnContent = new Content();
    const gnCui = gnContent.contentUi();
    gnContent.todoBox(gnCui);
    const gnNds = gnContent.inputNodes();
    gnContent.eventHandler(gnContent, gnCui, gnNds, gnList);

    // // Saving Gninfo 
    // const gnTodo = new todolist(nameIn.value, priorIn.value, dueIn.value, desIn.value, notesIn.value);
    // gnList.addGeneral(gnTodo);
})