var add = document.getElementById("add");
var remove = document.getElementsByClassName("remove-icon");
var removeSVG = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 22 22" xml:space="preserve"><path class="fill" d="M16.1 3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9 1 7.8 2 7.8 3.3v0.2H5.9c-1.3 0-2.3 1-2.3 2.3v1.3c0 0.5 0.4 0.9 0.9 1v10.5c0 1.3 1 2.3 2.3 2.3h8.5c1.3 0 2.3-1 2.3-2.3V8.2c0.5-0.1 0.9-0.5 0.9-1V5.9C18.4 4.6 17.4 3.6 16.1 3.6zM9.1 3.3c0-0.6 0.5-1.1 1.1-1.1h1.7c0.6 0 1.1 0.5 1.1 1.1v0.2H9.1V3.3zM16.3 18.7c0 0.6-0.5 1.1-1.1 1.1H6.7c-0.6 0-1.1-0.5-1.1-1.1V8.2h10.6L16.3 18.7 16.3 18.7zM17.2 7H4.8V5.9c0-0.6 0.5-1.1 1.1-1.1h10.2c0.6 0 1.1 0.5 1.1 1.1V7z"/><path class="fill" d="M11 18c-0.4 0-0.6-0.3-0.6-0.6v-6.8c0-0.4 0.3-0.6 0.6-0.6s0.6 0.3 0.6 0.6v6.8C11.6 17.7 11.4 18 11 18z"/><path class="fill" d="M8 18c-0.4 0-0.6-0.3-0.6-0.6v-6.8C7.4 10.2 7.7 10 8 10c0.4 0 0.6 0.3 0.6 0.6v6.8C8.7 17.7 8.4 18 8 18z"/><path class="fill" d="M14 18c-0.4 0-0.6-0.3-0.6-0.6v-6.8c0-0.4 0.3-0.6 0.6-0.6 0.4 0 0.6 0.3 0.6 0.6v6.8C14.6 17.7 14.3 18 14 18z"/></svg>';
var completeSVG = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 22 22" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><path class="fill" d="M9.7 14.4L9.7 14.4c-0.2 0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8 0-1.1s0.8-0.3 1.1 0l2.1 2.1 4.8-4.8c0.3-0.3 0.8-0.3 1.1 0s0.3 0.8 0 1.1l-5.3 5.3C10.1 14.3 9.9 14.4 9.7 14.4z"/></svg>';


add.addEventListener("click", addTodoItem, false);
remove.addEventListener("click", removeTodoItem, false);

function addTodoItem (text) {
    var item = document.getElementById("item");
    text = item.value;

    if(text) {
        //console.log(text);

        //create listItem
        //with class of list-item-container
        var toTodo = document.querySelector(".todo");

        var listItem = document.createElement("li");
        listItem.classList.add("list-item-container");
        var paragraph = document.createElement("p");
        paragraph.textContent = text;
        var removeButton = document.createElement("div");
        removeButton.classList.add("remove-icon");
        removeButton.innerHTML = removeSVG;
        var completeButton = document.createElement("div");
        completeButton.classList.add("complete");
        completeButton.innerHTML = completeSVG;

        //all buttons together
        listItem.appendChild(paragraph);
        listItem.appendChild(removeButton);
        listItem.appendChild(completeButton);

        //append to list
        toTodo.appendChild(listItem);

    }

}

function removeTodoItem () {

}