


var Types = Backbone.Model.extend({
  defaults: function(){
    return {
      name: "Default type name",
      description: "Default type description"
    };
  }
});

var Objects = Backbone.Model.extend({
  defaults: function(){
    return {
      name: "Default object name",
      description: "Default object description",
      geom: {
        'type': 'Point',
        'coordinates': [
             0.0,
             0.0
          ]
      }
     }
   }
});

var ObjList = Backbone.Collection.extend({
  model: Objects,
  url:'http://194.87.110.73:8000/objects'
  
})

var objlist = new ObjList();

var ObjView = Marionette.View.extend({
  tagName: "p",
  initialize: function () {
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
			this.listenTo(this.model, 'visible', this.toggleVisible);
		}
});

var ObjListView = Marionette.CollectionView.extend({
  el: '#container',
  model: Objects,
  template: $('#template-layout').html()
})


var AppView = Backbone.View.extend({

	el: '#container',

	initialize: function() {
		this.render();
	},

	render: function() {
    var dstu_map = L.map('mapid').setView([47.240085, 39.710701], 18);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'LimeBeck was here',
      maxZoom: 19
    }).addTo(dstu_map);
	}
});

var App = Marionette.Application.extend({
  region: '#container',
  
  onStart: function(){
    objList = new ObjListView();
    objList.render()
  }
});

var app = new App();

app.start()