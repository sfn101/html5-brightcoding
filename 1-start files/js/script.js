const canvas = document.getElementById("canvas");

const draw = canvas.getContext("2d");

draw.fillStyle = "yellow";
draw.fillRect(20, 20, 100, 50);
draw.fillStyle = "red";
draw.fillRect(150, 20, 100, 50);

draw.fillRect(20, 100, 100, 50);
