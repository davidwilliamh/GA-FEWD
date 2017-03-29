console.log("is this working");

// when the user clicks on the button
// show the hidden dropdown div
// when the user clicks on the button again
// hide the dropdown div

$(".filebutton").on("click", function(){
  $("#filedropdown").toggle(); 
});

$(".filebutton").on("focusout", function() {
  $("#filedropdown").css("display", "none");
})

$(".editbutton").on("click", function(){
  $("#editdropdown").toggle();
  });

$(".editbutton").on("focusout", function() {
  $("#editdropdown").css("display", "none");
})