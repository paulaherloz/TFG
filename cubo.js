const canvas = document.getElementById('glcanvas');
const gl = canvas.getContext('webgl2');
const LADO_CUBO = 0.3;



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


class Cubo {
    constructor(gl, pos_ini_x,pos_ini_y, pos_ini_z) {
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
        
    }

    TrasladoHorizontal(){
        var mov = parseFloat(x.value) - this.pos_x; 
        var m14 = Mat4_Translate([mov, 0, 0]);
        this.matrix = this.matrix.compose(m14);
    
        this.pos_x = parseFloat(x.value);
    }
    
    TrasladoVertical(){
        var mov = parseFloat(y.value) - this.pos_y; 
        var m14 = Mat4_Translate([0, mov, 0]);
        this.matrix = this.matrix.compose(m14);
    
        this.pos_y = parseFloat(y.value);
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


function dibujar(objeto){
        var vertexShaderSource = document.querySelector("#vertex-shader-3d").text;
        var fragmentShaderSource = document.querySelector("#fragment-shader-2d").text;
        
        var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

        var program = createProgram(gl, vertexShader, fragmentShader);
        var positionLocation = gl.getAttribLocation(program, "a_position");
        var matrixLocation = gl.getUniformLocation(program, "u_matrix");
        var colorLocation = gl.getAttribLocation(program, 'a_color');
    
        //posiciones
        const positionBuffer = gl.createBuffer();
        
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(objeto.vertices), gl.STATIC_DRAW);
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

        //colores
        const colorBuffer = gl.createBuffer();
        
        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(objeto.colores), gl.STATIC_DRAW);
        gl.enableVertexAttribArray(colorLocation);
        gl.vertexAttribPointer(colorLocation, 4, gl.FLOAT, false, 0, 0);


        //indices
        const indexBuffer = gl.createBuffer();
        // convierte este búfer en el 'ELEMENT_ARRAY_BUFFER' actual
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(objeto.indices), gl.STATIC_DRAW);


        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

        // Limpiar el lienzo
        gl.clearColor(0, 0, 0, 0);

        // Dile que use nuestro programa (par de shaders)
        gl.useProgram(program);
        gl.enable(gl.DEPTH_TEST);

        
        // Vincular el búfer de posición.
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        // vincular el búfer que contiene los índices
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

    

    // Establecer la matriz como valor de la variable uniforme en el shader
        gl.uniformMatrix4fv(matrixLocation, false, objeto.matrix);


        gl.drawElements(gl.TRIANGLES, objeto.indices.length, gl.UNSIGNED_SHORT, 0);
}
    





    