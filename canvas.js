const canvas = document.getElementById("canvas");

canvas.height = canvasHeight
canvas.width = canvasWidth

const tiles = []
fillTiles();

const controller = new Controller(tiles, canvas, subdivision);

function fillTiles() {
    for (let i = 0; i < subdivision; i++) {
        tiles.push([])
        const Y = tileHeight * i
        for (let j = 0; j < subdivision; j++) {
            const X = tileWidth * j;
            tiles[i].push(new Field(X, Y))
        }

    }
}

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
console.log(tiles)
function draw() {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    divideField(ctx);

    if(controller.fieldPosition[0] > -1 ) {
        const activeField = controller.fieldPosition;
        tiles[activeField[1]][activeField[0]].hovered = true;
    }

    tiles.forEach(tileRow => {
        tileRow.forEach(tile => {
            tile.draw(ctx)
            tile.hovered = false
        }
        )
    })

    window.requestAnimationFrame(draw)
}

window.requestAnimationFrame(draw);