//when button is clicked
//extract value from input
//convert the number from celsius to fahrenheit
//put ^ value in the <p>


$("button").on("click", function(){
  var celsius = $("input").val();
  var fahrenheit = celsius * 9/5 + 32;
  $("#converted").text(fahrenheit);
});