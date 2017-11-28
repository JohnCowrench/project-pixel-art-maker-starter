var gridHeight, gridWidth, gridColor;
// Select color input
gridColor = "#000000";
$('#colorPicker').change(function(){
    gridColor = $('#colorPicker').val();
});
// Select size input



$('[type=submit]').click(function(event){

    gridHeight = Number($("input[id=input_height]").val());
    gridWidth = Number($("input[id=input_width]").val());

    makeGrid(gridHeight, gridWidth);
    event.preventDefault();
});

// When size is submitted by the user, call makeGrid()
function makeGrid(gridHeight, gridWidth) {
// Your code goes here!
    console.log("click");
    if($('#pixel_canvas').find('tr').length){
        $('#pixel_canvas').find('tr').remove();
    }

    for(var i = 0; i < gridHeight; i++){
        $("#pixel_canvas").append("<tr></tr");
    }
    for(var i = 0; i < gridWidth; i++){
        $("#pixel_canvas").find("tr").append("<td></td");
    }

    $('#colorPicker').change(function(){
        gridColor = $('#colorPicker').val();
    });

    $('td').click(function(evt){
        $( evt.target ).css( 'background', gridColor );
    });
}
