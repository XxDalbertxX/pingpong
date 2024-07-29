const radio = 20;
const width = 800;
const height = 600;
const speed = 10;
const coordenada = { x: width / 2, y: height / 2 };
const delta = {
    x: Math.random() * speed * 2 - speed,
    y: Math.random() * speed * 2 - speed,
};
const cnv = document.getElementById("lienzo");
const ctx = cnv.getContext("2d");
function tick() {
    const newx = coordenada.x + delta.x;
    const newy = coordenada.y + delta.y;
    if (newx > width - radio || newx < radio) delta.x = -delta.x;
    if (newy > height - radio || newy < radio) delta.y = -delta.y;
    coordenada.x = newx;
    coordenada.y = newy;
    requestAnimationFrame(draw);
    setTimeout(tick, 10);
}
function draw() {
    ctx.fillStyle = "aqua";
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.arc(coordenada.x, coordenada.y, radio, 0, Math.PI * 2, 1);
    ctx.fill();
}
tick();