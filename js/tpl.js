// carga el tpl
function loadTPL(jsonn, tpln, divloadtpl){
   getasJSON(jsonn, function(data, err) {
      getTemplate(tpln, data, function(output, err) {
        $("#"+divloadtpl).html(output);
      });    
   });
}
// se dirige al tpl
function getTemplate(name, context, callback) {
  $.ajax({
    url: 'tpl/' + name + '.html',
    cache: true,
    success: function (data) {
      var tpl = Handlebars.compile(data),
      output = tpl(context);
      callback(output, null);
    },
    error: function(err) {
      callback(null, err);
    }
  });
}

// se conecta al json interno
function getasJSON(json_file, callback){
  $.ajax({
    dataType: "json",
    url: 'json/' + json_file + '.json',
    cache: true,
    success: function (data) {
      callback(data, null);
    },
    error: function(err) {
      callback(null, err);
    }
  });
}