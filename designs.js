var inputRows;
var inputCols;
var inputColor = "#000000"
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    var table = document.getElementById("pixel_canvas");
    table.innerHTML = "";
    while(table.rows.length > 0){
        table.deleteRow(0);
    }
    inputRows = document.getElementById("input_height").value;
    inputCols = document.getElementById("input_width").value;
    for(var i = 0; i < inputRows; i++){
        var rowElement = table.insertRow(i);
        rowElement.setAttribute("class", "row");
        for(var j = 0; j < inputCols; j++){
            var cell = rowElement.insertCell(j);
            cell.addEventListener("click", function(evt){
                evt.target.style.backgroundColor = document.getElementById("colorPicker").value;
                this.style.borderColor="#65e9bc";
                this.style.boxShadow="0 0 5px #65e9bc";
            });
        }
    }
    return false;
}

document.getElementById("sizePicker").addEventListener("submit", function(evt){
    evt.preventDefault();
    makeGrid();
});

