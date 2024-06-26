const canvas = document.getElementById("canvas");

canvas.height = document.height;
canvas.width = canvas.height;

const ctx = canvas.getContext("2d");

function draw(ctx) {
    window.requestAnimationFrame(draw)
}

window.requestAnimationFrame(draw);