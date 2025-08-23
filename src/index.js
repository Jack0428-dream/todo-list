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
function populateStorageTodo(array) {
    // get an array as a parameter then 
    // change it to string 
    // then use getItem and use the array to the function so that 
    // when user retrieving the data, they can get them from the array.
    // project list as well
    // and before that project list needs to be showing up by array's value

    localStorage.setItem('todos', JSON.stringify(array));

    const storedArr = localStorage.getItem('todos');
    const currentArr = JSON.parse(storedArr);
    return { currentArr };
}

export { populateStorageTodo };