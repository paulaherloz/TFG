

//fila medio
var cubo = new Cubo(gl, 0,0,0);
var cubo_derecha = new Cubo(gl, LADO_CUBO, 0,0);
var cubo_izquierda = new Cubo(gl, -LADO_CUBO, 0,0);
var cubo_delante = new Cubo(gl, 0, 0, LADO_CUBO);
var cubo_delante_derecha = new Cubo(gl, LADO_CUBO, 0, LADO_CUBO);
var cubo_delante_izquierda = new Cubo(gl, -LADO_CUBO, 0, LADO_CUBO);
var cubo_detras = new Cubo(gl, 0, 0,-LADO_CUBO);
var cubo_detras_derecha = new Cubo(gl, LADO_CUBO, 0, -LADO_CUBO);
var cubo_detras_izquierda = new Cubo(gl, -LADO_CUBO, 0, -LADO_CUBO);

//fila arriba

var cubo_arr = new Cubo(gl, 0,LADO_CUBO,0);
var cubo_derecha_arr = new Cubo(gl, LADO_CUBO, LADO_CUBO,0);
var cubo_izquierda_arr = new Cubo(gl, -LADO_CUBO, LADO_CUBO,0);
var cubo_delante_arr = new Cubo(gl, 0, LADO_CUBO, LADO_CUBO);
var cubo_delante_derecha_arr = new Cubo(gl, LADO_CUBO, LADO_CUBO, LADO_CUBO);
var cubo_delante_izquierda_arr = new Cubo(gl, -LADO_CUBO, LADO_CUBO, LADO_CUBO);
var cubo_detras_arr = new Cubo(gl, 0, LADO_CUBO,-LADO_CUBO);
var cubo_detras_derecha_arr = new Cubo(gl, LADO_CUBO, LADO_CUBO, -LADO_CUBO);
var cubo_detras_izquierda_arr = new Cubo(gl, -LADO_CUBO, LADO_CUBO, -LADO_CUBO);

//fila abajo

var cubo_ab = new Cubo(gl, 0,-LADO_CUBO,0);
var cubo_derecha_ab = new Cubo(gl, LADO_CUBO, -LADO_CUBO,0);
var cubo_izquierda_ab = new Cubo(gl, -LADO_CUBO, -LADO_CUBO,0);
var cubo_delante_ab = new Cubo(gl, 0, -LADO_CUBO, LADO_CUBO);
var cubo_delante_derecha_ab = new Cubo(gl, LADO_CUBO, -LADO_CUBO, LADO_CUBO);
var cubo_delante_izquierda_ab = new Cubo(gl, -LADO_CUBO, -LADO_CUBO, LADO_CUBO);
var cubo_detras_ab = new Cubo(gl, 0, -LADO_CUBO,-LADO_CUBO);
var cubo_detras_derecha_ab = new Cubo(gl, LADO_CUBO, -LADO_CUBO, -LADO_CUBO);
var cubo_detras_izquierda_ab = new Cubo(gl, -LADO_CUBO, -LADO_CUBO, -LADO_CUBO);


const range_x = document.getElementById("x");
const range_y = document.getElementById("y");
const range_rotarx = document.getElementById("rotarx");
const range_rotary = document.getElementById("rotary");
const range_rotarz = document.getElementById("rotarz");
const output = document.getElementById("demo");

dibujar(cubo);
dibujar(cubo_derecha);
dibujar(cubo_izquierda);
dibujar(cubo_delante);
dibujar(cubo_delante_derecha);
dibujar(cubo_delante_izquierda);
dibujar(cubo_detras);
dibujar(cubo_delante_derecha);
dibujar(cubo_detras_izquierda);

dibujar(cubo_arr);
dibujar(cubo_derecha_arr);
dibujar(cubo_izquierda_arr);
dibujar(cubo_delante_arr);
dibujar(cubo_delante_derecha_arr);
dibujar(cubo_delante_izquierda_arr);
dibujar(cubo_detras_arr);
dibujar(cubo_detras_derecha_arr);
dibujar(cubo_detras_izquierda_arr);

dibujar(cubo_ab);
dibujar(cubo_derecha_ab);
dibujar(cubo_izquierda_ab);
dibujar(cubo_delante_ab);
dibujar(cubo_delante_derecha_ab);
dibujar(cubo_delante_izquierda_ab);
dibujar(cubo_detras_ab);
dibujar(cubo_detras_derecha_ab);
dibujar(cubo_detras_izquierda_ab);



