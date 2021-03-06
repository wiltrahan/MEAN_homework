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
    content  = '<a href="/cities/'+city+'">'+city+'</a> ' +
    '<a href="#" data-city="'+city+'"><img src="del.jpg"></a>';

    list.push($('<li>', {html: content}));
  }
  $('.city-list').append(list);
 }

 $('.city-list').on('click', 'a[data-city]', function(event){
  if(!confirm('Are You sure?')) {
    return false;
  }
  var target = $(event.currentTarget);

  $.ajax({
    type: 'DELETE',
    url: '/cities/' + target.data('city')
  }).done(function() {
    target.parents('li').remove();
  });
 });

});
