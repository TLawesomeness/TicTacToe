'use strict';

$(document).ready(function() {
  $('#start').click(startGame);
});

function startGame() {
  var countTurn = 0;
  var p1Input = $('#p1box').val();
  var p2Input = $('#p2box').val();
  var pArr = [];
  pArr.push(p1Input, p2Input);

  //randomize between p1 and p2
  var turn = pArr[Math.floor(Math.random() * pArr.length)];
  if (turn === p1Input) {
    turn = p2Input;
  } else {
    turn = p1Input;
    console.log('It is: ' + turn + ' turn');
  }

  alert('It is player ' + turn + 's turn');

  $('#newgame').click(function() {
    $('td').text('');
    countTurn = 0;
  });

  //when box is clicked
  $('#board td').click(function() {
    if (countTurn % 2 === 0) {
  //paint p1 text
      $(this).text(p1Input);
      countTurn++;
      checkWin(p1Input);
      console.log('P1: ' + p1Input);
    } else {
  //paint p2 text
      $(this).text(p2Input);
      countTurn++;
      checkWin(p2Input);
      console.log('P2: ' + p2Input);
    }
    console.log('Turn: ' + countTurn);

    function checkWin(player) {
      //Check top row
      if ($('#board').find('#1').text() !== '') {
        if ($('#board').find('#1').text() === $('#board').find('#2').text()) {
          if ($('#board').find('#1').text() === $('#3').text()) {
            alert(player + ' Won!');
          }
        }
      }

      //Check mid row
      if ($('#board').find('#4').text() !== '') {
        if ($('#board').find('#4').text() === $('#board').find('#5').text()) {
          if ($('#board').find('#4').text() === $('#6').text()) {
            alert(player + ' Won!');
          }
        }
      }

      //Check bot row
      if ($('#board').find('#7').text() !== '') {
        if ($('#board').find('#7').text() === $('#board').find('#8').text()) {
          if ($('#board').find('#7').text() === $('#9').text()) {
            alert(player + ' Won!');
          }
        }
      }

      //Check left column
      if ($('#board').find('#1').text() !== '') {
        if ($('#board').find('#1').text() === $('#board').find('#4').text()) {
          if ($('#board').find('#1').text() === $('#7').text()) {
            alert(player + ' Won!');
          }
        }
      }

      //Check mid column
      if ($('#board').find('#2').text() !== '') {
        if ($('#board').find('#2').text() === $('#board').find('#5').text()) {
          if ($('#board').find('#2').text() === $('#8').text()) {
            alert(player + ' Won!');
          }
        }
      }

      //Check right column
      if ($('#board').find('#3').text() !== '') {
        if ($('#board').find('#3').text() === $('#board').find('#6').text()) {
          if ($('#board').find('#3').text() === $('#9').text()) {
            alert(player + ' Won!');
          }
        }
      }

      //Check left diagonal
      if ($('#board').find('#1').text() !== '') {
        if ($('#board').find('#1').text() === $('#board').find('#5').text()) {
          if ($('#board').find('#1').text() === $('#9').text()) {
            alert(player + ' Won!');
          }
        }
      }

      //Check right diagonal
      if ($('#board').find('#3').text() !== '') {
        if ($('#board').find('#3').text() === $('#board').find('#5').text()) {
          if ($('#board').find('#3').text() === $('#7').text()) {
            alert(player + ' Won!');
          }
        }
      }

      if (countTurn === 9) {
        alert('Tie Game!');
      }
    }
  });
}
