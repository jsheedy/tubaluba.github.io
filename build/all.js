!function(a,b){"function"==typeof define&&define.amd?define([],b):"undefined"!=typeof module&&module.exports?module.exports=b():a.lscache=b()}(this,function(){function a(){var a="__lscachetest__",b=a;if(void 0!==i)return i;try{f(a,b),g(a),i=!0}catch(c){i=!1}return i}function b(){return void 0===j&&(j=null!=window.JSON),j}function c(a){return a+l}function d(){return Math.floor((new Date).getTime()/n)}function e(a){return localStorage.getItem(k+p+a)}function f(a,b){localStorage.removeItem(k+p+a),localStorage.setItem(k+p+a,b)}function g(a){localStorage.removeItem(k+p+a)}function h(a,b){q&&"console"in window&&"function"==typeof window.console.warn&&(window.console.warn("lscache - "+a),b&&window.console.warn("lscache - The error was: "+b.message))}var i,j,k="lscache-",l="-cacheexpiration",m=10,n=6e4,o=Math.floor(864e13/n),p="",q=!1,r={set:function(i,j,n){if(a()){if("string"!=typeof j){if(!b())return;try{j=JSON.stringify(j)}catch(q){return}}try{f(i,j)}catch(q){if("QUOTA_EXCEEDED_ERR"!==q.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==q.name&&"QuotaExceededError"!==q.name)return void h("Could not add item with key '"+i+"'",q);for(var r,s=[],t=0;t<localStorage.length;t++)if(r=localStorage.key(t),0===r.indexOf(k+p)&&r.indexOf(l)<0){var u=r.substr((k+p).length),v=c(u),w=e(v);w=w?parseInt(w,m):o,s.push({key:u,size:(e(u)||"").length,expiration:w})}s.sort(function(a,b){return b.expiration-a.expiration});for(var x=(j||"").length;s.length&&x>0;)r=s.pop(),h("Cache is full, removing item with key '"+i+"'"),g(r.key),g(c(r.key)),x-=r.size;try{f(i,j)}catch(q){return void h("Could not add item with key '"+i+"', perhaps it's too big?",q)}}n?f(c(i),(d()+n).toString(m)):g(c(i))}},get:function(f){if(!a())return null;var h=c(f),i=e(h);if(i){var j=parseInt(i,m);if(d()>=j)return g(f),g(h),null}var k=e(f);if(!k||!b())return k;try{return JSON.parse(k)}catch(l){return k}},remove:function(b){return a()?(g(b),void g(c(b))):null},supported:function(){return a()},flush:function(){if(a())for(var b=localStorage.length-1;b>=0;--b){var c=localStorage.key(b);0===c.indexOf(k+p)&&localStorage.removeItem(c)}},setBucket:function(a){p=a},resetBucket:function(){p=""},enableWarnings:function(a){q=a}};return r});var Handlebars=function(){var a=function(){"use strict";function a(a){this.string=a}var b;return a.prototype.toString=function(){return""+this.string},b=a}(),b=function(a){"use strict";function b(a){return h[a]||"&amp;"}function c(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c])}function d(a){return a instanceof g?a.toString():a||0===a?(a=""+a,j.test(a)?a.replace(i,b):a):""}function e(a){return a||0===a?m(a)&&0===a.length?!0:!1:!0}var f={},g=a,h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},i=/[&<>"'`]/g,j=/[&<>"'`]/;f.extend=c;var k=Object.prototype.toString;f.toString=k;var l=function(a){return"function"==typeof a};l(/x/)&&(l=function(a){return"function"==typeof a&&"[object Function]"===k.call(a)});var l;f.isFunction=l;var m=Array.isArray||function(a){return a&&"object"==typeof a?"[object Array]"===k.call(a):!1};return f.isArray=m,f.escapeExpression=d,f.isEmpty=e,f}(a),c=function(){"use strict";function a(a,b){var d;b&&b.firstLine&&(d=b.firstLine,a+=" - "+d+":"+b.firstColumn);for(var e=Error.prototype.constructor.call(this,a),f=0;f<c.length;f++)this[c[f]]=e[c[f]];d&&(this.lineNumber=d,this.column=b.firstColumn)}var b,c=["description","fileName","lineNumber","message","name","number","stack"];return a.prototype=new Error,b=a}(),d=function(a,b){"use strict";function c(a,b){this.helpers=a||{},this.partials=b||{},d(this)}function d(a){a.registerHelper("helperMissing",function(a){if(2===arguments.length)return void 0;throw new h("Missing helper: '"+a+"'")}),a.registerHelper("blockHelperMissing",function(b,c){var d=c.inverse||function(){},e=c.fn;return m(b)&&(b=b.call(this)),b===!0?e(this):b===!1||null==b?d(this):l(b)?b.length>0?a.helpers.each(b,c):d(this):e(b)}),a.registerHelper("each",function(a,b){var c,d=b.fn,e=b.inverse,f=0,g="";if(m(a)&&(a=a.call(this)),b.data&&(c=q(b.data)),a&&"object"==typeof a)if(l(a))for(var h=a.length;h>f;f++)c&&(c.index=f,c.first=0===f,c.last=f===a.length-1),g+=d(a[f],{data:c});else for(var i in a)a.hasOwnProperty(i)&&(c&&(c.key=i,c.index=f,c.first=0===f),g+=d(a[i],{data:c}),f++);return 0===f&&(g=e(this)),g}),a.registerHelper("if",function(a,b){return m(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||g.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})}),a.registerHelper("with",function(a,b){return m(a)&&(a=a.call(this)),g.isEmpty(a)?void 0:b.fn(a)}),a.registerHelper("log",function(b,c){var d=c.data&&null!=c.data.level?parseInt(c.data.level,10):1;a.log(d,b)})}function e(a,b){p.log(a,b)}var f={},g=a,h=b,i="1.3.0";f.VERSION=i;var j=4;f.COMPILER_REVISION=j;var k={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"};f.REVISION_CHANGES=k;var l=g.isArray,m=g.isFunction,n=g.toString,o="[object Object]";f.HandlebarsEnvironment=c,c.prototype={constructor:c,logger:p,log:e,registerHelper:function(a,b,c){if(n.call(a)===o){if(c||b)throw new h("Arg not supported with multiple helpers");g.extend(this.helpers,a)}else c&&(b.not=c),this.helpers[a]=b},registerPartial:function(a,b){n.call(a)===o?g.extend(this.partials,a):this.partials[a]=b}};var p={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(a,b){if(p.level<=a){var c=p.methodMap[a];"undefined"!=typeof console&&console[c]&&console[c].call(console,b)}}};f.logger=p,f.log=e;var q=function(a){var b={};return g.extend(b,a),b};return f.createFrame=q,f}(b,c),e=function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=m;if(b!==c){if(c>b){var d=n[c],e=n[b];throw new l("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new l("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){if(!b)throw new l("No environment passed to template");var c=function(a,c,d,e,f,g){var h=b.VM.invokePartial.apply(this,arguments);if(null!=h)return h;if(b.compile){var i={helpers:e,partials:f,data:g};return f[c]=b.compile(a,{data:void 0!==g},b),f[c](d,i)}throw new l("The partial "+c+" could not be compiled when running in runtime-only mode")},d={escapeExpression:k.escapeExpression,invokePartial:c,programs:[],program:function(a,b,c){var d=this.programs[a];return c?d=g(a,b,c):d||(d=this.programs[a]=g(a,b)),d},merge:function(a,b){var c=a||b;return a&&b&&a!==b&&(c={},k.extend(c,b),k.extend(c,a)),c},programWithDepth:b.VM.programWithDepth,noop:b.VM.noop,compilerInfo:null};return function(c,e){e=e||{};var f,g,h=e.partial?e:b;e.partial||(f=e.helpers,g=e.partials);var i=a.call(d,h,c,f,g,e.data);return e.partial||b.VM.checkRevision(d.compilerInfo),i}}function f(a,b,c){var d=Array.prototype.slice.call(arguments,3),e=function(a,e){return e=e||{},b.apply(this,[a,e.data||c].concat(d))};return e.program=a,e.depth=d.length,e}function g(a,b,c){var d=function(a,d){return d=d||{},b(a,d.data||c)};return d.program=a,d.depth=0,d}function h(a,b,c,d,e,f){var g={partial:!0,helpers:d,partials:e,data:f};if(void 0===a)throw new l("The partial "+b+" could not be found");return a instanceof Function?a(c,g):void 0}function i(){return""}var j={},k=a,l=b,m=c.COMPILER_REVISION,n=c.REVISION_CHANGES;return j.checkRevision=d,j.template=e,j.programWithDepth=f,j.program=g,j.invokePartial=h,j.noop=i,j}(b,c,d),f=function(a,b,c,d,e){"use strict";var f,g=a,h=b,i=c,j=d,k=e,l=function(){var a=new g.HandlebarsEnvironment;return j.extend(a,g),a.SafeString=h,a.Exception=i,a.Utils=j,a.VM=k,a.template=function(b){return k.template(b,a)},a},m=l();return m.create=l,f=m}(d,a,c,b,e);return f}();!function(){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||{};b.calendar=a(function(a,b,c,d,e){function f(a,b){var d,e,f="";return f+='\n  <div class="entry">\n    ',d=c["if"].call(a,a&&a.facebook,{hash:{},inverse:s.noop,fn:s.program(2,g,b),data:b}),(d||0===d)&&(f+=d),f+='\n    <div class="date">\n      ',(e=c.formatted_date)?d=e.call(a,{hash:{},data:b}):(e=a&&a.formatted_date,d=typeof e===q?e.call(a,{hash:{},data:b}):e),f+=r(d)+"\n      ",(e=c.time)?d=e.call(a,{hash:{},data:b}):(e=a&&a.time,d=typeof e===q?e.call(a,{hash:{},data:b}):e),f+=r(d)+'\n    </div>\n    <div class="venue">\n      ',d=c["if"].call(a,(d=a&&a.venue,null==d||d===!1?d:d.url),{hash:{},inverse:s.program(6,i,b),fn:s.program(4,h,b),data:b}),(d||0===d)&&(f+=d),f+="\n    \n      ",d=c["if"].call(a,(d=a&&a.venue,null==d||d===!1?d:d.address),{hash:{},inverse:s.noop,fn:s.program(8,j,b),data:b}),(d||0===d)&&(f+=d),f+="\n    </div>\n\n    <p>",(e=c.description)?d=e.call(a,{hash:{},data:b}):(e=a&&a.description,d=typeof e===q?e.call(a,{hash:{},data:b}):e),(d||0===d)&&(f+=d),f+="</p>\n    ",d=c["if"].call(a,a&&a.poster,{hash:{},inverse:s.noop,fn:s.program(10,k,b),data:b}),(d||0===d)&&(f+=d),f+="\n    ",d=c["if"].call(a,a&&a.ticketUrl,{hash:{},inverse:s.noop,fn:s.program(12,l,b),data:b}),(d||0===d)&&(f+=d),f+="\n  </div>\n"}function g(a,b){var d,e,f="";return f+='\n      <a target="_blank" href="',(e=c.facebook)?d=e.call(a,{hash:{},data:b}):(e=a&&a.facebook,d=typeof e===q?e.call(a,{hash:{},data:b}):e),f+=r(d)+'" class="fbevent">\n        <img src="img/facebook-icon.png">\n      </a>\n    '}function h(a){var b,c="";return c+='\n        <a target="_blank" href="'+r((b=a&&a.venue,b=null==b||b===!1?b:b.url,typeof b===q?b.apply(a):b))+'">'+r((b=a&&a.venue,b=null==b||b===!1?b:b.name,typeof b===q?b.apply(a):b))+"</a>\n      "}function i(a){var b,c="";return c+="\n        "+r((b=a&&a.venue,b=null==b||b===!1?b:b.name,typeof b===q?b.apply(a):b))+"\n      "}function j(a){var b,c="";return c+='\n      <div class="address">\n        <a target="_blank" href="http://maps.google.com?q='+r((b=a&&a.venue,b=null==b||b===!1?b:b.address,typeof b===q?b.apply(a):b))+'">'+r((b=a&&a.venue,b=null==b||b===!1?b:b.address,typeof b===q?b.apply(a):b))+"</a>\n      </div>\n      "}function k(a,b){var d,e,f="";return f+='\n      <a data-toggle="lightbox" data-type="image" href="',(e=c.poster)?d=e.call(a,{hash:{},data:b}):(e=a&&a.poster,d=typeof e===q?e.call(a,{hash:{},data:b}):e),f+=r(d)+'">\n        <img style="width: 100%" src="',(e=c.poster)?d=e.call(a,{hash:{},data:b}):(e=a&&a.poster,d=typeof e===q?e.call(a,{hash:{},data:b}):e),f+=r(d)+'">\n      </a>\n    '}function l(a,b){var d,e,f="";return f+='\n      <a target="_blank" href="',(e=c.ticketUrl)?d=e.call(a,{hash:{},data:b}):(e=a&&a.ticketUrl,d=typeof e===q?e.call(a,{hash:{},data:b}):e),f+=r(d)+'">[buy tickets]</a>\n    '}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var m,n,o,p="",q="function",r=this.escapeExpression,s=this,t=c.blockHelperMissing;return p+='<h2 class="box-heading">Upcoming Shows</h2>\n',o={hash:{},inverse:s.noop,fn:s.program(1,f,e),data:e},(n=c.entries)?m=n.call(b,o):(n=b&&b.entries,m=typeof n===q?n.call(b,o):n),c.entries||(m=t.call(b,m,{hash:{},inverse:s.noop,fn:s.program(1,f,e),data:e})),(m||0===m)&&(p+=m),p})}(),Calendar={init:function(){var a=this,b="calendar",c=lscache.get(b);if(c)console.log("cache hit"),a.render(c);else{$.getJSON("tubaluba-calendar.json").done(function(c){lscache.set(b,c,60),a.render(c)}).fail(function(a,b,c){console.log("error importing calendar: "+b,c)})}},render:function(a){var b=[],c=(new Date).valueOf()/1e3-172800;$.each(a,function(a,d){x=$.map(d.date.split("-"),function(a){return parseInt(a,10)});var e=new Date(x[0],x[1]-1,x[2]);d.formatted_date=e.toDateString(),e.valueOf()/1e3>c&&b.push(d)});var d=Handlebars.templates.calendar({entries:b});$("#calendarContent").html(d)}},function(){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||{};b.photos=a(function(a,b,c,d,e){function f(a,b){var d,e,f="";return f+='\n	  <div class="photo">\n			<a data-title="TUBALUBA" data-footer="'+l((d=a&&a.description,d=null==d||d===!1?d:d._content,typeof d===k?d.apply(a):d))+'" data-toggle="lightbox" data-type="image" href="http://farm',(e=c.farm)?d=e.call(a,{hash:{},data:b}):(e=a&&a.farm,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+".staticflickr.com/",(e=c.server)?d=e.call(a,{hash:{},data:b}):(e=a&&a.server,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"/",(e=c.id)?d=e.call(a,{hash:{},data:b}):(e=a&&a.id,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"_",(e=c.secret)?d=e.call(a,{hash:{},data:b}):(e=a&&a.secret,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+'_b.jpg">\n		  	<img style="" src="http://farm',(e=c.farm)?d=e.call(a,{hash:{},data:b}):(e=a&&a.farm,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+".staticflickr.com/",(e=c.server)?d=e.call(a,{hash:{},data:b}):(e=a&&a.server,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"/",(e=c.id)?d=e.call(a,{hash:{},data:b}):(e=a&&a.id,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+"_",(e=c.secret)?d=e.call(a,{hash:{},data:b}):(e=a&&a.secret,d=typeof e===k?e.call(a,{hash:{},data:b}):e),f+=l(d)+'_m.jpg">\n			</a>\n	  </div>\n	'}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i,j="",k="function",l=this.escapeExpression,m=this,n=c.blockHelperMissing;return j+='\n<div class="photos">\n	',i={hash:{},inverse:m.noop,fn:m.program(1,f,e),data:e},(h=c.photos)?g=h.call(b,i):(h=b&&b.photos,g=typeof h===k?h.call(b,i):h),c.photos||(g=n.call(b,g,{hash:{},inverse:m.noop,fn:m.program(1,f,e),data:e})),(g||0===g)&&(j+=g),j+="\n</div>\n"})}(),Flickr={cache:{},init:function(a){var b=this,c="99c539c105b4c5aa15b7d9d903cc7e9c",d="description",e="72157646317762624",f="flickrphotos";this.container=a;var g=lscache.get(f);g?(console.log("cache hit"),b.render(g.photoset.photo)):(console.log("cache miss"),$.support.cors=!0,$.getJSON("https://api.flickr.com/services/rest?method=flickr.photosets.getPhotos&api_key="+c+"&photoset_id="+e+"&format=json&jsoncallback=?&extras="+d).error(function(a){console.log("error:",a)}).done(function(a){lscache.set(f,a,60),b.render(a.photoset.photo)}).fail(function(a){console.log("flickr API fail: ",a)}))},render:function(a){var b=Handlebars.templates.photos({photos:a});this.container.html(b)}},jQuery.fn.mailme=function(){var a=/ at /,b=/ dot /g;this.each(function(){var c=jQuery(this).text().replace(a,"@").replace(b,"."),d=jQuery(this).attr("title");$(this).after('<a href="mailto:'+c+'" title="'+d+'">'+c+"</a>").remove()})},function(){"use strict";var a,b;a=jQuery,b=function(b,c){var d,e,f,g=this;return this.options=a.extend({title:null,footer:null,remote:null},a.fn.ekkoLightbox.defaults,c||{}),this.$element=a(b),d="",this.modal_id=this.options.modal_id?this.options.modal_id:"ekkoLightbox-"+Math.floor(1e3*Math.random()+1),f='<div class="modal-header"'+(this.options.title||this.options.always_show_close?"":' style="display:none"')+'><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">'+(this.options.title||"&nbsp;")+"</h4></div>",e='<div class="modal-footer"'+(this.options.footer?"":' style="display:none"')+">"+this.options.footer+"</div>",a(document.body).append('<div id="'+this.modal_id+'" class="ekko-lightbox modal fade" tabindex="-1"><div class="modal-dialog"><div class="modal-content">'+f+'<div class="modal-body"><div class="ekko-lightbox-container"><div></div></div></div>'+e+"</div></div></div>"),this.modal=a("#"+this.modal_id),this.modal_dialog=this.modal.find(".modal-dialog").first(),this.modal_content=this.modal.find(".modal-content").first(),this.modal_body=this.modal.find(".modal-body").first(),this.lightbox_container=this.modal_body.find(".ekko-lightbox-container").first(),this.lightbox_body=this.lightbox_container.find("> div:first-child").first(),this.showLoading(),this.modal_arrows=null,this.border={top:parseFloat(this.modal_dialog.css("border-top-width"))+parseFloat(this.modal_content.css("border-top-width"))+parseFloat(this.modal_body.css("border-top-width")),right:parseFloat(this.modal_dialog.css("border-right-width"))+parseFloat(this.modal_content.css("border-right-width"))+parseFloat(this.modal_body.css("border-right-width")),bottom:parseFloat(this.modal_dialog.css("border-bottom-width"))+parseFloat(this.modal_content.css("border-bottom-width"))+parseFloat(this.modal_body.css("border-bottom-width")),left:parseFloat(this.modal_dialog.css("border-left-width"))+parseFloat(this.modal_content.css("border-left-width"))+parseFloat(this.modal_body.css("border-left-width"))},this.padding={top:parseFloat(this.modal_dialog.css("padding-top"))+parseFloat(this.modal_content.css("padding-top"))+parseFloat(this.modal_body.css("padding-top")),right:parseFloat(this.modal_dialog.css("padding-right"))+parseFloat(this.modal_content.css("padding-right"))+parseFloat(this.modal_body.css("padding-right")),bottom:parseFloat(this.modal_dialog.css("padding-bottom"))+parseFloat(this.modal_content.css("padding-bottom"))+parseFloat(this.modal_body.css("padding-bottom")),left:parseFloat(this.modal_dialog.css("padding-left"))+parseFloat(this.modal_content.css("padding-left"))+parseFloat(this.modal_body.css("padding-left"))},this.modal.on("show.bs.modal",this.options.onShow.bind(this)).on("shown.bs.modal",function(){return g.modal_shown(),g.options.onShown.call(g)}).on("hide.bs.modal",this.options.onHide.bind(this)).on("hidden.bs.modal",function(){return g.gallery&&a(document).off("keydown.ekkoLightbox"),g.modal.remove(),g.options.onHidden.call(g)}).modal("show",c),this.modal},b.prototype={modal_shown:function(){var b,c=this;return this.options.remote?(this.gallery=this.$element.data("gallery"),this.gallery&&(this.gallery_items="document.body"===this.options.gallery_parent_selector||""===this.options.gallery_parent_selector?a(document.body).find('*[data-toggle="lightbox"][data-gallery="'+this.gallery+'"]'):this.$element.parents(this.options.gallery_parent_selector).first().find('*[data-toggle="lightbox"][data-gallery="'+this.gallery+'"]'),this.gallery_index=this.gallery_items.index(this.$element),a(document).on("keydown.ekkoLightbox",this.navigate.bind(this)),this.options.directional_arrows&&this.gallery_items.length>1&&(this.lightbox_container.prepend('<div class="ekko-lightbox-nav-overlay"><a href="#" class="'+this.strip_stops(this.options.left_arrow_class)+'"></a><a href="#" class="'+this.strip_stops(this.options.right_arrow_class)+'"></a></div>'),this.modal_arrows=this.lightbox_container.find("div.ekko-lightbox-nav-overlay").first(),this.lightbox_container.find("a"+this.strip_spaces(this.options.left_arrow_class)).on("click",function(a){return a.preventDefault(),c.navigate_left()}),this.lightbox_container.find("a"+this.strip_spaces(this.options.right_arrow_class)).on("click",function(a){return a.preventDefault(),c.navigate_right()}))),this.options.type?"image"===this.options.type?this.preloadImage(this.options.remote,!0):"youtube"===this.options.type&&(b=this.getYoutubeId(this.options.remote))?this.showYoutubeVideo(b):"vimeo"===this.options.type?this.showVimeoVideo(this.options.remote):"instagram"===this.options.type?this.showInstagramVideo(this.options.remote):this.error('Could not detect remote target type. Force the type using data-type="image|youtube|vimeo"'):this.detectRemoteType(this.options.remote)):this.error("No remote target given")},strip_stops:function(a){return a.replace(/\./g,"")},strip_spaces:function(a){return a.replace(/\s/g,"")},isImage:function(a){return a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSwf:function(a){return a.match(/\.(swf)((\?|#).*)?$/i)},getYoutubeId:function(a){var b;return b=a.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/),b&&11===b[2].length?b[2]:!1},getVimeoId:function(a){return a.indexOf("vimeo")>0?a:!1},getInstagramId:function(a){return a.indexOf("instagram")>0?a:!1},navigate:function(a){if(a=a||window.event,39===a.keyCode||37===a.keyCode){if(39===a.keyCode)return this.navigate_right();if(37===a.keyCode)return this.navigate_left()}},navigate_left:function(){var b;return this.showLoading(),1!==this.gallery_items.length?(0===this.gallery_index?this.gallery_index=this.gallery_items.length-1:this.gallery_index--,this.$element=a(this.gallery_items.get(this.gallery_index)),this.updateTitleAndFooter(),b=this.$element.attr("data-remote")||this.$element.attr("href"),this.detectRemoteType(b,this.$element.attr("data-type"))):void 0},navigate_right:function(){var b,c;return this.showLoading(),1!==this.gallery_items.length?(this.gallery_index===this.gallery_items.length-1?this.gallery_index=0:this.gallery_index++,this.$element=a(this.gallery_items.get(this.gallery_index)),c=this.$element.attr("data-remote")||this.$element.attr("href"),this.updateTitleAndFooter(),this.detectRemoteType(c,this.$element.attr("data-type")),this.gallery_index+1<this.gallery_items.length&&(b=a(this.gallery_items.get(this.gallery_index+1),!1),c=b.attr("data-remote")||b.attr("href"),"image"===b.attr("data-type")||this.isImage(c))?this.preloadImage(c,!1):void 0):void 0},detectRemoteType:function(a,b){var c;return"image"===b||this.isImage(a)?(this.options.type="image",this.preloadImage(a,!0)):"youtube"===b||(c=this.getYoutubeId(a))?(this.options.type="youtube",this.showYoutubeVideo(c)):"vimeo"===b||(c=this.getVimeoId(a))?(this.options.type="vimeo",this.showVimeoVideo(c)):"instagram"===b||(c=this.getInstagramId(a))?(this.options.type="instagram",this.showInstagramVideo(c)):this.error('Could not detect remote target type. Force the type using data-type="image|youtube|vimeo"')},updateTitleAndFooter:function(){var a,b,c,d;return c=this.modal_content.find(".modal-header"),b=this.modal_content.find(".modal-footer"),d=this.$element.data("title")||"",a=this.$element.data("footer")||"",d||this.options.always_show_close?c.css("display","").find(".modal-title").html(d||"&nbsp;"):c.css("display","none"),a?b.css("display","").html(a):b.css("display","none"),this},showLoading:function(){return this.lightbox_body.html('<div class="modal-loading">Loading..</div>'),this},showYoutubeVideo:function(a){var b,c,d;return b=560/315,d=this.$element.data("width")||560,d=this.checkDimensions(d),c=d/b,this.resize(d),this.lightbox_body.html('<iframe width="'+d+'" height="'+c+'" src="//www.youtube.com/embed/'+a+'?badge=0&autoplay=1&html5=1" frameborder="0" allowfullscreen></iframe>'),this.modal_arrows?this.modal_arrows.css("display","none"):void 0},showVimeoVideo:function(a){var b,c,d;return b=500/281,d=this.$element.data("width")||560,d=this.checkDimensions(d),c=d/b,this.resize(d),this.lightbox_body.html('<iframe width="'+d+'" height="'+c+'" src="'+a+'?autoplay=1" frameborder="0" allowfullscreen></iframe>'),this.modal_arrows?this.modal_arrows.css("display","none"):void 0},showInstagramVideo:function(a){var b,c;return c=this.$element.data("width")||612,c=this.checkDimensions(c),b=c,this.resize(c),this.lightbox_body.html('<iframe width="'+c+'" height="'+b+'" src="'+this.addTrailingSlash(a)+'embed/" frameborder="0" allowfullscreen></iframe>'),this.modal_arrows?this.modal_arrows.css("display","none"):void 0},error:function(a){return this.lightbox_body.html(a),this},preloadImage:function(b,c){var d,e=this;return d=new Image,(null==c||c===!0)&&(d.onload=function(){var b;return b=a("<img />"),b.attr("src",d.src),b.addClass("img-responsive"),e.lightbox_body.html(b),e.modal_arrows&&e.modal_arrows.css("display","block"),e.resize(d.width)},d.onerror=function(){return e.error("Failed to load image: "+b)}),d.src=b,d},resize:function(b){var c;return c=b+this.border.left+this.padding.left+this.padding.right+this.border.right,this.modal_dialog.css("width","auto").css("max-width",c),this.lightbox_container.find("a").css("padding-top",function(){return a(this).parent().height()/2}),this},checkDimensions:function(a){var b,c;return c=a+this.border.left+this.padding.left+this.padding.right+this.border.right,b=document.body.clientWidth,c>b&&(a=this.modal_body.width()),a},close:function(){return this.modal.modal("hide")},addTrailingSlash:function(a){return"/"!==a.substr(-1)&&(a+="/"),a}},a.fn.ekkoLightbox=function(c){return this.each(function(){var d;return d=a(this),c=a.extend({remote:d.attr("data-remote")||d.attr("href"),gallery_parent_selector:d.attr("data-parent"),type:d.attr("data-type")},c,d.data()),new b(this,c),this})},a.fn.ekkoLightbox.defaults={gallery_parent_selector:"*:not(.row)",left_arrow_class:".glyphicon .glyphicon-chevron-left",right_arrow_class:".glyphicon .glyphicon-chevron-right",directional_arrows:!0,type:null,always_show_close:!0,onShow:function(){},onShown:function(){},onHide:function(){},onHidden:function(){}}}.call(this),function(){var a,b;a=function(){function a(a,b){var c,d;if(this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",links:!0,mock:!1,useHttp:!1},"object"==typeof a)for(c in a)d=a[c],this.options[c]=d;this.context=null!=b?b:this,this.unique=this._genKey()}return a.prototype.hasNext=function(){return"string"==typeof this.context.nextUrl&&this.context.nextUrl.length>0},a.prototype.next=function(){return this.hasNext()?this.run(this.context.nextUrl):!1},a.prototype.run=function(b){var c,d,e;if("string"!=typeof this.options.clientId&&"string"!=typeof this.options.accessToken)throw new Error("Missing clientId or accessToken.");if("string"!=typeof this.options.accessToken&&"string"!=typeof this.options.clientId)throw new Error("Missing clientId or accessToken.");return null!=this.options.before&&"function"==typeof this.options.before&&this.options.before.call(this),"undefined"!=typeof document&&null!==document&&(e=document.createElement("script"),e.id="instafeed-fetcher",e.src=b||this._buildUrl(),c=document.getElementsByTagName("head"),c[0].appendChild(e),d="instafeedCache"+this.unique,window[d]=new a(this.options,this),window[d].unique=this.unique),!0},a.prototype.parse=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;if("object"!=typeof a){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(200!==a.meta.code){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,a.meta.error_message),!1;throw new Error("Error from Instagram: "+a.meta.error_message)}if(0===a.data.length){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}if(null!=this.options.success&&"function"==typeof this.options.success&&this.options.success.call(this,a),this.context.nextUrl="",null!=a.pagination&&(this.context.nextUrl=a.pagination.next_url),"none"!==this.options.sortBy)switch(o="random"===this.options.sortBy?["","random"]:this.options.sortBy.split("-"),n="least"===o[0]?!0:!1,o[1]){case"random":a.data.sort(function(){return.5-Math.random()});break;case"recent":a.data=this._sortBy(a.data,"created_time",n);break;case"liked":a.data=this._sortBy(a.data,"likes.count",n);break;case"commented":a.data=this._sortBy(a.data,"comments.count",n);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}if("undefined"!=typeof document&&null!==document&&this.options.mock===!1){if(i=a.data,null!=this.options.limit&&i.length>this.options.limit&&(i=i.slice(0,this.options.limit+1||9e9)),c=document.createDocumentFragment(),null!=this.options.filter&&"function"==typeof this.options.filter&&(i=this._filter(i,this.options.filter)),null!=this.options.template&&"string"==typeof this.options.template){for(e="",g="",k="",p=document.createElement("div"),q=0,t=i.length;t>q;q++)f=i[q],h=f.images[this.options.resolution].url,this.options.useHttp||(h=h.replace("http://","//")),g=this._makeTemplate(this.options.template,{model:f,id:f.id,link:f.link,image:h,caption:this._getObjectProperty(f,"caption.text"),likes:f.likes.count,comments:f.comments.count,location:this._getObjectProperty(f,"location.name")}),e+=g;for(p.innerHTML=e,w=[].slice.call(p.childNodes),r=0,u=w.length;u>r;r++)m=w[r],c.appendChild(m)}else for(s=0,v=i.length;v>s;s++)f=i[s],j=document.createElement("img"),h=f.images[this.options.resolution].url,this.options.useHttp||(h=h.replace("http://","//")),j.src=h,this.options.links===!0?(b=document.createElement("a"),b.href=f.link,b.appendChild(j),c.appendChild(b)):c.appendChild(j);document.getElementById(this.options.target).appendChild(c),d=document.getElementsByTagName("head")[0],d.removeChild(document.getElementById("instafeed-fetcher")),l="instafeedCache"+this.unique,window[l]=void 0;try{delete window[l]}catch(x){}}return null!=this.options.after&&"function"==typeof this.options.after&&this.options.after.call(this),!0},a.prototype._buildUrl=function(){var a,b,c;switch(a="https://api.instagram.com/v1",this.options.get){case"popular":b="media/popular";break;case"tagged":if("string"!=typeof this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");b="tags/"+this.options.tagName+"/media/recent";break;case"location":if("number"!=typeof this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");b="locations/"+this.options.locationId+"/media/recent";break;case"user":if("number"!=typeof this.options.userId)throw new Error("No user specified. Use the 'userId' option.");if("string"!=typeof this.options.accessToken)throw new Error("No access token. Use the 'accessToken' option.");b="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return c=""+a+"/"+b,c+=null!=this.options.accessToken?"?access_token="+this.options.accessToken:"?client_id="+this.options.clientId,null!=this.options.limit&&(c+="&count="+this.options.limit),c+="&callback=instafeedCache"+this.unique+".parse"},a.prototype._genKey=function(){var a;return a=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)},""+a()+a()+a()+a()},a.prototype._makeTemplate=function(a,b){var c,d,e,f,g;for(d=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,c=a;d.test(c);)e=c.match(d)[1],f=null!=(g=this._getObjectProperty(b,e))?g:"",c=c.replace(d,""+f);return c},a.prototype._getObjectProperty=function(a,b){var c,d;for(b=b.replace(/\[(\w+)\]/g,".$1"),d=b.split(".");d.length;){if(c=d.shift(),!(null!=a&&c in a))return null;a=a[c]}return a},a.prototype._sortBy=function(a,b,c){var d;return d=function(a,d){var e,f;return e=this._getObjectProperty(a,b),f=this._getObjectProperty(d,b),c?e>f?1:-1:f>e?1:-1},a.sort(d.bind(this)),a},a.prototype._filter=function(a,b){var c,d,e,f,g;for(c=[],e=function(a){return b(a)?c.push(a):void 0},f=0,g=a.length;g>f;f++)d=a[f],e(d);return c},a}(),b="undefined"!=typeof exports&&null!==exports?exports:window,b.Instafeed=a}.call(this),$(function(){var a=$(".calendar");Calendar.init(a);var b=$("#photos_container");Flickr.init(b);var c=$("#myCarousel");if(!c.is(":hidden")){$.each(c.find("img"),function(a,b){$(b).attr("src",b.getAttribute("data-src"))}),c.carousel();var d=new Instafeed({get:"user",userId:363408176,accessToken:"363408176.467ede5.4c61508b403943589d7ffa4535137baf",limit:10});d.run()}$("span.mailme").mailme(),$("#quotesCarousel").carousel(),$(document).delegate('*[data-toggle="lightbox"]',"click",function(a){a.preventDefault(),$(this).ekkoLightbox()})});
//# sourceMappingURL=all.js.map