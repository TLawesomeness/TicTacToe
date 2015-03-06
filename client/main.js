'use strict';

$(document).ready(function() {

  var countTurn = 0;
  var winCond = ['1,2,3', '4,5,6', '7,8,9', '1,4,7', '2,5,8', '3,6,9', '1,5,9', '3,5,7'];

  $('#start').click(function() {
    var p1Input = $('#p1box').val();
    var p2Input = $('#p2box').val();
    var pArr = [];
    pArr.push(p1Input, p2Input);

    var turn = pArr[Math.floor(Math.random() * pArr.length)];
    if (turn === p1Input) {
      // console.log(turn);
      turn = p2Input;
    } else {
      turn = p1Input;
      console.log(turn);
    }

    alert('It is player ' + turn + 's turn');

    $('#board').find('td').click(function() {
      if (countTurn % 2 === 0) {
        debugger;
        $(this).html(p1Input);
        countTurn++;
        console.log('P1: ' + p1Input);
        // checkWin();
      } else {
        $(this).html(p2Input);
        countTurn++;
        // checkWin();
        console.log('P2: ' + p2Input);
      }
      console.log('Turn: ' + countTurn);
    });

  });
});

// function checkWin() {
//   if ($('#board').text() !== '') {
//
//   }
// }
