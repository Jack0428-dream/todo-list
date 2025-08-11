const content = document.querySelector("#content");

let num = 0;

function todoBox() {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const tdContent = document.createElement("div");
    tdContent.classList.add("td"+num);

    const id = "cb5"+num;

    const chbox = document.createElement("span");
    chbox.classList.add("checkbox-wrapper-10");

    const checkbox = document.createElement("input");
    checkbox.classList.add("tgl", "tgl-flip");
    checkbox.setAttribute("id", id);
    checkbox.setAttribute('type','checkbox');
    checkbox.setAttribute('name', 'check');

    const label = document.createElement("label");
    label.classList.add("tgl-btn");
    label.setAttribute('data-tg-off', "Nope");
    label.setAttribute('data-tg-on', 'Done!');
    label.setAttribute('for', id);
    chbox.appendChild(checkbox);
    chbox.appendChild(label);



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
    deleteTodo();
    // console.log(num);

    return num
}   

function inputNodes() {
    const nameIn = document.querySelector("#name");
    const priorIn = document.querySelector("#priority");
    const dueIn = document.querySelector("#duedate");
    const desIn = document.querySelector("#description");
    const notesIn = document.querySelector("#notes");

    const nmIV = nameIn.value;
    const prIV = priorIn.value;
    const duIV = dueIn.value;
    const deIV = desIn.value;
    const ntIV = notesIn.value;

    return { nmIV, prIV, duIV, deIV, ntIV };
}

const inNodes = inputNodes();

function tdContent() {
    let clnum = todoBox();
    const todoCon = document.querySelector('.td'+(clnum-1));
    todoCon.textContent = inNodes.nmIV + ", " + inNodes.duIV + ", Prority:" + inNodes.prIV;
}

// control the textbox that will contain the information of todo
todoBox();

// showing todo dialog
function eventHandler() {
    const tdialog = document.querySelector(".tdialog");
    const addTd = document.querySelector(".cpbtn");
    const close2 = document.querySelector(".close2");
    const plusTodo = document.querySelector("#plus");

    addTd.addEventListener("click", () => {
        tdialog.showModal();
    })

    // closing todo dialog
    close2.addEventListener("click", () => {
        tdialog.close();
    })

    // adding information of todo
    plusTodo.addEventListener("click", () => { 
        tdContent();

        inNodes.nmIV = "";
        inNodes.prIV = "";
        inNodes.duIV = "";
        inNodes.deIV = "";
        inNodes.ntIV = "";

        tdialog.close();
    })


}

eventHandler();

// function showingDetail() {
//     const dtlbtn = document.querySelector(".detail");


// }

// function deleteTodo() {
//     const delbtn = document.querySelector(".delbox");

//     const parDiv = delbtn.parentNode;
    
//     delbtn.addEventListener("click", () => {
//         content.removeChild(parDiv);
//     })
// }

export { content, num, todoBox, inputNodes, tdContent, eventHandler };