class Field {
    constructor(X, Y, number="", notes=[]) {
        this.number = number;
        this.notes = notes;
        this.hovered = false;
        this.selected = false;
        this.X = X
        this.Y = Y
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
        if(this.number != "") {
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = innerHeight/15+"px Arial"
            ctx.fillText(this.number, this.X + (tileWidth / 2), this.Y + (tileHeight / 2));
        }
    }
}