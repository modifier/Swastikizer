var Swastikizer = function () {
	this.rectColor = "#dd0000";
	this.circleColor = "#ffffff";
	this.shapeColor = "#000000";

	this.rect = document.getElementById("swastika__rect");
	this.circle = document.getElementById("swastika__circle");
	this.shape = document.getElementById("swastika__shape");

	this.initColorpickers();
};

Swastikizer.prototype.initColorpickers = function () {
	this.rectCp = ColorPicker(document.getElementById("rect-picker"), this.changeColor("rect"));
	this.circleCp = ColorPicker(document.getElementById("circle-picker"), this.changeColor("circle"));
	this.shapeCp = ColorPicker(document.getElementById("shape-picker"), this.changeColor("shape"));

	this.rectColorbox = document.getElementById("rect-colorbox");
	this.circleColorbox = document.getElementById("circle-colorbox");
	this.shapeColorbox = document.getElementById("shape-colorbox");

	this.rectCp.setHex(this.rectColor);
	this.circleCp.setHex(this.circleColor);
	this.shapeCp.setHex(this.shapeColor);
};

Swastikizer.prototype.rectUpdate = function () {
	this.rect.setAttribute("fill", this.rectColor);

	this.rectColorbox.style.backgroundColor = this.rectColor;
};

Swastikizer.prototype.circleUpdate = function () {
	this.circle.setAttribute("fill", this.circleColor);

	this.circleColorbox.style.backgroundColor = this.circleColor;
};

Swastikizer.prototype.shapeUpdate = function () {
	this.shape.setAttribute("stroke", this.shapeColor);

	this.shapeColorbox.style.backgroundColor = this.shapeColor;
};

Swastikizer.prototype.changeColor = function (element) {
	var that = this;
	return function (hex) {
		that[element + "Color"] = hex;

		that[element + "Update"]();
	}
};

Swastikizer.prototype.setColors = function (color1, color2, color3) {
	this.rectCp.setHex(color3);
	this.circleCp.setHex(color2);
	this.shapeCp.setHex(color1);
};