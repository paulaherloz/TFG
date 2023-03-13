var program = new Program();

const range_rotarx = document.getElementById("x");
const range_rotary = document.getElementById("y");
const range_rotarz = document.getElementById("z");
const mover = document.getElementById("m");


var cubo_rubix = new CuboRubix();
cubo_rubix.dibujar(program);


mover.addEventListener("click",  function() {
    cubo_rubix.movimiento(2,0,90);
    cubo_rubix.dibujar(program);
});

range_rotarx.addEventListener("click",  function() {
    cubo_rubix.RotarX(10);
    cubo_rubix.dibujar(program);
});

range_rotary.addEventListener("click",  function() {
    cubo_rubix.RotarY(10);
    cubo_rubix.dibujar(program);
});

range_rotarz.addEventListener("click",  function() {
    cubo_rubix.RotarZ(10);
    cubo_rubix.dibujar(program);
});


/*
var cubo_medio = new Cubo(-1,1,-1);



cubo_medio.dibujar(program);

mover.addEventListener("click",  function() {
    cubo_medio.Trasladar(0, -2*LADO_CUBO,0);
    cubo_medio.RotacionX(90);
    cubo_medio.dibujar(program);
});

range_rotarx.addEventListener("click",  function() {
    cubo_medio.RotacionX(10);
    cubo_medio.dibujar(program);
});

range_rotary.addEventListener("click",  function() {
    cubo_medio.RotacionY(10);
    cubo_medio.dibujar(program);
});

range_rotarz.addEventListener("click",  function() {
    cubo_medio.RotacionZ(10);
    cubo_medio.dibujar(program);
});*/