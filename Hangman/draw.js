var c=document.getElementById("canvas");
var ctx=c.getContext("2d");
ctx.beginPath();

//gallow
ctx.moveTo(50,290);
ctx.lineTo(150,290);

ctx.moveTo(100,290);
ctx.lineTo(100,70);

ctx.moveTo(100,70);
ctx.lineTo(200,70);

ctx.moveTo(200,70);
ctx.lineTo(200,100);

//head
ctx.moveTo(220,120);
ctx.arc(200,120,20,0,2*Math.PI);
//body
ctx.moveTo(200,140);
ctx.lineTo(200,200);
//legs
ctx.moveTo(200,200);
ctx.lineTo(170,250);

ctx.moveTo(200,200);
ctx.lineTo(230,250);
//arms
ctx.moveTo(200,150);
ctx.lineTo(170,200);

ctx.moveTo(200,150);
ctx.lineTo(230,200);

ctx.closePath();
ctx.stroke();