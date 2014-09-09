Calendar = {

  init: function (container) {
    var self = this;
    self.container = container;
    var cacheKey = "calendar";
    var cached = lscache.get(cacheKey);

    if (cached) {
      console.log('cache hit');
      self.render(cached);
    } else {
      $.getJSON( "http://api.bandsintown.com/artists/tubaluba/events.json?callback=?&app_id=TUBALUBABAND.COM")
        .done(function(data) {
          lscache.set(cacheKey, data, 60);
          self.render(data);
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
          console.log( "error importing calendar: " + textStatus, errorThrown );
        });
    }
  },

  render: function(data) {

    var entries = $.map(data, function(item) {
      item.formatted_date = moment(item.datetime).format('MMM D, YYYY h:mm a');
      return item;
    });

    var rendered = Tubaluba.Templates.calendar({entries: entries});
    this.container.html(rendered);    
  }
};

