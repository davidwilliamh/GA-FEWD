console.log("Hey bitch");



//   var clickCount = 0;
//   var originalText = $("p.cool").text();

// $("button").on("click", function() {
//   clickCount = clickCount + 1;
//   console.log(clickCount);
//   if (clickCount === 2) {
//     $("p.cool").text("SOMEONE CLICKED THE BUTTON TWICE!!!");
//   } else {
//     $("p.cool").text(originalText);
//   }
// });


// $("button").on("click", function(){
//   var input = $("input").val();
//   $("p.cool").text(input)
// });

$("button").on("click", function() {
  var userInput = $("input").val();
  $("h1").text(userInput);
});