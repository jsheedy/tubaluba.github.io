$(function(){

  window.App = {};

  var calendarContainer = $('#calendarContent');
  Calendar.init(calendarContainer);

  var photoContainer = $('#photos_container');
  Flickr.init(photoContainer);

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
  $('span.mailme').mailme();
  $('#quotesCarousel').carousel();
  $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  }); 

  App.youtubalubas = [
    '//www.youtube.com/embed/zJcg7zqqI6Y',
    '//www.youtube.com/embed/0uWxOk5Bdec',
    '//www.youtube.com/embed/C_MRRHbvmoY',
    '//www.youtube.com/embed/5rVU5bQOI_o',
    '//www.youtube.com/embed/stGB8rcJSxg',
    '//www.youtube.com/embed/-BSkNVB6ICE'
  ];

  var cache_key = "YOUTUBALUBA-INDEX";
  var index = lscache.get(cache_key);
  console.log(index);
  if (typeof(index) === 'number') {
    index++;
    if (index >= App.youtubalubas.length) {
      index = 0;
    }
  } else {
    index = Math.floor((Math.random() * App.youtubalubas.length));
  }
  lscache.set(cache_key, index);
  var url = App.youtubalubas[index];
  $('#youtubaluba').attr('src', url);

});
