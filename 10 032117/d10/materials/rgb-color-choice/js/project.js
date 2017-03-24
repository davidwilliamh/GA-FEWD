//When the button is clicked
//grab red value
//grab green value
//grab blue value
//add r + g + b
//Change the background color of the wrapper

// $("button").on("click", function() {
//   var userInput = $("input").val();
//   $("h1").text(userInput);
// });

$("a").on("click", function(){
  var userRed = $("input#red").val();
  var userGreen = $("input#green").val();
  var userBlue = $("input#blue").val();

  var rgbVal = "rgb("+userRed+","+userGreen+","+userBlue+")";
  $("#wrapper").css("background-color", rgbVal);

});