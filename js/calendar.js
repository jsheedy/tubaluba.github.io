Calendar = {

  init: function (container) {
    var self = this;
    var cacheKey = "calendar";
    var cached = lscache.get(cacheKey);

    if (cached) {
      console.log('cache hit');
      self.render(cached);
    } else {
      var jqxhr = $.getJSON( "tubaluba-calendar.json")
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

    var entries = [];
    var twoDaysAgo = (new Date()).valueOf() / 1000 - 86400*2;
    $.each(data, function(i, item) {
      // month is 0 based but the other args to Date aren't
      x=$.map(item.date.split('-'), function(e,i) {return parseInt(e, 10);});
      var date_obj = new Date(x[0],x[1]-1,x[2]);
      item.formatted_date = date_obj.toDateString();
      if (date_obj.valueOf()/1000 > twoDaysAgo) {
        entries.push(item);
      }
    });

    var rendered = Handlebars.templates.calendar({entries: entries});
    $('#calendarContent').html(rendered);    
  }
};

