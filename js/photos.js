Flickr = {

  cache: {},

  init: function(container) {
    var self = this;
    var apiKey = "99c539c105b4c5aa15b7d9d903cc7e9c";
    var extras = "description";
    var photosetId = "72157646317762624";
    var cacheKey = 'flickrphotos';
    this.container = container;

    var cached = lscache.get(cacheKey);

    if (cached) {
      console.log('cache hit');
      self.render(cached.photoset.photo);
    } else {
      console.log('cache miss');
      $.support.cors = true;

      $.getJSON("https://api.flickr.com/services/rest?method=flickr.photosets.getPhotos"+
            "&api_key="+apiKey+
            "&photoset_id="+photosetId+
            "&format=json&jsoncallback=?"+
           "&extras="+extras
        )
        .error(function(data) {
          console.log('error:', data);
        })
        .done(function(data) {
          lscache.set(cacheKey, data, 60);
          self.render(data.photoset.photo);
        })
        .fail(function(data) {
          console.log('flickr API fail: ', data);
        });
    }
  },

  render: function(photos) {
    var rendered = Tubaluba.Templates.photos({photos: photos});
    this.container.html(rendered);
  }
};
