Flickr = {
  
  cache: {},

  init: function(container) {
    var self = this;
    var apiKey = "99c539c105b4c5aa15b7d9d903cc7e9c";
    var extras = "description";
    var photosetId = "72157646317762624";

    this.container = container;

    $.getJSON("https://api.flickr.com/services/rest?method=flickr.photosets.getPhotos"+
          "&api_key="+apiKey+
          "&photoset_id="+photosetId+
          "&format=json&nojsoncallback=1"+
         "&extras="+extras
      )
      .done(function(data) {
        self.render(data.photoset.photo);
      });
  },

  render: function(photos) {
    var rendered = Handlebars.templates.photos({photos: photos});
    this.container.html(rendered);    
  }
};
