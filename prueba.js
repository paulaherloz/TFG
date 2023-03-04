const canvas = document.getElementById('glcanvas');
const gl = canvas.getContext('webgl2');
const LADO_CUBO = 0.5;
var pos_x = 0.0;
var pos_y = 0.0;
var rota_x = 0.0;
var rota_y = 0.0;
var rota_z = 0.0;


const x = document.querySelector("#x");
const mostrarx = document.querySelector("#mostrarx");

x.oninput= () => {
    mostrarx.innerHTML = x.value
}

const y = document.querySelector("#y");
const mostrary = document.querySelector("#mostrary");

y.oninput= () => {
    mostrary.innerHTML = y.value
}

const rotarx = document.querySelector("#rotarx");
const mostrarrotarx = document.querySelector("#mostrarrotarx");
rotarx.oninput= () => {
    mostrarrotarx.innerHTML = rotarx.value
}

const rotary = document.querySelector("#rotary");
const mostrarrotary = document.querySelector("#mostrarrotary");
rotary.oninput= () => {
    mostrarrotary.innerHTML = rotary.value
}

const rotarz = document.querySelector("#rotarz");
const mostrarrotarz = document.querySelector("#mostrarrotarz");
rotarz.oninput= () => {
    mostrarrotarz.innerHTML = rotarz.value
}

function createShader(gl, type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) {
      return shader;
    }
   
    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
}

function createProgram(gl, vertexShader, fragmentShader) {
    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    var success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success) {
      return program;
    }
   
    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
}

function TrasladoHorizontal(){
    var mov = parseFloat(x.value) - pos_x; 
    var m14 = Mat4_Translate([mov, 0, 0]);
    matrix = matrix.compose(m14);

    pos_x = parseFloat(x.value);
}

function TrasladoVertical(){
    var mov = parseFloat(y.value) - pos_y; 
    var m14 = Mat4_Translate([0, mov, 0]);
    matrix = matrix.compose(m14);

    pos_y = parseFloat(y.value);
}

function RotacionX(){
    var mov = parseFloat(rotarx.value) - rota_x; 
    var m14 = Mat4_RotationXdeg(mov);
    matrix = matrix.compose(m14);

    rota_x = parseFloat(rotarx.value);
}

function RotacionY(){
    var mov = parseFloat(rotary.value) - rota_y; 
    var m14 = Mat4_RotationYdeg(mov);
    matrix = matrix.compose(m14);

    rota_y = parseFloat(rotary.value);
}

function RotacionZ(){
    var mov = parseFloat(rotarz.value) - rota_z; 
    var m14 = Mat4_RotationZdeg(mov);
    matrix = matrix.compose(m14);

    rota_z = parseFloat(rotarz.value);
}

// Draw a the scene.
function drawScene() {
    var vertexShaderSource = document.querySelector("#vertex-shader-3d").text;
    var fragmentShaderSource = document.querySelector("#fragment-shader-2d").text;
    
    var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    var program = createProgram(gl, vertexShader, fragmentShader);
    var positionLocation = gl.getAttribLocation(program, "a_position");
    var matrixLocation = gl.getUniformLocation(program, "u_matrix");
   
    var positionBuffer = gl.createBuffer();
    
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);


    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    // crea el búfer
    const indexBuffer = gl.createBuffer();
    
    // convierte este búfer en el 'ELEMENT_ARRAY_BUFFER' actual
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    
    // Llenar el búfer de la matriz de elementos actual con datos
    const indices = [
    0, 1, 2,   // primer triangulo
    2, 1, 3,   // segundo triangulo

    //cara derecha
    2, 3, 5,
    5, 3, 4,

    //cara trasera
    5,4,7,
    7,4,6,

    //cara izq
    7,6,0,
    0,6,1,

    //cara arriba
    6,1,4,
    1,4,3,

    //Cara abajo
    7,0,5,
    0,5,2

    ];

    gl.bufferData(
        gl.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(indices),
        gl.STATIC_DRAW
    );

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    // Limpiar el lienzo
    gl.clearColor(0, 0, 0, 0);

    // Dile que use nuestro programa (par de shaders)
    gl.useProgram(program);

    gl.enableVertexAttribArray(positionLocation);

    // Vincular el búfer de posición.
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // vincular el búfer que contiene los índices
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);


    
    // Indicar al atributo cómo obtener datos de positionBuffer (ARRAY_BUFFER)
    var size = 3;          // 3 componentes por iteración
    var type = gl.FLOAT;   // los datos son flotantes de 32 bits
    var normalize = false; // no normalizar los datos
    var stride = 0;        // 0 = tamaño de avance * tamaño de (tipo) cada iteración para obtener la siguiente posición
    var offset = 0;        // comienza al principio del búfer
    gl.vertexAttribPointer(positionLocation, size, type, normalize, stride, offset);
    
  
  // Establecer la matriz como valor de la variable uniforme en el shader
    gl.uniformMatrix4fv(matrixLocation, false, matrix);
    

    var primitiveType = gl.TRIANGLES;
    var offset = 0;
    var count = 36;

    var indexType = gl.UNSIGNED_SHORT;

    gl.drawElements(primitiveType, count, indexType, offset);
}


// posicion inicial del cubo
var positions = [
    0, 0, LADO_CUBO, //a
    0, LADO_CUBO, LADO_CUBO, //b
    LADO_CUBO, 0, LADO_CUBO, //c
    LADO_CUBO, LADO_CUBO, LADO_CUBO, //d
    LADO_CUBO, LADO_CUBO, 0, //e
    LADO_CUBO, 0, 0, //f
    0, LADO_CUBO, 0, //g
    0, 0, 0, //h
];

var colors = [
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,

    0,1,0,
    0,1,0,
    0,1,0,
    0,1,0,

    0,0,1,
    0,0,1,
    0,0,1,
    0,0,1,

    1,1,0,
    1,1,0,
    1,1,0,
    1,1,0,

    0,1,1,
    0,1,1,
    0,1,1,
    0,1,1,

    1,0,1,
    1,0,1,
    1,0,1,
    1,0,1

]

// Crear una matriz de 4x4
var matrix = new Mat4([
    1.0, 0.0, 0.0, 0.0,
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
]);


const range_x = document.getElementById("x");
const range_y = document.getElementById("y");
const range_rotarx = document.getElementById("rotarx");
const range_rotary = document.getElementById("rotary");
const range_rotarz = document.getElementById("rotarz");
const output = document.getElementById("demo");

drawScene();

range_x.addEventListener("input",  function() {
    TrasladoHorizontal();
    drawScene();
});

range_y.addEventListener("input",  function() {
    TrasladoVertical();
    drawScene();
});

range_rotarx.addEventListener("input",  function() {
    RotacionX();
    drawScene();
});

range_rotary.addEventListener("input",  function() {
    RotacionY();
    drawScene();
});

range_rotarz.addEventListener("input",  function() {
    RotacionZ();
    drawScene();
});