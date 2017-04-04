var board;
var chess = new Chess();

onDrop = function(sourcePos, targetPos, piece, newPos, oldPos, orientation){
    var result = chess.move({from: sourcePos, to: targetPos, promotion: 'q'});

    if(result == null)
    {
        return 'snapback';
    }
};

init = function(){
    var config = {
        draggable: true,
        position: 'start',
        onDrop: onDrop
    };

    var board = ChessBoard('board', config);
};

$(document).ready(function(){
    init();
});