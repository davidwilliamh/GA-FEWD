// $("#box1").on("click", function(){
//   $("#box1").css("width", "500px");
//   $("#box1").css("height", "500px");
//   $("#box1").css("background-color", "pink");
//   $("#box1").text("I'VE BEEN CLICKED!!!!");
// });

$("#box1").on("click", function() {
  $("#box1").toggleClass("onClick");
  $("#box1").text("I'VE BEEN CLICKED!!!!")
});

$("#box2").on("click", function(){
  $("#box2").css("width", "500px");
  $("#box2").css("height", "500px");
}); 