range_rotarx.addEventListener("input",  function() {
    cubo.RotacionX(rotarx.value);
    dibujar(cubo);
    cubo_derecha.RotacionX(rotarx.value);
    dibujar(cubo_derecha);
    cubo_izquierda.RotacionX(rotarx.value);
    dibujar(cubo_izquierda);
    cubo_delante.RotacionX(rotarx.value);
    dibujar(cubo_delante);
    cubo_delante_derecha.RotacionX(rotarx.value);
    dibujar(cubo_delante_derecha);
    cubo_delante_izquierda.RotacionX(rotarx.value);
    dibujar(cubo_delante_izquierda);
    cubo_detras.RotacionX(rotarx.value);
    dibujar(cubo_detras);
    cubo_detras_derecha.RotacionX(rotarx.value);
    dibujar(cubo_detras_derecha);
    cubo_detras_izquierda.RotacionX(rotarx.value);
    dibujar(cubo_detras_izquierda);

    cubo_arr.RotacionX(rotarx.value);
    dibujar(cubo_arr);
    cubo_derecha_arr.RotacionX(rotarx.value);
    dibujar(cubo_derecha_arr);
    cubo_izquierda_arr.RotacionX(rotarx.value);
    dibujar(cubo_izquierda_arr);
    cubo_delante_arr.RotacionX(rotarx.value);
    dibujar(cubo_delante_arr);
    cubo_delante_derecha_arr.RotacionX(rotarx.value);
    dibujar(cubo_delante_derecha_arr);
    cubo_delante_izquierda_arr.RotacionX(rotarx.value);
    dibujar(cubo_delante_izquierda_arr);
    cubo_detras_arr.RotacionX(rotarx.value);
    dibujar(cubo_detras_arr);
    cubo_detras_derecha_arr.RotacionX(rotarx.value);
    dibujar(cubo_detras_derecha_arr);
    cubo_detras_izquierda_arr.RotacionX(rotarx.value);
    dibujar(cubo_detras_izquierda_arr);

    cubo_ab.RotacionX(rotarx.value);
    dibujar(cubo_ab);
    cubo_derecha_ab.RotacionX(rotarx.value);
    dibujar(cubo_derecha_ab);
    cubo_izquierda_ab.RotacionX(rotarx.value);
    dibujar(cubo_izquierda_ab);
    cubo_delante_ab.RotacionX(rotarx.value);
    dibujar(cubo_delante_ab);
    cubo_delante_derecha_ab.RotacionX(rotarx.value);
    dibujar(cubo_delante_derecha_ab);
    cubo_delante_izquierda_ab.RotacionX(rotarx.value);
    dibujar(cubo_delante_izquierda_ab);
    cubo_detras_ab.RotacionX(rotarx.value);
    dibujar(cubo_detras_ab);
    cubo_detras_derecha_ab.RotacionX(rotarx.value);
    dibujar(cubo_detras_derecha_ab);
    cubo_detras_izquierda_ab.RotacionX(rotarx.value);
    dibujar(cubo_detras_izquierda_ab);
});

range_rotary.addEventListener("input",  function() {
    cubo.RotacionY(rotary.value);
    dibujar(cubo);
    cubo_derecha.RotacionY(rotary.value);
    dibujar(cubo_derecha);
    cubo_izquierda.RotacionY(rotary.value);
    dibujar(cubo_izquierda);
    cubo_delante.RotacionY(rotary.value);
    dibujar(cubo_delante);
    cubo_delante_derecha.RotacionY(rotary.value);
    dibujar(cubo_delante_derecha);
    cubo_delante_izquierda.RotacionY(rotary.value);
    dibujar(cubo_delante_izquierda);
    cubo_detras.RotacionY(rotary.value);
    dibujar(cubo_detras);
    cubo_detras_derecha.RotacionY(rotary.value);
    dibujar(cubo_detras_derecha);
    cubo_detras_izquierda.RotacionY(rotary.value);
    dibujar(cubo_detras_izquierda);

    cubo_arr.RotacionY(rotary.value);
    dibujar(cubo_arr);
    cubo_derecha_arr.RotacionY(rotary.value);
    dibujar(cubo_derecha_arr);
    cubo_izquierda_arr.RotacionY(rotary.value);
    dibujar(cubo_izquierda_arr);
    cubo_delante_arr.RotacionY(rotary.value);
    dibujar(cubo_delante_arr);
    cubo_delante_derecha_arr.RotacionY(rotary.value);
    dibujar(cubo_delante_derecha_arr);
    cubo_delante_izquierda_arr.RotacionY(rotary.value);
    dibujar(cubo_delante_izquierda_arr);
    cubo_detras_arr.RotacionY(rotary.value);
    dibujar(cubo_detras_arr);
    cubo_detras_derecha_arr.RotacionY(rotary.value);
    dibujar(cubo_detras_derecha_arr);
    cubo_detras_izquierda_arr.RotacionY(rotary.value);
    dibujar(cubo_detras_izquierda_arr);

    cubo_ab.RotacionY(rotary.value);
    dibujar(cubo_ab);
    cubo_derecha_ab.RotacionY(rotary.value);
    dibujar(cubo_derecha_ab);
    cubo_izquierda_ab.RotacionY(rotary.value);
    dibujar(cubo_izquierda_ab);
    cubo_delante_ab.RotacionY(rotary.value);
    dibujar(cubo_delante_ab);
    cubo_delante_derecha_ab.RotacionY(rotary.value);
    dibujar(cubo_delante_derecha_ab);
    cubo_delante_izquierda_ab.RotacionY(rotary.value);
    dibujar(cubo_delante_izquierda_ab);
    cubo_detras_ab.RotacionY(rotary.value);
    dibujar(cubo_detras_ab);
    cubo_detras_derecha_ab.RotacionY(rotary.value);
    dibujar(cubo_detras_derecha_ab);
    cubo_detras_izquierda_ab.RotacionY(rotary.value);
    dibujar(cubo_detras_izquierda_ab);
});

