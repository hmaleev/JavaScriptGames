var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.beginPath();

//gallow
ctx.moveTo(50, 290);
ctx.lineTo(150, 290);

ctx.moveTo(100, 290);
ctx.lineTo(100, 70);

ctx.moveTo(100, 70);
ctx.lineTo(200, 70);

ctx.moveTo(200, 70);
ctx.lineTo(200, 100);

ctx.closePath();
ctx.stroke();

function drawHead() {
	//head
	ctx.beginPath();
	ctx.moveTo(220, 120);
	ctx.arc(200, 120, 20, 0, 2 * Math.PI);

	ctx.closePath();
	ctx.stroke();

}

function drawBody() {
	ctx.beginPath();
	//body
	ctx.moveTo(200, 140);
	ctx.lineTo(200, 200);

	ctx.closePath();
	ctx.stroke();
}

function drawLeftLeg() {

	ctx.beginPath();
	//legs
	ctx.moveTo(200, 200);
	ctx.lineTo(170, 250);

	ctx.closePath();
	ctx.stroke();

}

function drawRightLeg() {

	ctx.beginPath();
	ctx.moveTo(200, 200);
	ctx.lineTo(230, 250);

	ctx.closePath();
	ctx.stroke();

}
//arms

function drawLeftArm() {
	ctx.beginPath();
	ctx.moveTo(200, 150);
	ctx.lineTo(170, 200);

	ctx.closePath();
ctx.stroke();

}

function drawRightArm() {
	ctx.beginPath();
ctx.moveTo(200, 150);
ctx.lineTo(230, 200);

ctx.closePath();
ctx.stroke();

}