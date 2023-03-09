class CuboRubix {
    constructor(gl, program) {
        this.gl = gl;
        this.program = program;
        this.cubos = [        
            new Cubo(gl, program, 0,0,0), //0
            new Cubo(gl, program, LADO_CUBO, 0,0), //1
            new Cubo(gl, program, -LADO_CUBO, 0,0), //2
            new Cubo(gl, program, 0, 0, LADO_CUBO), //3
            new Cubo(gl, program, LADO_CUBO, 0, LADO_CUBO), //4
            new Cubo(gl, program, -LADO_CUBO, 0, LADO_CUBO), //5
            new Cubo(gl, program, 0, 0,-LADO_CUBO), //6
            new Cubo(gl, program, LADO_CUBO, 0, -LADO_CUBO),//7
            new Cubo(gl, program, -LADO_CUBO, 0, -LADO_CUBO),//8
        
        //fila arriba
        
            new Cubo(gl, program, 0,LADO_CUBO,0),//9
            new Cubo(gl, program, LADO_CUBO, LADO_CUBO,0),//10
            new Cubo(gl, program, -LADO_CUBO, LADO_CUBO,0),//11
            new Cubo(gl, program, 0, LADO_CUBO, LADO_CUBO),//12
            new Cubo(gl, program, LADO_CUBO, LADO_CUBO, LADO_CUBO),//13
            new Cubo(gl, program, -LADO_CUBO, LADO_CUBO, LADO_CUBO),//14
            new Cubo(gl, program, 0, LADO_CUBO,-LADO_CUBO),//15
            new Cubo(gl, program, LADO_CUBO, LADO_CUBO, -LADO_CUBO),//16
            new Cubo(gl, program, -LADO_CUBO, LADO_CUBO, -LADO_CUBO),//17
        
        //fila abajo
        
            new Cubo(gl, program, 0,-LADO_CUBO,0),//18
            new Cubo(gl, program, LADO_CUBO, -LADO_CUBO,0),//19
            new Cubo(gl, program, -LADO_CUBO, -LADO_CUBO,0),//20
            new Cubo(gl, program, 0, -LADO_CUBO, LADO_CUBO),//21
            new Cubo(gl, program, LADO_CUBO, -LADO_CUBO, LADO_CUBO),//22
            new Cubo(gl, program, -LADO_CUBO, -LADO_CUBO, LADO_CUBO),//23
            new Cubo(gl, program, 0, -LADO_CUBO,-LADO_CUBO),//24
            new Cubo(gl, program, LADO_CUBO, -LADO_CUBO, -LADO_CUBO),//25
            new Cubo(gl, program, -LADO_CUBO, -LADO_CUBO, -LADO_CUBO)//26
        ]

        this.matrices = [];

        for(var i = 0; i < 27; i++){
            this.matrices.push(this.cubos[i].matrix);
        }
    }

    dibujar() {

    
        for (let i = 0; i < 27; i++) {

            this.gl.uniformMatrix4fv(this.program.u_matrix, false, this.matrices[i]); // Cambiar la matriz modelview
            this.cubos[i].dibujar();
          }
    }

    //Los parámetros son: un entero para indicar el eje de rotación (0,1, o 2, para X, Y o Z), 
    //otro entero paraidentificar la rebanada (0,1 o 2), /de izq a derecha / de arriba a abajo / de delante a atrás
    //otro para identificar el ángulo de rotación (+/- 90 grados).
    movimiento(eje, rebanada, angulo){
        if(eje == 0){ //EJE X --> hacia delante
            if(rebanada == 0){
                
                for(var i = 2; i<27; i=i+3){
                    this.cubos[i].RotacionX(angulo);
                    this.matrices[i] = this.cubos[i].matrix;
                }

                //reasignacion de posiciones
                var cubo_detras = this.cubos[8];
                var cubo_delante = this.cubos[5];
                var cubo_arriba = this.cubos[11];
                var cubo_arriba_detras = this.cubos[17];
                var cubo_arriba_delante = this.cubos[14];
                var cubo_abajo = this.cubos[20];
                var cubo_abajo_detras = this.cubos[26];
                var cubo_abajo_delante = this.cubos[23];

                var matrix_detras = this.cubos[8].matrix;
                var matrix_delante = this.cubos[5].matrix;
                var matrix_arriba = this.cubos[11].matrix;
                var matrix_arriba_detras = this.cubos[17].matrix;
                var matrix_arriba_delante = this.cubos[14].matrix;
                var matrix_abajo = this.cubos[20].matrix;
                var matrix_abajo_detras = this.cubos[26].matrix;
                var matrix_abajo_delante = this.cubos[23].matrix;

                this.cubos[14] = cubo_arriba_detras;
                this.matrices[14] = matrix_arriba_detras;
                this.cubos[5] = cubo_arriba;
                this.matrices[5] = matrix_arriba;
                this.cubos[23] = cubo_arriba_delante;
                this.matrices[23] = matrix_arriba_delante;
                this.cubos[20] = cubo_delante;
                this.matrices[20] = matrix_delante;
                this.cubos[11] = cubo_detras;
                this.matrices[11] = matrix_detras;
                this.cubos[26] = cubo_abajo_delante;
                this.matrices[26] = matrix_abajo_delante;
                this.cubos[8] = cubo_abajo;
                this.matrices[8] = matrix_abajo;
                this.cubos[17] = cubo_abajo_detras;
                this.matrices[17] = matrix_abajo_detras;

            }
            if(rebanada == 1){
                for(var i = 0; i<27; i=i+3){
                    this.cubos[i].RotacionX(angulo);
                    this.matrices[i] = this.cubos[i].matrix;
                }

                //reasignacion de posiciones
                var cubo_detras = this.cubos[6];
                var cubo_delante = this.cubos[3];
                var cubo_arriba = this.cubos[9];
                var cubo_arriba_detras = this.cubos[15];
                var cubo_arriba_delante = this.cubos[12];
                var cubo_abajo = this.cubos[18];
                var cubo_abajo_detras = this.cubos[24];
                var cubo_abajo_delante = this.cubos[21];

                var matrix_detras = this.cubos[6].matrix;
                var matrix_delante = this.cubos[3].matrix;
                var matrix_arriba = this.cubos[9].matrix;
                var matrix_arriba_detras = this.cubos[15].matrix;
                var matrix_arriba_delante = this.cubos[12].matrix;
                var matrix_abajo = this.cubos[18].matrix;
                var matrix_abajo_detras = this.cubos[24].matrix;
                var matrix_abajo_delante = this.cubos[21].matrix;

                this.cubos[12] = cubo_arriba_detras;
                this.matrices[12] = matrix_arriba_detras;
                this.cubos[3] = cubo_arriba;
                this.matrices[3] = matrix_arriba;
                this.cubos[21] = cubo_arriba_delante;
                this.matrices[21] = matrix_arriba_delante;
                this.cubos[18] = cubo_delante;
                this.matrices[18] = matrix_delante;
                this.cubos[9] = cubo_detras;
                this.matrices[9] = matrix_detras;
                this.cubos[24] = cubo_abajo_delante;
                this.matrices[24] = matrix_abajo_delante;
                this.cubos[6] = cubo_abajo;
                this.matrices[6] = matrix_abajo;
                this.cubos[15] = cubo_abajo_detras;
                this.matrices[15] = matrix_abajo_detras;
            }
            if(rebanada == 2){
                for(var i = 1; i<27; i=i+3){
                    this.cubos[i].RotacionX(angulo);
                    this.matrices[i] = this.cubos[i].matrix;
                }

                //reasignacion de posiciones
                var cubo_detras = this.cubos[7];
                var cubo_delante = this.cubos[4];
                var cubo_arriba = this.cubos[10];
                var cubo_arriba_detras = this.cubos[16];
                var cubo_arriba_delante = this.cubos[13];
                var cubo_abajo = this.cubos[19];
                var cubo_abajo_detras = this.cubos[25];
                var cubo_abajo_delante = this.cubos[22];

                var matrix_detras = this.cubos[7].matrix;
                var matrix_delante = this.cubos[4].matrix;
                var matrix_arriba = this.cubos[10].matrix;
                var matrix_arriba_detras = this.cubos[16].matrix;
                var matrix_arriba_delante = this.cubos[13].matrix;
                var matrix_abajo = this.cubos[19].matrix;
                var matrix_abajo_detras = this.cubos[25].matrix;
                var matrix_abajo_delante = this.cubos[22].matrix;

                this.cubos[13] = cubo_arriba_detras;
                this.matrices[13] = matrix_arriba_detras;
                this.cubos[4] = cubo_arriba;
                this.matrices[4] = matrix_arriba;
                this.cubos[22] = cubo_arriba_delante;
                this.matrices[22] = matrix_arriba_delante;
                this.cubos[19] = cubo_delante;
                this.matrices[19] = matrix_delante;
                this.cubos[10] = cubo_detras;
                this.matrices[10] = matrix_detras;
                this.cubos[25] = cubo_abajo_delante;
                this.matrices[25] = matrix_abajo_delante;
                this.cubos[7] = cubo_abajo;
                this.matrices[7] = matrix_abajo;
                this.cubos[16] = cubo_abajo_detras;
                this.matrices[16] = matrix_abajo_detras;
            }
        }

        if(eje == 1){//EJE Y --> DE DERECHA A IZQUIERDA
            if(rebanada == 0){
                for(var i = 9; i<18; i=i+1){
                    this.cubos[i].RotacionY(angulo);
                    this.matrices[i] = this.cubos[i].matrix;
                }

                //reasignacion de posiciones
                var cubo_detras = this.cubos[15];
                var cubo_delante = this.cubos[12];
                var cubo_derecha = this.cubos[10];
                var cubo_derecha_detras = this.cubos[16];
                var cubo_derecha_delante = this.cubos[13];
                var cubo_izq = this.cubos[11];
                var cubo_izq_detras = this.cubos[17];
                var cubo_izq_delante = this.cubos[14];

                var matrix_detras = this.cubos[15].matrix;
                var matrix_delante = this.cubos[12].matrix;
                var matrix_derecha = this.cubos[10].matrix;
                var matrix_derecha_detras = this.cubos[16].matrix;
                var matrix_derecha_delante = this.cubos[13].matrix;
                var matrix_izq = this.cubos[11].matrix;
                var matrix_izq_detras = this.cubos[17].matrix;
                var matrix_izq_delante = this.cubos[14].matrix;

                this.cubos[11] = cubo_detras;
                this.matrices[11] = matrix_detras;
                this.cubos[14] = cubo_izq_detras;
                this.matrices[14] = matrix_izq_detras;
                this.cubos[17] = cubo_derecha_detras;
                this.matrices[17] = matrix_derecha_detras;
                this.cubos[15] = cubo_derecha;
                this.matrices[15] = matrix_derecha;
                this.cubos[12] = cubo_izq;
                this.matrices[12] = matrix_izq;
                this.cubos[16] = cubo_derecha_delante;
                this.matrices[16] = matrix_derecha_delante;
                this.cubos[10] = cubo_delante;
                this.matrices[10] = matrix_delante;
                this.cubos[13] = cubo_izq_delante;
                this.matrices[13] = matrix_izq_delante;

            }
            if(rebanada == 1){
                for(var i = 0; i<9; i=i+1){
                    this.cubos[i].RotacionY(angulo);
                    this.matrices[i] = this.cubos[i].matrix;
                }

                //reasignacion de posiciones
                var cubo_detras = this.cubos[6];
                var cubo_delante = this.cubos[3];
                var cubo_derecha = this.cubos[1];
                var cubo_derecha_detras = this.cubos[7];
                var cubo_derecha_delante = this.cubos[4];
                var cubo_izq = this.cubos[2];
                var cubo_izq_detras = this.cubos[8];
                var cubo_izq_delante = this.cubos[5];

                var matrix_detras = this.cubos[6].matrix;
                var matrix_delante = this.cubos[3].matrix;
                var matrix_derecha = this.cubos[1].matrix;
                var matrix_derecha_detras = this.cubos[7].matrix;
                var matrix_derecha_delante = this.cubos[4].matrix;
                var matrix_izq = this.cubos[2].matrix;
                var matrix_izq_detras = this.cubos[8].matrix;
                var matrix_izq_delante = this.cubos[5].matrix;

                this.cubos[2] = cubo_detras;
                this.matrices[2] = matrix_detras;
                this.cubos[5] = cubo_izq_detras;
                this.matrices[5] = matrix_izq_detras;
                this.cubos[8] = cubo_derecha_detras;
                this.matrices[8] = matrix_derecha_detras;
                this.cubos[6] = cubo_derecha;
                this.matrices[6] = matrix_derecha;
                this.cubos[3] = cubo_izq;
                this.matrices[3] = matrix_izq;
                this.cubos[7] = cubo_derecha_delante;
                this.matrices[7] = matrix_derecha_delante;
                this.cubos[1] = cubo_delante;
                this.matrices[1] = matrix_delante;
                this.cubos[4] = cubo_izq_delante;
                this.matrices[4] = matrix_izq_delante;
            }
            if(rebanada == 2){
                for(var i = 18; i<27; i=i+1){
                    this.cubos[i].RotacionY(angulo);
                    this.matrices[i] = this.cubos[i].matrix;
                }

                //reasignacion de posiciones
                var cubo_detras = this.cubos[24];
                var cubo_delante = this.cubos[21];
                var cubo_derecha = this.cubos[19];
                var cubo_derecha_detras = this.cubos[25];
                var cubo_derecha_delante = this.cubos[22];
                var cubo_izq = this.cubos[20];
                var cubo_izq_detras = this.cubos[26];
                var cubo_izq_delante = this.cubos[23];

                var matrix_detras = this.cubos[24].matrix;
                var matrix_delante = this.cubos[21].matrix;
                var matrix_derecha = this.cubos[19].matrix;
                var matrix_derecha_detras = this.cubos[25].matrix;
                var matrix_derecha_delante = this.cubos[22].matrix;
                var matrix_izq = this.cubos[20].matrix;
                var matrix_izq_detras = this.cubos[26].matrix;
                var matrix_izq_delante = this.cubos[23].matrix;

                this.cubos[20] = cubo_detras;
                this.matrices[20] = matrix_detras;
                this.cubos[23] = cubo_izq_detras;
                this.matrices[23] = matrix_izq_detras;
                this.cubos[26] = cubo_derecha_detras;
                this.matrices[26] = matrix_derecha_detras;
                this.cubos[24] = cubo_derecha;
                this.matrices[24] = matrix_derecha;
                this.cubos[21] = cubo_izq;
                this.matrices[21] = matrix_izq;
                this.cubos[25] = cubo_derecha_delante;
                this.matrices[25] = matrix_derecha_delante;
                this.cubos[19] = cubo_delante;
                this.matrices[19] = matrix_delante;
                this.cubos[22] = cubo_izq_delante;
                this.matrices[22] = matrix_izq_delante;
            }
        }

        if(eje == 2){//EJE Z
            if(rebanada == 0){
                for(var i = 3; i<27; i=i+9){
                    this.cubos[i].RotacionZ(angulo);
                    this.matrices[i] = this.cubos[i].matrix;

                    this.cubos[i + 1].RotacionZ(angulo);
                    this.matrices[i + 1] = this.cubos[i + 1].matrix;

                    this.cubos[i + 2].RotacionZ(angulo);
                    this.matrices[i + 2] = this.cubos[i + 2].matrix;
                }

                //reasignacion de posiciones
                var arriba = this.cubos[12];
                var ab = this.cubos[21];
                var derecha = this.cubos[4];
                var arriba_d = this.cubos[13];
                var ab_d = this.cubos[22];
                var izq = this.cubos[5];
                var arriba_izq = this.cubos[14];
                var ab_izq = this.cubos[23];

                var m_arriba = this.cubos[12].matrix;
                var m_ab = this.cubos[21].matrix;
                var m_derecha = this.cubos[4].matrix;
                var m_arriba_d = this.cubos[13].matrix;
                var m_ab_d = this.cubos[22].matrix;
                var m_izq = this.cubos[5].matrix;
                var m_arriba_izq = this.cubos[14].matrix;
                var m_ab_izq = this.cubos[23].matrix;

                this.cubos[12] = derecha;
                this.matrices[12] = m_derecha;
                this.cubos[13] = ab_d;
                this.matrices[13] = m_ab_d;
                this.cubos[14] = arriba_d;
                this.matrices[14] = m_arriba_d;
                this.cubos[4] = ab;
                this.matrices[4] = m_ab;
                this.cubos[22] = ab_izq;
                this.matrices[22] = m_ab_izq;
                this.cubos[21] = izq;
                this.matrices[21] = m_izq;
                this.cubos[23] = arriba_izq;
                this.matrices[23] = m_arriba_izq;
                this.cubos[5] = arriba;
                this.matrices[5] = m_arriba;
            }
            if(rebanada == 1){
                for(var i = 0; i<27; i=i+9){
                    this.cubos[i].RotacionZ(angulo);
                    this.matrices[i] = this.cubos[i].matrix;

                    this.cubos[i + 1].RotacionZ(angulo);
                    this.matrices[i + 1] = this.cubos[i + 1].matrix;

                    this.cubos[i + 2].RotacionZ(angulo);
                    this.matrices[i + 2] = this.cubos[i + 2].matrix;
                }

                //reasignacion de posiciones
                var arriba = this.cubos[9];
                var ab = this.cubos[18];
                var derecha = this.cubos[1];
                var arriba_d = this.cubos[10];
                var ab_d = this.cubos[19];
                var izq = this.cubos[2];
                var arriba_izq = this.cubos[11];
                var ab_izq = this.cubos[20];

                var m_arriba = this.cubos[9].matrix;
                var m_ab = this.cubos[18].matrix;
                var m_derecha = this.cubos[1].matrix;
                var m_arriba_d = this.cubos[10].matrix;
                var m_ab_d = this.cubos[19].matrix;
                var m_izq = this.cubos[2].matrix;
                var m_arriba_izq = this.cubos[11].matrix;
                var m_ab_izq = this.cubos[20].matrix;

                this.cubos[9] = derecha;
                this.matrices[9] = m_derecha;
                this.cubos[10] = ab_d;
                this.matrices[10] = m_ab_d;
                this.cubos[11] = arriba_d;
                this.matrices[11] = m_arriba_d;
                this.cubos[1] = ab;
                this.matrices[1] = m_ab;
                this.cubos[19] = ab_izq;
                this.matrices[19] = m_ab_izq;
                this.cubos[18] = izq;
                this.matrices[18] = m_izq;
                this.cubos[20] = arriba_izq;
                this.matrices[20] = m_arriba_izq;
                this.cubos[2] = arriba;
                this.matrices[2] = m_arriba;
            }
            if(rebanada == 2){
                for(var i = 6; i<27; i=i+9){
                    this.cubos[i].RotacionZ(angulo);
                    this.matrices[i] = this.cubos[i].matrix;

                    this.cubos[i + 1].RotacionZ(angulo);
                    this.matrices[i + 1] = this.cubos[i + 1].matrix;

                    this.cubos[i + 2].RotacionZ(angulo);
                    this.matrices[i + 2] = this.cubos[i + 2].matrix;
                }

                //reasignacion de posiciones
                var arriba = this.cubos[15];
                var ab = this.cubos[24];
                var derecha = this.cubos[7];
                var arriba_d = this.cubos[16];
                var ab_d = this.cubos[25];
                var izq = this.cubos[8];
                var arriba_izq = this.cubos[17];
                var ab_izq = this.cubos[26];

                var m_arriba = this.cubos[15].matrix;
                var m_ab = this.cubos[24].matrix;
                var m_derecha = this.cubos[7].matrix;
                var m_arriba_d = this.cubos[16].matrix;
                var m_ab_d = this.cubos[25].matrix;
                var m_izq = this.cubos[8].matrix;
                var m_arriba_izq = this.cubos[17].matrix;
                var m_ab_izq = this.cubos[26].matrix;

                this.cubos[15] = derecha;
                this.matrices[15] = m_derecha;
                this.cubos[16] = ab_d;
                this.matrices[16] = m_ab_d;
                this.cubos[17] = arriba_d;
                this.matrices[17] = m_arriba_d;
                this.cubos[7] = ab;
                this.matrices[7] = m_ab;
                this.cubos[25] = ab_izq;
                this.matrices[25] = m_ab_izq;
                this.cubos[24] = izq;
                this.matrices[24] = m_izq;
                this.cubos[26] = arriba_izq;
                this.matrices[26] = m_arriba_izq;
                this.cubos[8] = arriba;
                this.matrices[8] = m_arriba;
            }
        }
    }
}