range_rotarz.addEventListener("input",  function() {
    cubo.RotacionZ(rotarz.value);
    dibujar(cubo);
    cubo_derecha.RotacionZ(rotarz.value);
    dibujar(cubo_derecha);
    cubo_izquierda.RotacionZ(rotarz.value);
    dibujar(cubo_izquierda);
    cubo_delante.RotacionZ(rotarz.value);
    dibujar(cubo_delante);
    cubo_delante_derecha.RotacionZ(rotarz.value);
    dibujar(cubo_delante_derecha);
    cubo_delante_izquierda.RotacionZ(rotarz.value);
    dibujar(cubo_delante_izquierda);
    cubo_detras.RotacionZ(rotarz.value);
    dibujar(cubo_detras);
    cubo_detras_derecha.RotacionZ(rotarz.value);
    dibujar(cubo_detras_derecha);
    cubo_detras_izquierda.RotacionZ(rotarz.value);
    dibujar(cubo_detras_izquierda);

    cubo_arr.RotacionZ(rotarz.value);
    dibujar(cubo_arr);
    cubo_derecha_arr.RotacionZ(rotarz.value);
    dibujar(cubo_derecha_arr);
    cubo_izquierda_arr.RotacionZ(rotarz.value);
    dibujar(cubo_izquierda_arr);
    cubo_delante_arr.RotacionZ(rotarz.value);
    dibujar(cubo_delante_arr);
    cubo_delante_derecha_arr.RotacionZ(rotarz.value);
    dibujar(cubo_delante_derecha_arr);
    cubo_delante_izquierda_arr.RotacionZ(rotarz.value);
    dibujar(cubo_delante_izquierda_arr);
    cubo_detras_arr.RotacionZ(rotarz.value);
    dibujar(cubo_detras_arr);
    cubo_detras_derecha_arr.RotacionZ(rotarz.value);
    dibujar(cubo_detras_derecha_arr);
    cubo_detras_izquierda_arr.RotacionZ(rotarz.value);
    dibujar(cubo_detras_izquierda_arr);

    cubo_ab.RotacionZ(rotarz.value);
    dibujar(cubo_ab);
    cubo_derecha_ab.RotacionZ(rotarz.value);
    dibujar(cubo_derecha_ab);
    cubo_izquierda_ab.RotacionZ(rotarz.value);
    dibujar(cubo_izquierda_ab);
    cubo_delante_ab.RotacionZ(rotarz.value);
    dibujar(cubo_delante_ab);
    cubo_delante_derecha_ab.RotacionZ(rotarz.value);
    dibujar(cubo_delante_derecha_ab);
    cubo_delante_izquierda_ab.RotacionZ(rotarz.value);
    dibujar(cubo_delante_izquierda_ab);
    cubo_detras_ab.RotacionZ(rotarz.value);
    dibujar(cubo_detras_ab);
    cubo_detras_derecha_ab.RotacionZ(rotarz.value);
    dibujar(cubo_detras_derecha_ab);
    cubo_detras_izquierda_ab.RotacionZ(rotarz.value);
    dibujar(cubo_detras_izquierda_ab);

});



