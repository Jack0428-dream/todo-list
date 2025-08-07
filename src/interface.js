import { showingaffirmations } from "./affirmation";
import { General, Project, projectList } from "./project";

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
add.addEventListener("click", () => {
    const newProject = new Project(titleIn.value, deadlineIn.value);

    const nPlist = new projectList();
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

    titleIn.value = "";
    deadlineIn.value = "";
})