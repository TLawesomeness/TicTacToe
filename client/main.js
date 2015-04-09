'use strict';

$(document).ready(function() {
  $('#newgame').hide();
  $('#start').click(function() {
    var countTurn = 0;
    var $p1 = $('#p1box').val();
    var $p2 = $('#p2box').val();
    var pArr = [];
    pArr.push($p1, $p2);
    var turn = pArr[Math.floor(Math.random() * pArr.length)];

    if (!$p1 || !$p2) {
      alert('Please enter a tag');
      return;
    }

    alert('It is player ' + turn + 's turn');
    $('#start').css('opacity', '0');
    $('.box').click(function() {
      // debugger;
      $(this).html($('<h3>' + turn + '</h3>'));

      if (turn === $p1) {
        turn = $p2;
        checkWin($p1);
        // $(this).prop('disabled', true);
        console.log('P1: ' + $p1);
        console.log('It is: ' + turn + ' turn');
      } else {
        turn = $p1;
        checkWin($p2);
        // $(this).prop('disabled', true);
        console.log('P1: ' + $p2);
        console.log('It is: ' + turn + ' turn');
      }
      countTurn++;

      function checkWin(player) {
        //Check top row
        if ($('#board').find('#1').html() !== '') {
          if ($('#board').find('#1').html() === $('#board').find('#2').html()) {
            if ($('#board').find('#1').html() === $('#3').html()) {
              alert(player + ' Won!');
              // console.log('top row win');
              gameReset();
            }
          }
        }
        //Check mid row
        if ($('#board').find('#4').html() !== '') {
          if ($('#board').find('#4').html() === $('#board').find('#5').html()) {
            if ($('#board').find('#4').html() === $('#6').html()) {
              alert(player + ' Won!');
              // console.log('mid row win');
              gameReset();
            }
          }
        }
        //Check bot row
        if ($('#board').find('#7').html() !== '') {
          if ($('#board').find('#7').html() === $('#board').find('#8').html()) {
            if ($('#board').find('#7').html() === $('#9').html()) {
              alert(player + ' Won!');
              // console.log('bot row win');
              gameReset();
            }
          }
        }
        //Check left column
        if ($('#board').find('#1').html() !== '') {
          if ($('#board').find('#1').html() === $('#board').find('#4').html()) {
            if ($('#board').find('#1').html() === $('#7').html()) {
              alert(player + ' Won!');
              // console.log('left col win');
              gameReset();
            }
          }
        }
        //Check mid column
        if ($('#board').find('#2').html() !== '') {
          if ($('#board').find('#2').html() === $('#board').find('#5').html()) {
            if ($('#board').find('#2').html() === $('#8').html()) {
              alert(player + ' Won!');
              // console.log('mid col win');
              gameReset();
            }
          }
        }
        //Check right column
        if ($('#board').find('#3').html() !== '') {
          if ($('#board').find('#3').html() === $('#board').find('#6').html()) {
            if ($('#board').find('#3').html() === $('#9').html()) {
              alert(player + ' Won!');
              // console.log('right col win');
              gameReset();
            }
          }
        }
        //Check left diagonal
        if ($('#board').find('#1').html() !== '') {
          if ($('#board').find('#1').html() === $('#board').find('#5').html()) {
            if ($('#board').find('#1').html() === $('#9').html()) {
              alert(player + ' Won!');
              // console.log('left diag win');
              gameReset();
            }
          }
        }
        //Check right diagonal
        if ($('#board').find('#3').html() !== '') {
          if ($('#board').find('#3').html() === $('#board').find('#5').html()) {
            if ($('#board').find('#3').html() === $('#7').html()) {
              alert(player + ' Won!');
              // console.log('right diag win');
              gameReset();
            }
          }
        }

        if (countTurn === 9) {
          alert('Tie Game!');
          gameReset();
        }
      }
    });

    $('#newgame').click(function() {
      $('#newgame').hide();
      $('td').text('');
      countTurn = 0;
      $('#board').fadeIn(function() {
        $('#board').animate({opacity: 1}, 500);
        $('#start, #gameMsg').show();
        $('#start').css('opacity', '1');
      });
    });

    function gameReset() {
      $('#board').fadeOut(function() {
        $('#board').animate({opacity: 0}, 500);
        $('#start, #gameMsg').hide();
        $('#p1box').val('');
        $('#p2box').val('');
        $('#newgame').show();
      });
    }
  });

});
