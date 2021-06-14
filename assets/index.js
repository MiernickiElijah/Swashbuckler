//display NAV on click//
function change() {
    const elements = document.querySelectorAll("li.hide");
    for (let element of elements) {
        element.classList.toggle("transformed");
    }
}

$('#explore').click(change);