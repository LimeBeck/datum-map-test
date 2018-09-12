var dstu_map = L.map('mapid').setView([47.240085, 39.710701], 18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets'
}).addTo(dstu_map);



var AppView = Backbone.View.extend({

	el: '#container',

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html("Hello World");
	}
});