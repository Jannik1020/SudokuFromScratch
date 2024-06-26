const canvas = document.getElementById("canvas");

canvas.height = innerHeight;
canvas.width = canvas.height;

const subdivision = 9;

const controller = new Controller(canvas, subdivision);

function divideField(ctx, lineNumber = 1) {
    const canvasSide = canvas.height;
    ctx.fillStyle = "black";

    if(lineNumber % 3 === 0){
        ctx.lineWidth = 3;
    }
    else {
        ctx.lineWidth = 1;
    }

    ctx.beginPath();

    ctx.moveTo((canvasSide / subdivision) * lineNumber, 0);
    ctx.lineTo(canvasSide / subdivision * lineNumber, canvasSide)

    ctx.moveTo(0, canvasSide / subdivision * lineNumber);
    ctx.lineTo(canvasSide, canvasSide / subdivision * lineNumber)

    ctx.stroke();

    if( lineNumber < subdivision ) {
        divideField(ctx, lineNumber+1);
    }
}
function draw() {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    divideField(ctx);

    window.requestAnimationFrame(draw)
}

window.requestAnimationFrame(draw);