function setOnSubmitHandlers() {
    let tableSizeForm = document.getElementById('tableSize');
    let tableInputForm = document.getElementById('tableInput');

    tableSizeForm.addEventListener('submit', event => event.preventDefault());
    tableInputForm.addEventListener('submit', event => event.preventDefault());
}

function setOnClickHandlers() {
    let tableSizeBtn = document.getElementById('tableSizeBtn');
    let tableInputBtn = document.getElementById('tableInputBtn');
    let clearAndReloadBtn = document.getElementById('clearAndReload');

    tableSizeBtn.addEventListener('click', event =>
        createTable(
            document.getElementById('defaultTable'),
            document.getElementById('columns').value,
            document.getElementById('rows').value
        ));

    tableInputBtn.addEventListener('click', event => {
            addContentToCell(
                document.getElementsByTagName('table')[0],
                document.getElementById('column').value - 1,
                document.getElementById('row').value - 1,
                document.getElementById('tableCellContent').value
            );

            saveTable();
        }
    );

    clearAndReloadBtn.addEventListener('click', event => clearAndReload());
}

function createTable(parent, colNum, rowNum) {
    let table = document.createElement('table');

    for (let i = 0; i < rowNum; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < colNum; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    let gridTemplateColumns = `repeat(${colNum}, minmax(100px, 200px))`;
    table.style.setProperty('grid-template-columns', gridTemplateColumns);
    parent.appendChild(table);

    return table;
}

function addContentToCell(table, colNum, rowNum, content) {
    let cell = table.rows[rowNum].cells[colNum];

    cell.innerHTML = content;
}

function loadTable(parent, colNum, rowNum) {
    let tableInfo = JSON.parse(localStorage.getItem('tableInfo'));

    if (colNum === 0 || rowNum === 0) return;

    let table = createTable(parent, colNum, rowNum);

    tableInfo.forEach(cell => addContentToCell(table, cell.column, cell.row, cell.content));
}


function saveTable() {
    let table = document.getElementsByTagName('table')[0];
    let tableInfo = [];

    for (let rowNum = 0; rowNum < table.rows.length; rowNum++) {
        for (let colNum = 0; colNum < table.rows[rowNum].cells.length; colNum++) {
            let tableCellContent = table.rows[rowNum].cells[colNum].innerHTML;

            if (tableCellContent.length !== 0) {
                let cellInformation = {
                    column: colNum,
                    row: rowNum,
                    content: tableCellContent
                };

                tableInfo.push(cellInformation);
            }
        }
    }

    localStorage.setItem('defaultTable', JSON.stringify(tableInfo));
    localStorage.setItem('columsNum', table.rows[0].cells.length.toString());
    localStorage.setItem('rowsNum', table.rows.length.toString());
}

function clearAndReload() {
    localStorage.clear();
    location.reload();
}