document.addEventListener('DOMContentLoaded', function () {
    let elemento = document.getElementById('matrix');
    let ctx = elemento.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    elemento.width = width;
    elemento.height = height;

    let posicion = Array(300).join(0).split('');

    function initMatrix() {
        ctx.fillStyle = "rgba(0, 20, 1, 0.5)";
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = "rgba(0, 255, 0, 1)";
        ctx.font = "11pt Arial";

        posicion.forEach(function (y, index) {
            let texto = String.fromCharCode(0x30A0 + Math.random() * 96);
            let x = (index * 15) + 15;

            ctx.fillText(texto, x, y);

            if (y > height + Math.random() * 10000) {
                posicion[index] = 0;
            } else {
                posicion[index] = y + 25;
            }
        });
    }

    setInterval(initMatrix, 50);
});
