import { Project, projectList } from "./project.js";
import { Content } from "./contentui.js"
import { getOverlappingDaysInIntervals } from "date-fns";

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

const pLists = document.createElement("div");
pLists.classList.add("plists");

sidebar.appendChild(title);
sidebar.appendChild(pContainer);

pContainer.appendChild(svgp);
pContainer.appendChild(project);
pContainer.insertBefore(project, svgp);
sidebar.appendChild(pLists);

title.textContent = "Jack's Todolists"
project.textContent = "Project";
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
let toggle = false;

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
        plCui.content.innerHTML = "";
        const plNds = plContent.inputNodes();
        
        if ( toggle === false ) {
            plContent.eventHandler(plContent, plCui, plNds, newProject); 
            toggle = true;           
        }

        // showing todos in array if there are todos
        if ( newProject.todos.length > 0 ) {
            const pjarr = newProject.todos;

            for (let i = 0; i < pjarr.length; i++) {
                const tdbox = plContent.todoBox(plCui, newProject).todo;
                const conbox = tdbox.querySelector("div");
                conbox.textContent = pjarr[i].name + ", " + pjarr[i].duedate + ", Priority: " + pjarr[i].priority; 
            }
        }
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