let currentDate = new Date(); //Will show long format of date
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
document.getElementById("date").innerHTML = currentDate.toLocaleDateString('en-us', options);

const addItem = document.getElementById("add");//button
const deleteAll = document.getElementById("delete"); //button
const ul = document.querySelector("ul");
const textInput = document.getElementById("item");//input

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
//If there are any 'pre-existing' items in local storage, to get, else if not, create an empty array.
console.log(itemsArray); //will show up as [] bc theres nothing.

itemsArray.forEach(addTask);
function addTask(text) { //a task that is added to the group
    const li = document.createElement('li')
    li.textContent = text; //the content will be what user inputs
    ul.appendChild(li);// append li within the ul
}

addItem.addEventListener('click', () => {
    itemsArray.push(textInput.value);
    //from itemsArray, it will push under, textInput value will show (key && 'value')
    localStorage.setItem('items', JSON.stringify(itemsArray));
    //converts all itmes within the itemsArray added as strings
    addTask(textInput.value);
    //will add to task, if taken off, will not show any task physcally, only shows in local storage, append it
    textInput.value = '';
    //any word entered in input field, will be removed for new task to be entered.
})


deleteAll.addEventListener('click', () => {
    localStorage.clear();
    //will clear all storage
    ul.innerHTML = '',
    //shows item on screen removed, else if this isn't here, in storage it may be gone, but on screen its still there
    itemsArray = [];
    //array becomes empty
})

// const ITEMS_CONTAINER = document.getElementById("container");
// const ITEM_TEMPLATE = document.getElementById("itemTemplate");
// const Btn = document.getElementById("add");
// // Only elements needed for this project

// let items = getItems(); //when page loads up

// function getItems() {
//     const value = localStorage.getItem("todo") || "[]"; //will get user text and save to local storage

//     return JSON.parse(value);
// }

// function setItems(items) { //when user refreshes, items will be "set", so theyll continue to be in local storage
//     const itemsJson = JSON.stringify(items);

//     localStorage.setItem("todo", itemsJson);
// }

// function addItem() {
//     items.unshift({  //will add an item at the top of the list
//         description: "", //object
//         completed: false //defaults
//     });

//     setItems(items) //save new item to local storage
//     refreshList(); //will save storage even when page is re-loaded
// }

// function refreshList() {
//     //TODO sort items
//     ITEMS_CONTAINER.innerHTML = ""; //means to be cleared
//     for (const item of items) {//for every single item in the items list can it be done
//         const itemElement = ITEM_TEMPLATE.content.cloneNode(true); //taking the template content, and clone/ or copy of div.
//         const descriptionInput = itemElement.querySelector(".item-description"); //will be cloned
//         const completedInput = itemElement.querySelector("item-completed"); //will be cloned
        
//         // descriptionInput.value = item.description;
//         // completedInput.checked = item.completed;

//         ITEMS_CONTAINER.append(itemElement);

//     }
// }

// Btn.addEventListener("click", () => {
//     addItem(); // when user clicks to add item, will call addItem
// })

// refreshList();
