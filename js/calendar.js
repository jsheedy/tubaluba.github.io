function calendar() {
        var jqxhr = $.getJSON( "tubaluba-calendar.json")
          .done(function(data) {
            var container = $('.calendar');
            var twoDaysAgo = (new Date()).valueOf() / 1000 - 86400*2;
            $.each(data, function(i, item) {

                  //var date_obj = new Date(item.date.split('-'));
                  //var date_obj = new Date(Date.parse(item.date));
                    // ugh.   month is 0 based but the other args to Date aren't.  timzones..  fuck
                    x=$.map(item.date.split('-'), function(e,i) {return parseInt(e);})
                    var date_obj = new Date(x[0],x[1]-1,x[2]);
                  var display = "block";
                    if (date_obj.valueOf()/1000 < twoDaysAgo) {
                      var display = "none";

                    }
                  var e = $('<div class="entry">');
                  e.css('display', display);
                  var fb = $('<a target="_blank" class="fbevent">');
                  if (item.facebook) {
                    fb_image = new Image();
                    fb_image.src = "img/facebook-icon.png";
                   fb.attr('href', item.facebook);
                    fb.append(fb_image);
                  }
                  var d = $('<div class="date">');
                    var time = "";
                    if (item.time) {
                        time = item.time;
                    }
                    d.html(date_obj.toDateString() + " " + time);
                  var venue = $('<div class="venue">');

                    if (item.venue.url) {
                        var l = $('<a>');
                        l.html(item.venue.name);
                        l.attr('href', item.venue.url);
                        l.attr('target', "_blank");
                        venue.append(l);
                    } else {
                        venue.html(item.venue.name);
                    }
                  var address = $('<div class="address">');
                    address.html('<a target="_blank" href="http://maps.google.com?q='+item.venue.address + '">'+item.venue.address+'</a>');
                  var description = $('<p>');
                    description.html(item.description);
                  var poster=null;
                  if (item.poster) {
                      poster = $('<div>');
                      var poster_link = $('<a data-toggle="lightbox" href="#poster-'+ item.id + '">');
                        var img = $('<img style="width:100%" />');
                        img.attr('src', item.poster);
                      poster_link.append(img);

                    var lightbox = $('<div id="poster-' + item.id + '" style="display:none" class="lightbox fade"  tabindex="-1" role="dialog" aria-hidden="true">' +
                        '<div class="lightbox-dialog">' +
                            '<div class="lightbox-content">' +
                                '<img src="' + item.poster + '">' +
                                '<div class="lightbox-caption">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>');
                    poster.append(poster_link);
                    poster.append(lightbox);

                  }

                e.append(fb);
                e.append(d);
                e.append(venue);
                e.append(address);
                e.append(description);
                e.append(poster);
                container.append(e);
            });
            var l = $('<a style="margin: 110px; font-size: 2em;" href="#past" name="past" id="past"> [past shows] </a>');
            l.click(function() {
                $('.calendar .entry').css('display', 'block');
                $('#past').hide();
            });

          container.append('<p style="height: 7px">');
          container.append(l);
          })
          .fail(function() {
            console.log( "error" );
          })
          .always(function() {
            console.log( "complete" );
          });
}
