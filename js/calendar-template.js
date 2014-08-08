(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['calendar'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <div class=\"entry\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.facebook), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"date\">\n      ";
  if (helper = helpers.formatted_date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.formatted_date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      ";
  if (helper = helpers.time) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.time); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n    <div class=\"venue\">\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.venue)),stack1 == null || stack1 === false ? stack1 : stack1.url), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    \n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.venue)),stack1 == null || stack1 === false ? stack1 : stack1.address), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <p>";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.poster), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.ticketUrl), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <a target=\"_blank\" href=\"";
  if (helper = helpers.facebook) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.facebook); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"fbevent\">\n        <img src=\"img/facebook-icon.png\">\n      </a>\n    ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <a target=\"_blank\" href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.venue)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.venue)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n      ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.venue)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n      ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <div class=\"address\">\n        <a target=\"_blank\" href=\"http://maps.google.com?q="
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.venue)),stack1 == null || stack1 === false ? stack1 : stack1.address)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.venue)),stack1 == null || stack1 === false ? stack1 : stack1.address)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n      </div>\n      ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <a data-toggle=\"lightbox\" data-type=\"image\" href=\"";
  if (helper = helpers.poster) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.poster); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        <img style=\"width: 100%\" src=\"";
  if (helper = helpers.poster) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.poster); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      </a>\n    ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <a target=\"_blank\" href=\"";
  if (helper = helpers.ticketUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.ticketUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">[buy tickets]</a>\n    ";
  return buffer;
  }

  buffer += "<h2 class=\"box-heading\">Upcoming Shows</h2>\n";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.entries) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.entries); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.entries) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });
})();