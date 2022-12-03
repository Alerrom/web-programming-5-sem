function scaleMenu() {
    var header = document.getElementById("menu_list_id");
    if (header.className === "menu_list") {
        header.classList.add("responsive");
    }
    else {
        header.className = "menu_list";
    }
}

function highlightMenuElemEdit() {
    var header = document.getElementById("menu_list_id").getElementsByTagName("a");
    var url = document.location.href;
    for (var i = 0; i < header.length; i++) {
        if (url == header[i].href) {
            header[i].classList.add("active");
        }
        else {
            header[i].classList.remove("active")
        }
    }
}

function highlightMenuElem() {
    var header = document.getElementById("menu_list_id").getElementsByTagName("a");
    var currUrl = document.location.href;

    for (var i = 0; i < header.length; i++) {
        if (header[i].href == currUrl || header[i].href.slice(-5) == "#home") {
            header[i].classList.add("active");
        }
    }
}