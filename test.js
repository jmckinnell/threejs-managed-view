var ManagedView = require('./');
var loadAndRunScripts = require('loadandrunscripts');
var Resize = require('input-resize');

loadAndRunScripts(
	[
		'bower_components/three.js/three.js',
		'lib/stats.min.js',
		'lib/threex.rendererstats.js'
	],
	function() {
		Resize.minWidth = 600;
		Resize.minHeight = 400;
		var view = new ManagedView.View({
			stats:true
		});

		var cols = 10;
		var rows = 10;

		var minX = -2;
		var minY = -2;
		var rangeX = 4;
		var rangeY = 4;
		
		var geom = new THREE.SphereGeometry(.1, 16, 16);

		var mat = new THREE.MeshBasicMaterial();

		for (var ix = cols - 1; ix >= 0; ix--) {
			var ratioX = ix / cols;
			for (var iy = rows - 1; iy >= 0; iy--) {
				var ratioY = iy / rows;
				var mesh = new THREE.Mesh(geom, mat);
				mesh.position.x = minX + ratioX * rangeX;
				mesh.position.y = minY + ratioY * rangeX;
				view.scene.add(mesh);
			};
		};
	}
)