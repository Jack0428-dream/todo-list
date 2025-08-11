const content = document.querySelector("#content");

let num = 0;

function todoBox() {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const tdContent = document.createElement("div");
    tdContent.classList.add("td"+num);

    const chbox = document.createElement("span");
    chbox.classList.add("chbox");
    const detail = document.createElement("span");
    detail.classList.add("detail");
    const delBox = document.createElement("span");
    delBox.classList.add("delbox");

    const cpbtn = document.createElement("div");
    cpbtn.classList.add("cpbtn");

    content.appendChild(todo);
    todo.appendChild(chbox);
    todo.appendChild(tdContent);
    tdContent.appendChild(cpbtn);
    todo.appendChild(detail);
    todo.appendChild(delBox);

    num ++;
    console.log(num);

    return num
}   

const nameIn = document.querySelector("#name");
const priorIn = document.querySelector("#priority");
const dueIn = document.querySelector("#duedate");
const desIn = document.querySelector("#description");
const notesIn = document.querySelector("#notes");

function tdContent() {
    let clnum = todoBox();
    const todoCon = document.querySelector('.td'+(clnum-1));
    todoCon.textContent = nameIn.value + ", " + dueIn.value + ", Prority:" + priorIn.value;
}
// control the textbox that will contain the information of todo



todoBox();

// showing todo dialog
const tdialog = document.querySelector(".tdialog");
const addTd = document.querySelector(".cpbtn");

addTd.addEventListener("click", () => {
    tdialog.showModal();
})

// closing todo dialog
const close2 = document.querySelector(".close2");
close2.addEventListener("click", () => {
    tdialog.close();
})

// adding information of todo
const plusTodo = document.querySelector("#plus");
plusTodo.addEventListener("click", () => { 
    tdContent();

    nameIn.value = "";
    priorIn.value = "";
    dueIn.value = "";
    desIn.value = "";
    notesIn.value = "";

    tdialog.close();
})