import { showingaffirmations } from "./affirmation";

// header 
// showing affirmation
const header = document.querySelector("#header");

header.textContent = "Your mantra for Today: " + showingaffirmations();

// sidebar
// projec + , general, project lists
function makingSidebar() {
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
}

makingSidebar();