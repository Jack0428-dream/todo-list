const content = document.querySelector("#content");

function todoBox() {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    let num = 0;
    const tdContent = document.createElement("div");
    tdContent.classList.add("td"+num);

    const detail = document.createElement("span");
    detail.classList.add("detail");
    const delBox = document.createElement("span");
    delBox.classList.add("delbox");

    content.appendChild(todo);
    todo.appendChild(tdContent);
    todo.appendChild(detail);
    todo.appendChild(delBox);

    num += 1;

    return num
}

function tdContent() {
    let index = todoBox();
    const todoCon = document.querySelector(".td"+(index-1));

    const nameIn = document.querySelector("#name");
    const priorIn = document.querySelector("#priority");
    const dueIn = document.querySelector("#duedate");

    todoCon.textContent = nameIn.value + ", " + priorIn.value + ", " + dueIn.value;
}

todoBox();