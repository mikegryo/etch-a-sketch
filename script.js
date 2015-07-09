$(document).ready(function() { 
  var numberOfSquares = prompt("What dimensions would you like the Etch-A-Sketch to have?");
  var squareSide = 480 / numberOfSquares;
  for (var i = 0; i < numberOfSquares; i++) {     //builds grid
     for (var j = 0; j < numberOfSquares; j++) {
       $('#container').append(buildSquare(squareSide));
     };
  };
  $('.square').hover(function(){                  //fills in div's that the cursor hovers over
    $(this).addClass('shade');
  });
  $(document).on('click', 'button', function(){   //should shake the container and clear the filled div's
    $('#container').effect('shake');
    $('.square').removeClass('shade');
  });
});

var buildSquare = function(squareSide) {          //builds the square size to fit within container
  var $square = $(document.createElement('div'));
  $square.width(squareSide).height(squareSide).addClass('square');
  return $square;
};


