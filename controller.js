class Controller {
    constructor(tiles, canvas, subdivision) {
        this.canvas = canvas;
        this.tiles = tiles;
        this.subdivision = subdivision;

        this.mouseX = 0;
        this.mouseY = 0;

        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.canvasX = canvas.getBoundingClientRect().left;
        this.canvasY = canvas.getBoundingClientRect().top;

        this.onCanvas = false;

        this.fieldPosition = [0,0];
        this.activeField = [-1,-1];

        this.#addEventListeners();
    }

    computeSelectedField() {
        var fieldRow = 0;
        var fieldCol = 0

        for (let i = 0; i < this.subdivision; i++) {
            if(this.mouseX-this.canvasX >= tileWidth * i
                && this.mouseX-this.canvasX < tileWidth * (i+1)) {
                fieldRow = i
                break;
            }
        }

        for (let i = 0; i < this.subdivision; i++) {
            if(this.mouseY-this.canvasY >= tileHeight * i
                && this.mouseY-this.canvasY < tileHeight * (i+1)) {
                fieldCol = i
                break;
            }
        }
        return [fieldRow, fieldCol];
    }

    #addEventListeners() {
        addEventListener("mousemove", (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;

            if(this.mouseX >= this.canvasX
                && this.mouseX <= this.canvasX + this.canvasWidth
                && this.mouseY >= this.canvasY
                && this.mouseY <= this.canvasY + this.canvasHeight) {
                this.onCanvas = true;
                this.fieldPosition = this.computeSelectedField()
            }
            else {
                this.onCanvas = false;
                this.fieldPosition = [-1,-1]
            }
        });

        addEventListener("click", (e) => {

            tiles.forEach(tileRow => {
                tileRow.forEach(tile => {
                    tile.selected = false
                }
                )
            })

            if(this.onCanvas) {
                this.activeField = this.fieldPosition
                this.tiles[this.activeField[1]][this.activeField[0]].selected = true;
            }

        })

        addEventListener("keydown", e =>{
            if (["1","2","3","4","5","6","7","8","9"].includes(e.key) && this.activeField[0] > -1) {

                this.tiles[this.activeField[1]][this.activeField[0]].number = e.key;
            }
            if (['!','"', '§', "$", "%", "&", "/", "(", ")"].includes(e.key)&& this.activeField[0] > -1) {
                if(e.shiftKey){
                    this.tiles[this.activeField[1]][this.activeField[0]].notes.push(['!','"', '§', "$", "%", "&", "/", "(", ")"].indexOf(e.key)+1);
                }
            }
        })
    }

}