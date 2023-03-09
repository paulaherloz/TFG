const canvas = document.getElementById('glcanvas');
const gl = canvas.getContext('webgl2');
const LADO_CUBO = 0.3;

var vertexShaderSource = document.querySelector("#vertex-shader-3d").text;
var fragmentShaderSource = document.querySelector("#fragment-shader-2d").text;
        
const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);




class Cubo {
    constructor(gl, program, pos_ini_x,pos_ini_y, pos_ini_z) {
        this.gl = gl;

        this.vertices = [
            pos_ini_x - LADO_CUBO/2 , pos_ini_y - LADO_CUBO/2, pos_ini_z + LADO_CUBO/2, //0
            pos_ini_x - LADO_CUBO/2, pos_ini_y + LADO_CUBO/2, pos_ini_z + LADO_CUBO/2, //1
            pos_ini_x + LADO_CUBO/2, pos_ini_y + LADO_CUBO/2, pos_ini_z + LADO_CUBO/2, //2
            pos_ini_x + LADO_CUBO/2, pos_ini_y - LADO_CUBO/2, pos_ini_z + LADO_CUBO/2, //3


            pos_ini_x + LADO_CUBO/2, pos_ini_y + LADO_CUBO/2, pos_ini_z + LADO_CUBO/2, //4
            pos_ini_x + LADO_CUBO/2, pos_ini_y - LADO_CUBO/2, pos_ini_z + LADO_CUBO/2, //5
            pos_ini_x + LADO_CUBO/2, pos_ini_y + LADO_CUBO/2, pos_ini_z - LADO_CUBO/2, //6
            pos_ini_x + LADO_CUBO/2, pos_ini_y - LADO_CUBO/2, pos_ini_z - LADO_CUBO/2, //7

            pos_ini_x + LADO_CUBO/2, pos_ini_y + LADO_CUBO/2, pos_ini_z - LADO_CUBO/2, //8
            pos_ini_x + LADO_CUBO/2, pos_ini_y - LADO_CUBO/2, pos_ini_z - LADO_CUBO/2, //9
            pos_ini_x - LADO_CUBO/2, pos_ini_y + LADO_CUBO/2, pos_ini_z - LADO_CUBO/2, //10
            pos_ini_x - LADO_CUBO/2, pos_ini_y - LADO_CUBO/2, pos_ini_z - LADO_CUBO/2, //11

            pos_ini_x - LADO_CUBO/2, pos_ini_y + LADO_CUBO/2, pos_ini_z - LADO_CUBO/2, //12
            pos_ini_x - LADO_CUBO/2, pos_ini_y - LADO_CUBO/2, pos_ini_z - LADO_CUBO/2, //13
            pos_ini_x - LADO_CUBO/2, pos_ini_y + LADO_CUBO/2, pos_ini_z + LADO_CUBO/2, //14
            pos_ini_x - LADO_CUBO/2 , pos_ini_y - LADO_CUBO/2, pos_ini_z + LADO_CUBO/2, //15

            pos_ini_x - LADO_CUBO/2, pos_ini_y + LADO_CUBO/2, pos_ini_z - LADO_CUBO/2, //16
            pos_ini_x + LADO_CUBO/2, pos_ini_y + LADO_CUBO/2, pos_ini_z - LADO_CUBO/2, //17
            pos_ini_x - LADO_CUBO/2, pos_ini_y + LADO_CUBO/2, pos_ini_z + LADO_CUBO/2, //18
            pos_ini_x + LADO_CUBO/2, pos_ini_y + LADO_CUBO/2, pos_ini_z + LADO_CUBO/2, //19

            pos_ini_x - LADO_CUBO/2 , pos_ini_y - LADO_CUBO/2, pos_ini_z + LADO_CUBO/2, //20
            pos_ini_x - LADO_CUBO/2, pos_ini_y - LADO_CUBO/2, pos_ini_z - LADO_CUBO/2, //21
            pos_ini_x + LADO_CUBO/2, pos_ini_y - LADO_CUBO/2, pos_ini_z - LADO_CUBO/2, //22
            pos_ini_x + LADO_CUBO/2, pos_ini_y - LADO_CUBO/2, pos_ini_z + LADO_CUBO/2, //23

        ];

        this.indices = [
            //cara delantera
            0, 2,1,    2, 0, 3,   

            //cara derecha
            4,5,6,      6,5,7,

            //cara trasera
            9,10,8,     9,11,10,

            //cara izq
            13,14,12,   14,13,15,

            //cara arriba
            16,18,17,   17,18,19,

            //Cara abajo
            20,21,23,   22,23,21
        ];

        this.colores = [
            1,0,0,1, //rojo
            1,0,0,1, //rojo
            1,0,0,1, //rojo
            1,0,0,1, //rojo

            1,1,1,1, //blanco
            1,1,1,1, //blanco
            1,1,1,1, //blanco
            1,1,1,1, //blanco
            

            1, 0.5, 0 ,1, //naranja
            1, 0.5, 0,1, //naranja
            1, 0.5, 0,1, //naranja
            1, 0.5, 0 , 1, //naranja


            1,1,0,1, //amarillo
            1,1,0,1, //amarillo
            1,1,0,1, //amarillo
            1,1,0,1, //amarillo

            0,0,1,1, //azul
            0,0,1,1, //azul
            0,0,1,1, //azul
            0,0,1,1, //azul

            0,1,0,1, //verde
            0,1,0,1, //verde
            0,1,0,1, //verde
            0,1,0,1, //verde
        ];

        this.matrix = new Mat4([
                1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0
        ]);

        this.pos_x = pos_ini_x;
        this.pos_y = pos_ini_y;
        this.pos_z = pos_ini_z;
        this.rota_x = 0.0;
        this.rota_y = 0.0;
        this.rota_z = 0.0;

        this.positionBuffer = undefined;
        this.colorBuffer = undefined;
        this.indexBuffer = undefined;
        this.program = program;
        
    }

