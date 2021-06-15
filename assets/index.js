//switch data attr on click//
window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');
    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;
        //on click add and remove class for nav highlight//
        tab_switcher.addEventListener('click', () => {
            document.querySelector('body nav ul li.active').classList.remove('active');
            tab_switcher.parentNode.classList.add('active');
            SwitchPage(page_id);
        })
    }
}

//switch page on nav click//
function SwitchPage(page_id) {
    const current_page = document.querySelector('div.page.active');
    current_page.classList.remove('active');
    const next_page = document.querySelector(`div.page[data-page="${page_id}"]`);
    next_page.classList.add('active');
}

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