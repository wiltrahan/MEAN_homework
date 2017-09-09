$(function() {
  $.get('/cities', appendToList);

 $('form').on('submit', function(event) {
    event.preventDefault();
    var form = $(this);
    var cityData = form.serialize();


    $.ajax({
      type: 'POST',
      url: '/cities',
      data: cityData
    }).done(function(cityName) {
      appendToList([cityName]);
      form.trigger('reset');
    });
 });

 function appendToList(cities) {
  var list = [];
  var content, city;
  for(var i in cities) {
    city = cities[i];
    content  = '<a href="/cities/'+city+'">'+city+'</a>';
    list.push($('<li>', {html: content}));
  }
  $('.city-list').append(list);
 }

});