    dibujar() {
        if (typeof this.positionBuffer === 'undefined') {
    
            this.positionLocation = gl.getAttribLocation(this.program, "a_position");
            this.matrixLocation = gl.getUniformLocation(this.program, "u_matrix");
            this.colorLocation = gl.getAttribLocation(this.program, 'a_color');
    
            this.positionBuffer = gl.createBuffer();
    
            gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
            gl.enableVertexAttribArray(this.positionLocation);
            gl.vertexAttribPointer(this.positionLocation, 3, gl.FLOAT, false, 0, 0);
    
            this.colorBuffer = gl.createBuffer();
    
            gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.colores), gl.STATIC_DRAW);
            gl.enableVertexAttribArray(this.colorLocation);
            gl.vertexAttribPointer(this.colorLocation, 4, gl.FLOAT, false, 0, 0);
    
            this.indexBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), gl.STATIC_DRAW);
    
        } 
        
    
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    
        gl.clearColor(0, 0, 0, 0);
    
        gl.useProgram(this.program);
        gl.enable(gl.DEPTH_TEST);
    
        gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

        gl.uniformMatrix4fv(this.matrixLocation, false, this.matrix);
    
        gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_SHORT, 0);
    }

    
    
    
    RotacionX(angulo){
        var mov = parseFloat(angulo); 
        var m14 = Mat4_RotationXdeg(mov);
        this.matrix = this.matrix.compose(m14);
    
        this.rota_x = parseFloat(angulo);
    }
    
    RotacionY(angulo){
        var mov = parseFloat(angulo); 
        var m14 = Mat4_RotationYdeg(mov);
        this.matrix = this.matrix.compose(m14);

        this.rota_y = parseFloat(angulo);
    }
    
    RotacionZ(angulo){
        var mov = parseFloat(angulo); 
        var m14 = Mat4_RotationZdeg(mov);
        this.matrix = this.matrix.compose(m14);
    
        this.rota_z = parseFloat(angulo);
    }
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




/*
var cubo = new Cubo(gl, 0,0,0);

cubo.dibujar();
    
const range_x = document.getElementById("x");
const range_y = document.getElementById("y");
const range_rotarx = document.getElementById("rotarx");
const range_rotary = document.getElementById("rotary");
const range_rotarz = document.getElementById("rotarz");
const output = document.getElementById("demo");

range_rotarx.addEventListener("input",  function() {
    cubo.RotacionX(rotarx.value);
    // Limpiar el lienzo
    
    cubo.dibujar();
});

range_rotary.addEventListener("input",  function() {
    cubo.RotacionY(rotary.value);
    // Limpiar el lienzo
    cubo.dibujar();
});

range_rotarz.addEventListener("input",  function() {
    cubo.RotacionZ(rotarz.value);
    // Limpiar el lienzo
    cubo.dibujar();
});*/