(function() {
	var styles = {
			position: "fixed",
			top:0,
			width:"100%",
			height: "5px",
			background: "transparent"
		},
		stylesBar = {
			width: 0,
			height: "5px",
			background: "red",
			transition: "width 125ms linear"
		},
		windowWidth = window.innerWidth,
		windowHeight = window.innerHeight,
		documentHeight = document.body.clientHeight;


	var createBar = function() {
		var barWrap = document.createElement('div'),
			bar = document.createElement('div');

		barWrap.id = "barWrapper";
		bar.id = "bar";

		barWrap.appendChild(bar);
		document.body.appendChild(barWrap);
		
		for (var i in styles)
	  		document.getElementById("barWrapper").style[i] = styles[i];

	  	for (var k in stylesBar)
	  		document.getElementById("bar").style[k] = stylesBar[k];
	};

								
	if (windowHeight < documentHeight){
		createBar();

		window.onscroll = function () {
			console.log('scroll');
				var x = window.pageYOffset * 100 / (documentHeight - windowHeight),
					z = windowWidth * x / 100;

				document.querySelector('#bar').style.width = z + 'px';
		};
	}

})();