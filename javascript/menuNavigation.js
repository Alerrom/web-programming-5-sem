function scaleMenu() {
    var header = document.getElementById("menu_list_id");
    if (header.className === "menu_list") {
        header.className += " responsive";
    }
    else {
        header.className = "menu_list";
    }
}