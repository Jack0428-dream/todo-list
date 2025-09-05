import { Project, projectList } from "./project.js";
import { Content } from "./contentui.js"
import { loadTodos, savePlist, loadPlist, saveTodos} from "./index.js";

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

function listbox(listarr) {
    const nplist = document.createElement("div");
    pLists.appendChild(nplist);
    nplist.textContent = listarr.title + ", " + listarr.deadline;

    const pbtn1 = document.createElement("span");
    const pbtn2 = document.createElement("span");
    pbtn1.classList.add("pbtn1");
    pbtn2.classList.add("pbtn2");
    nplist.appendChild(pbtn1);
    nplist.appendChild(pbtn2);

    // using event delegation attatch event right away
    nplist.addEventListener("click", (e) => {
        if (e.target.classList.contains('pbtn1')) {
            console.log("pbtn1 is clicked");
            const plContent = new Content();
            const plCui = plContent.contentUi();
            plCui.content.innerHTML = "";
            const plNds = plContent.inputNodes();

            if ( toggle === false ) {
                plContent.eventHandler(plContent, plCui, plNds, listarr);
                toggle = true;
            }

            if ((listarr.todos).length > 0) {
                const pjArr = listarr.todos;
                const retArr = loadTodos(pjArr);
                
                for (let i = 0; i < retArr.length; i++) {
                    let index = plContent.todoBox(plCui, retArr).chnum;
                    const tdCon = document.querySelector('.td'+(index-1));
                    tdCon.textContent = retArr[i].name+", "+retArr[i].duedate+", Priority:"+retArr[i].priority;
                }
                
            }
        }

        if (e.target.classList.contains('pbtn2')) {
            const parDiv = e.target.parentNode;
            console.log('pbtn2 clicked');
            let number = nPlist.projectList.findIndex(item =>(item.title + ', '+item.deadline) === parDiv.textContent);
            nPlist.deleteProject(number);
            pLists.removeChild(parDiv);
        }
    })

}
 
add.addEventListener("click", () => {
    const newProject = new Project(titleIn.value, deadlineIn.value);

    nPlist.addProject(newProject);

    listbox(newProject);
    
    titleIn.value = "";
    deadlineIn.value = "";
    dialog.close();
    // console.log(nPlist.projectList);
})

function retrieveList() {
    const plArr = loadPlist();
    if ( plArr.length > 0 ) {
        for ( let i = 0; i < plArr.length; i++ ) {
            listbox(plArr[i]);
        }
    }   

    // eventhandler function add 

}

