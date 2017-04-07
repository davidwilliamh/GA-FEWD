// user inputs city
// click button
// recognize city
// pull weather data

$("button").on("click", function(){
  var city = $("input").val();
  console.log(city);
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=New%20York,%20NY&units=imperial&appid=add7e68bbcf9d051fc9050a57e56b2ed", function(data) {
    console.log(data);
    });
  $("city");
});
