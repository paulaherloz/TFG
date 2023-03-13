const canvas = document.getElementById('glcanvas');
const gl = canvas.getContext('webgl2');

class Program{
    constructor(){
        var vertexShaderSource = document.querySelector("#vertex-shader-3d").text;
        var fragmentShaderSource = document.querySelector("#fragment-shader-2d").text;
                
        const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
        this.program = createProgram(gl, vertexShader, fragmentShader);
        this.matrixLocation = gl.getUniformLocation(this.program, "u_matrix");
        this.positionLocation = gl.getAttribLocation(this.program, "a_position");
        this.colorLocation = gl.getAttribLocation(this.program, 'a_color');
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