var program = createProgram(gl, vertexShader, fragmentShader);
var cubo = new CuboRubix(gl, program);

cubo.dibujar();

const botonx = document.getElementById("rotarx");
const botony = document.getElementById("rotary");
const botonz = document.getElementById("rotarz");

const botonx1 = document.getElementById("rotarx1");
const botony1 = document.getElementById("rotary1");
const botonz1 = document.getElementById("rotarz1");

const botonx2 = document.getElementById("rotarx2");
const botony2 = document.getElementById("rotary2");
const botonz2 = document.getElementById("rotarz2");


botonx.addEventListener("click", function() {
    cubo.movimiento(0,0,90);
    cubo.dibujar();
});
botonx1.addEventListener("click", function() {
    cubo.movimiento(0,1,90);
    cubo.dibujar();
});
botonx2.addEventListener("click", function() {
    cubo.movimiento(0,2,90);
    cubo.dibujar();
});

botony.addEventListener("click", function() {
    cubo.movimiento(1,0,90);
    cubo.dibujar();
});
botony1.addEventListener("click", function() {
    cubo.movimiento(1,1,90);
    cubo.dibujar();
});
botony2.addEventListener("click", function() {
    cubo.movimiento(1,2,90);
    cubo.dibujar();
});

botonz.addEventListener("click", function() {
    cubo.movimiento(2,0,90);
    cubo.dibujar();
});
botonz1.addEventListener("click", function() {
    cubo.movimiento(2,1,90);
    cubo.dibujar();
});
botonz2.addEventListener("click", function() {
    cubo.movimiento(2,2,90);
    cubo.dibujar();
});
