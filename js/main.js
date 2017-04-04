
$(document).ready(function(){
var chess = new Chess();

    var config = {
draggable: true,
dropOffBoard: 'snapback',
position: 'start'
    };

    var board = ChessBoard('board', config);
});