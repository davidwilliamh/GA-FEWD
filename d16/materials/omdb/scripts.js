$("button").on("click", function() {
  var submit = $("input").val();
  $.getJSON("http://omdbapi.com/?t=" + submit, function(data) {
    $(".title").text(data["Title"]);
    $(".year").text(data["Year"]);
    $(".poster").attr("src", data["Poster"]);
    $(".plot").text(data["Plot"]);
    var liThatIMade = $("<li>" + data["Title"] +  "</li>");
    $(".search-history").append(liThatIMade);
  });
});

$("ul").on("click", function(event) {
  var title = $(event.target).text();
  $.getJSON("http://omdbapi.com/?t=" + "")
  $(event.target).text("http://omdbapi.com/?t=" + event.target)
});
  // Whereas $(this) is the ul