$(function(){
  var calendarContainer = $('.calendar');
  Calendar.init(calendarContainer);

  var photoContainer = $('#photos_container');
  Flickr.init(photoContainer);

  $('span.mailme').mailme();
  $('#quotesCarousel').carousel();

  $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  }); 

  var carousel = $('#myCarousel');
  if (! carousel.is(':hidden')) {
    $.each(carousel.find('img'), function(index, img) {
      $(img).attr('src', img.getAttribute('data-src'));
    });
    carousel.carousel();

    var feed = new Instafeed({
      get: 'user',
      userId: 363408176,
      accessToken: '363408176.467ede5.4c61508b403943589d7ffa4535137baf',
      limit: 10
    });
    feed.run();
  }

});
