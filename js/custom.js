
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav");

    document.querySelector("#btnnav").addEventListener('click', () => {
        nav.classList.add("nav--open");
    });
    document.querySelector(".fa-solid").addEventListener('click', () => {
        nav.classList.remove("nav--open");
    });
});

$(function () {

    try {
        var tabIndex = 0;
        $("*").each(function (e, item) {
            tabIndex = tabIndex + 1;
            if (item.tagName.toLowerCase() == "a" || item.tagName.toLowerCase() == "img") {
                $(item).attr('tabIndex', tabIndex)
            }
        });
    } catch (error) {

    }

})
