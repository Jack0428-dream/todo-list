import "./style.css";
import "./sidebar.css";
import "./content.css";
import "./checkbox.css";
import "./project.js";
import "./todo_list.js";
import "./header_box.js";
import "./sidebarui.js";
import "./contentui.js";

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

if (storageAvailable("localStorage")) {
    console.log("Yippee! We can use localStorage awesomeness")
} else {
    console.log("Too bad, no localStorage for us")
}

// storing the data 
// todos and project list

function saveTodos(array) {
    localStorage.setItem(array[0].name, JSON.stringify(array));
}

function loadTodos(array) {
  const stored = localStorage.getItem(array[0].name);
  return stored ? JSON.parse(stored) : [];
}

function savePlist(arr) {
  localStorage.setItem('list', JSON.stringify(arr));
}

function loadPlist() {
  const storedL = localStorage.getItem("list");
  return storedL ? JSON.parse(storedL) : [];
}

export { saveTodos, loadTodos, savePlist, loadPlist }