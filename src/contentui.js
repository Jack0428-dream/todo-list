import { todolist } from "./todo_list";

class Content {
    contentUi() {
        const content = document.querySelector("#content");

        let num = 0;

        return { content, num };
    }

    todoBox(uiObj, tdList) {
        const todo = document.createElement("div");
        todo.classList.add("todo");

        const tdContent = document.createElement("div");
        tdContent.classList.add("td"+(uiObj.num));

        const id = "cb5"+(uiObj.num);

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

        // nodes for detailbox
        const dename = document.querySelector(".dename");
        const deprior = document.querySelector(".deprior");
        const dedue = document.querySelector(".dedue");
        const dedes = document.querySelector(".dedes");
        const denote = document.querySelector(".denote");

        const detail = document.createElement("span");
        detail.classList.add("detail");
        detail.addEventListener("click", () => {
            const detbox = document.querySelector(".detbox");
            const close3 = document.querySelector(".close3");

            detbox.showModal();

            const pardiv = detail.parentNode;
            const chidiv = pardiv.querySelector("div");
            let number1 = tdList.todos.findIndex(user => ((user.name + ", " + user.duedate + ", Prority:" + user.priority) === chidiv.textContent));

            dename.textContent = tdList.todos[number1].name;
            deprior.textContent = tdList.todos[number1].priority;
            dedue.textContent = tdList.todos[number1].duedate;
            dedes.textContent = tdList.todos[number1].description;
            denote.textContent = tdList.todos[number1].notes;

            close3.addEventListener("click", () => {
                detbox.close();
            })
        })

        const delBox = document.createElement("span");
        delBox.classList.add("delbox");
        delBox.addEventListener("click", () => {
            const pardiv = delBox.parentNode;
            uiObj.content.removeChild(pardiv);

            const chidiv = pardiv.querySelector("div");
            let number2 = tdList.todos.findIndex(user => ((user.name + ", " + user.duedate + ", Prority:" + user.priority) === chidiv.textContent) )
            tdList.deleteTodos(number2);
        })

        const cpbtn = document.createElement("div");
        cpbtn.classList.add("cpbtn");

        
        uiObj.content.appendChild(todo);
        todo.appendChild(chbox);
        todo.appendChild(tdContent);
        tdContent.appendChild(cpbtn);
        todo.appendChild(detail);
        todo.appendChild(delBox);

        uiObj.num ++;

        // console.log(uiObj.num)
        return uiObj.num
    }   

    inputNodes() {
        const nameIn = document.querySelector("#name");
        const priorIn = document.querySelector("#priority");
        const dueIn = document.querySelector("#duedate");
        const desIn = document.querySelector("#description");
        const notesIn = document.querySelector("#notes");

        return { nameIn, priorIn, dueIn, desIn, notesIn };
    }

    tdContent(cls, uiObj, nds, tdList) {
        let clnum = cls.todoBox(uiObj, tdList);
        const todoCon = document.querySelector('.td'+(clnum-1));
        todoCon.textContent = nds.nameIn.value+ ", " + nds.dueIn.value + ", Prority:" + nds.priorIn.value;
    }

    // showing todo dialog
    eventHandler(cls, uiObj, nds, tdList) {
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
            cls.tdContent(cls, uiObj, nds, tdList);
            const todo = new todolist(nds.nameIn.value, nds.priorIn.value, nds.dueIn.value, nds.desIn.value, nds.notesIn.value);
            tdList.addTodos(todo);

            nds.nameIn.value = "";
            nds.priorIn.value = "";
            nds.dueIn.value = "";
            nds.desIn.value= "";
            nds.notesIn.value = "";

            tdialog.close();
        })
    }
}

export { Content };