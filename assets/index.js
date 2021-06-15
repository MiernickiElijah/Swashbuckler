//switch data attr on click//
window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');
    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;
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
function change() {
    const elements = document.querySelectorAll("li.hide");
    for (let element of elements) {
        element.classList.toggle("transformed");
    }
}

$('#explore').click(change);
