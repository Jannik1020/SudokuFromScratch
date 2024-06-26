class Field {
    constructor(X, Y, number="", notes=[]) {
        this.number = number;
        this.notes = notes;
        this.hovered = false;
        this.selected = false;
        this.X = X
        this.Y = Y
        this.notePositions = [[this.X + tileWidth/6, this.Y + tileHeight/6],
                            [this.X + 5*tileWidth/6, this.Y + tileHeight/6],
                            [this.X + tileWidth/6, this.Y + 5*tileHeight/6],
                            [this.X + 5*tileWidth/6, this.Y + 5*tileHeight/6]]
    }

    draw(ctx) {

        if(this.hovered) {
            ctx.fillStyle = "rgba(106,166,166,0.42)";
            ctx.fillRect(this.X, this.Y, tileWidth, tileHeight)
        }
        if(this.selected){

            ctx.fillStyle = "rgba(106,166,166,0.84)";
            ctx.fillRect(this.X, this.Y, tileWidth, tileHeight)
        }


            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

        if(this.number != "") {
            ctx.font = innerHeight/15+"px Arial"
            ctx.fillText(this.number, this.X + (tileWidth / 2), this.Y + (tileHeight / 2));
        }

        if(this.notes.length > 0) {
            ctx.font = innerHeight/40+"px Arial"
            for (let i = 0; i < Math.min(this.notes.length, 4); i++) {
                ctx.fillText(this.notes[i], this.notePositions[i][0], this.notePositions[i][1]);
            }

        }
    }
}