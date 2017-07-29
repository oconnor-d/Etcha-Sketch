$(document).ready(function() {
  run(16);
});

var isBlack = true;

function run(gridSize) {
  createGrid(gridSize);
  resetPixels();

  // Updates the grid to the size in the input field
  // when the update button is pressed
  $('button[name="update"]').click(function() {
    gridSize = parseInt($('input[name="gridSize"]').val(), 10);
    run(gridSize);
  });

  // Colors pixels the cursor hovers over
  $('.pixel').hover(function() {
    var color = getColor();
    $(this).css("background-color", color);
    $('#color-indicator').css("background-color", color);
  });

  // clears the grid when the reset button is pressed
  $('button[name="reset"]').click(function() {
    resetPixels();
  });

  $('input[value="rainbow"]').on('click', function() {
    isBlack = false;
  });

  $('input[value="black"]').on('click', function() {
    isBlack = true;
  });
}

// empties the current grid and creates a new one with the given size
function createGrid(size) {
  // empties the current grid
  $("#container").empty();

  // creates and adds all the pixels to the container
  for (var idx = 0; idx < size*size; idx++) {
    $pixel = $('<div class="pixel"></div>');
    $('#container').append($pixel);
  }

  $('.pixel').height(720 / size);
  $('.pixel').width(720 / size);
}

// sets all the pixels color to back to white
function resetPixels() {
  console.log("Reseting...");
  $('.pixel').css("background-color", "white");
}

// returns either black or a random color
function getColor() {
  var color;

  if (isBlack) {
    color = "black";
  } else {
    color = getRandomColor();
  }

  return color;
}

// returns an rgb string with random variables
function getRandomColor() {
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);

  return 'rgb('+r+', '+g+', '+b+')';
}
