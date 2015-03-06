'use strict';

$(document).ready(function() {

  var count = 0;
  var p1Input = $('#p1box').val();
  var p2Input = $('#p2box').val();

  $('#board').find('td').click(function() {
    if (count % 2 === 0) {
      $(this).text(p1Input);
      checkWin();
    } else {
      $(this).text(p2Input);
      checkWin();
    }
    count++;
    console.log(count);
    function getRandom(p1, p2) {
      var turn = Math.random(p1, p2) * 2;
      return getRandom();
    }

  });

  $('#start').click(function() {

  });
});

function checkWin() {

}
