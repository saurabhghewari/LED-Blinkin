var gpio = require("gpio");
var gpio4 = gpio.export(4);

setInterval(function() {
	gpio4.set(); 
	setInterval(function(){
		gpio4.reset();
	}, 1000);
}, 1000);
