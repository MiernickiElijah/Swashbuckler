//display NAV on click//
function open() {
    const elements = document.querySelectorAll("li.hide");
    for (let element of elements) {
        element.classList.remove("hide");
        element.classList.toggle("transformed");
    }
}

//close NAV on click//
function close() {
    const elements = document.querySelectorAll("li.transformed");
    for (let element of elements) {
        element.classList.remove("transformed");
        element.classList.toggle("hide");
    }
}

//NAV function//
const clicker = (function () {
    var change = true;
    return function () {
        change ? open() : close();
        change = !change;
    }
})();

$('#explore').click(clicker);
