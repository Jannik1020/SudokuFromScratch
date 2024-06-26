const canvas = document.getElementById("canvas");

canvas.height = innerHeight;
canvas.width = canvas.height;


function draw() {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    window.requestAnimationFrame(draw)
}

window.requestAnimationFrame(draw);