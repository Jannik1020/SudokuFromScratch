class Field {
    constructor(X, Y, number="", notes=[]) {
        this.number = number;
        this.notes = notes;
        this.selected = false;
        this.X = X
        this.Y = Y
    }

    draw(ctx) {

        if(this.selected) {
            ctx.fillStyle = "rgba(47,79,79,0.51)";
            ctx.fillRect(this.X, this.Y, tileWidth, tileHeight)
        }
        if(this.number != "") {
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.fillText(this.number, this.X + (tileWidth / 2), this.Y + (tileHeight / 2));
        }
    }
}