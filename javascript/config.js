document.addEventListener('DOMContentLoaded', event => loadTable(
    document.getElementById('defaultTable'),
    Number(localStorage.getItem('columsNum')),
    Number(localStorage.getItem('rowsNum'))
    ));

document.addEventListener('DOMContentLoaded', event => setOnClickHandlers());
document.addEventListener('DOMContentLoaded', event => setOnSubmitHandlers());

window.addEventListener('load', event => showLoadingTime());