document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        cubo.RotacionY(-90);
        dibujar(cubo);

        cubo_derecha.RotacionY(-90);
        dibujar(cubo_derecha);

        cubo_izquierda.RotacionY(-90);
        dibujar(cubo_izquierda);

        cubo_detras.RotacionY(-90);
        dibujar(cubo_detras);

        cubo_detras_derecha.RotacionY(-90);
        dibujar(cubo_detras_derecha);

        cubo_detras_izquierda.RotacionY(-90);
        dibujar(cubo_detras_izquierda);

        cubo_delante.RotacionY(-90);
        dibujar(cubo_delante);

        cubo_delante_derecha.RotacionY(-90);
        dibujar(cubo_delante_derecha);

        cubo_delante_izquierda.RotacionY(-90);
        dibujar(cubo_delante_izquierda);

      
        var cubo_d_temp = cubo_derecha;
        var cubo_i_temp = cubo_izquierda;
        var cubo_detras_temp = cubo_detras;
        var cubo_detras_d_temp = cubo_detras_derecha;
        var cubo_detras_i_temp = cubo_detras_izquierda;
        var cubo_delante_temp = cubo_delante;
        var cubo_delante_d_temp = cubo_delante_derecha;
        var cubo_delante_i_temp = cubo_delante_izquierda;

        cubo_derecha = cubo_delante_temp;
        cubo_izquierda = cubo_detras_temp;
        cubo_detras = cubo_d_temp;
        cubo_detras_derecha = cubo_delante_d_temp;
        cubo_detras_izquierda = cubo_detras_d_temp;
        cubo_delante = cubo_i_temp
        cubo_delante_derecha = cubo_delante_i_temp;
        cubo_delante_izquierda = cubo_detras_i_temp;

        dibujar(cubo_arr);
        dibujar(cubo_derecha_arr);
        dibujar(cubo_izquierda_arr);
        dibujar(cubo_delante_arr);
        dibujar(cubo_delante_derecha_arr);
        dibujar(cubo_delante_izquierda_arr);
        dibujar(cubo_detras_arr);
        dibujar(cubo_detras_derecha_arr);
        dibujar(cubo_detras_izquierda_arr);

        dibujar(cubo_ab);
        dibujar(cubo_derecha_ab);
        dibujar(cubo_izquierda_ab);
        dibujar(cubo_delante_ab);
        dibujar(cubo_delante_derecha_ab);
        dibujar(cubo_delante_izquierda_ab);
        dibujar(cubo_detras_ab);
        dibujar(cubo_detras_derecha_ab);
        dibujar(cubo_detras_izquierda_ab);


    }

    if(event.key === "ArrowUp"){
        cubo.RotacionX(-90);
        dibujar(cubo);
        cubo_detras.RotacionX(-90);
        dibujar(cubo_detras);
        cubo_delante.RotacionX(-90);
        dibujar(cubo_delante);

        cubo_arr.RotacionX(-90);
        dibujar(cubo_arr);
        cubo_detras_arr.RotacionX(-90);
        dibujar(cubo_detras_arr);
        cubo_delante_arr.RotacionX(-90);
        dibujar(cubo_delante_arr);

        cubo_ab.RotacionX(-90);
        dibujar(cubo_ab);
        cubo_detras_ab.RotacionX(-90);
        dibujar(cubo_detras_ab);
        cubo_delante_ab.RotacionX(-90);
        dibujar(cubo_delante_ab);

        var cubo_detras_t = cubo_detras;
        var cubo_delante_t = cubo_delante;
        var cubo_arr_t = cubo_arr;
        var cubo_detras_arr_t = cubo_detras_arr;
        var cubo_delante_arr_t = cubo_delante_arr;
        var cubo_ab_t = cubo_ab;
        var cubo_detras_ab_t = cubo_detras_ab;
        var cubo_delante_ab_t = cubo_delante_ab;

        
        dibujar(cubo_izquierda);
        dibujar(cubo_derecha);
        dibujar(cubo_detras_derecha);
        dibujar(cubo_detras_izquierda);
        dibujar(cubo_delante_izquierda);
        dibujar(cubo_delante_derecha);

        dibujar(cubo_derecha_arr);
        dibujar(cubo_izquierda_arr);
        dibujar(cubo_delante_derecha_arr);
        dibujar(cubo_delante_izquierda_arr);
        dibujar(cubo_detras_derecha_arr);
        dibujar(cubo_detras_izquierda_arr);

        dibujar(cubo_derecha_ab);
        dibujar(cubo_izquierda_ab);
        dibujar(cubo_delante_derecha_ab);
        dibujar(cubo_delante_izquierda_ab);
        dibujar(cubo_detras_derecha_ab);
        dibujar(cubo_detras_izquierda_ab);


        
    }

    
}
);

