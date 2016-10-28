var add = document.getElementById("add");

add.addEventListener("click", function () {
    var item = document.getElementById("item");
    if (item.value) {
        console.log(item.value);
    }

}, false);