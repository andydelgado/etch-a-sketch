$(document).ready(function() {
    var size = 16;

    createGrid(size);

    $('#newGrid').click(function(){
        size = prompt("Enter a number between 16 and 64 for your new Grid");
        clearGrid();
        newGrid(size);
        $('.square').hover(function(){
             $(this).css("background-color", "#767676");
         });
    });

    $('.square').hover(function(){
        $(this).css("background-color", "#767676");
    });

});

function createGrid(size) {
    var square = "<div class='square'></div>";
    var clear = "<div class='clear'></div>";
    var squareSize = (760 - (2 * size)) / size;
    for (var y = 0; y < size; y++){
        for(var x = 0; x < size; x++){
            $('.container').append(square);
        }
        $('.container').append(clear);
    }
    $('.square').width(squareSize + 'px');
    $('.square').height(squareSize + 'px');
}

function newGrid(size) {
    var square = "<div class='square'></div>";
    var clear = "<div class='clear'></div>";
    var squareSize = (760 - (2 * size)) / size;
    $('body').append("<div class='container'></div>");
    for (var y = 0; y < size; y++){
        for(var x = 0; x < size; x++){
            $('.container').append(square);
        }
        $('.container').append(clear);
    }
    $('.square').width(squareSize + 'px');
    $('.square').height(squareSize + 'px');
}

function clearGrid(){
    $('.container').remove();
}
