var currentDate = new Date();
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
document.getElementById("date").innerHTML = currentDate.toLocaleDateString('en-us', options);



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
