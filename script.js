document.addEventListener("DOMContentLoaded", function () {
	var flagger = new Swastikizer();

	var sampleElements = document.getElementsByClassName("sample");

	for (var i = 0, l = sampleElements.length; i < l; i++) {
		var sample = new Sample(sampleElements[i]);
		sample.click(function () {
			flagger.setColors(this.color1, this.color2, this.color3);
		});
	}
});

var Sample = function (el) {
	this.el = el;

	this.initSample();
};

Sample.prototype.initSample = function () {
	this.color1 = this.el.getAttribute("data-color1");
	this.color2 = this.el.getAttribute("data-color2");
	this.color3 = this.el.getAttribute("data-color3");

	this.createStrip(this.color1);
	this.createStrip(this.color2);
	this.createStrip(this.color3);
};

Sample.prototype.createStrip = function (color) {
	var strip = document.createElement("div");
	strip.className = "sample__strip";
	strip.style.backgroundColor = color;

	this.el.append(strip);
};

Sample.prototype.click = function (callback) {
	this.el.addEventListener("click", callback.bind(this));
};

