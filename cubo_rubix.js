class CuboRubix {
    constructor(gl, program) {
        this.gl = gl;
        this.program = program;
        this.cubos = [];
        
        for(var i = -1; i < 2; i++){
            for(var j = -1; j < 2; j++){
                for(var k=-1; k < 2; k++){
                    this.cubos.push(new Cubo(i,j,k));
                }
            }
        }

    }


    dibujar(program) {
        for (let i = 0; i < 27; i=i+1) {
            gl.useProgram(program.program);
            gl.uniformMatrix4fv(program.matrixLocation, false, this.cubos[i].matrix);
            this.cubos[i].dibujar(program);
        }

    
    }

    RotarX(cant) {
        for (let i = 0; i < 27; i++) {
            this.cubos[i].RotacionX(cant);
          }
    }

    RotarY(cant) {
        for (let i = 0; i < 27; i++) {
            this.cubos[i].RotacionY(cant);
          }
    }

    RotarZ(cant) {
        for (let i = 0; i < 27; i++) {
            this.cubos[i].RotacionZ(cant);
          }
    }

    corregir(){
        for(var i = 0; i < 27; i=i+3){
            this.cubos[i].Trasladar(0,0, 2*LADO_CUBO);
        }

        for(var i = 1; i < 27; i=i+3){
            this.cubos[i].Trasladar(0,0, LADO_CUBO);
        }
    }
    
    //Los parámetros son: un entero para indicar el eje de rotación (0,1, o 2, para X, Y o Z), 
    //otro entero paraidentificar la rebanada (0,1 o 2), /de izq a derecha / de arriba a abajo / de delante a atrás
    //otro para identificar el ángulo de rotación (+/- 90 grados).
    movimiento(eje, rebanada, angulo){
        if(eje == 0){ //EJE X --> hacia delante
            /*
            if(rebanada == 0){
                
                this.cubos[4].RotacionX(90);

                this.cubos[5].Trasladar(0, LADO_CUBO,LADO_CUBO);
                this.cubos[5].RotacionX(90);

                this.cubos[7].Trasladar(0, -LADO_CUBO,LADO_CUBO);
                this.cubos[7].RotacionX(90);

                this.cubos[3].Trasladar(0, -LADO_CUBO,-LADO_CUBO);
                this.cubos[3].RotacionX(90);

                this.cubos[1].Trasladar(0, LADO_CUBO,-LADO_CUBO);
                this.cubos[1].RotacionX(90);

                this.cubos[2].Trasladar(0, 2*LADO_CUBO,0);
                this.cubos[2].RotacionX(90);

                this.cubos[8].Trasladar(0,0,2*LADO_CUBO);
                this.cubos[8].RotacionX(90);

                this.cubos[6].Trasladar(0, -2*LADO_CUBO,0);
                this.cubos[6].RotacionX(90);

                this.cubos[0].Trasladar(0,0,-2*LADO_CUBO);
                this.cubos[0].RotacionX(90);

            }
            if(rebanada == 1){
                this.cubos[13].RotacionX(90);

                this.cubos[14].Trasladar(0, LADO_CUBO,LADO_CUBO);
                this.cubos[14].RotacionX(90);

                this.cubos[16].Trasladar(0, -LADO_CUBO,LADO_CUBO);
                this.cubos[16].RotacionX(90);

                this.cubos[12].Trasladar(0, -LADO_CUBO,-LADO_CUBO);
                this.cubos[12].RotacionX(90);

                this.cubos[10].Trasladar(0, LADO_CUBO,-LADO_CUBO);
                this.cubos[10].RotacionX(90);

                this.cubos[11].Trasladar(0, 2*LADO_CUBO,0);
                this.cubos[11].RotacionX(90);

                this.cubos[17].Trasladar(0,0,2*LADO_CUBO);
                this.cubos[17].RotacionX(90);

                this.cubos[15].Trasladar(0, -2*LADO_CUBO,0);
                this.cubos[15].RotacionX(90);

                this.cubos[9].Trasladar(0,0,-2*LADO_CUBO);
                this.cubos[9].RotacionX(90);
            }
            if(rebanada == 2){
                this.cubos[22].RotacionX(90);

                this.cubos[23].Trasladar(0, LADO_CUBO,LADO_CUBO);
                this.cubos[23].RotacionX(90);

                this.cubos[25].Trasladar(0, -LADO_CUBO,LADO_CUBO);
                this.cubos[25].RotacionX(90);

                this.cubos[21].Trasladar(0, -LADO_CUBO,-LADO_CUBO);
                this.cubos[21].RotacionX(90);

                this.cubos[19].Trasladar(0, LADO_CUBO,-LADO_CUBO);
                this.cubos[19].RotacionX(90);

                this.cubos[20].Trasladar(0, 2*LADO_CUBO,0);
                this.cubos[20].RotacionX(90);

                this.cubos[26].Trasladar(0,0,2*LADO_CUBO);
                this.cubos[26].RotacionX(90);

                this.cubos[24].Trasladar(0, -2*LADO_CUBO,0);
                this.cubos[24].RotacionX(90);

                this.cubos[18].Trasladar(0,0,-2*LADO_CUBO);
                this.cubos[18].RotacionX(90);
            }*/
        }

        if(eje == 1){//EJE Y --> DE DERECHA A IZQUIERDA
            if(rebanada == 0){
                /*this.cubos[10].RotacionY(angulo);

                this.cubos[20].Trasladar(-LADO_CUBO, 0,-LADO_CUBO);
                this.cubos[20].RotacionY(90);

                this.cubos[2].Trasladar(0, 0,2*LADO_CUBO);
                this.cubos[2].RotacionY(90);

                this.cubos[0].Trasladar(2*LADO_CUBO, 0,0);
                this.cubos[0].RotacionY(90);

                this.cubos[18].Trasladar(0, 0,-2*LADO_CUBO);
                this.cubos[18].RotacionY(90);

                this.cubos[19].Trasladar(-LADO_CUBO, 0,-1*LADO_CUBO);
                this.cubos[19].RotacionY(90);

                this.cubos[11].Trasladar(-LADO_CUBO, 0,1*LADO_CUBO);
                this.cubos[11].RotacionY(90);

                this.cubos[1].Trasladar(LADO_CUBO, 0,1*LADO_CUBO);
                this.cubos[1].RotacionY(90);

                this.cubos[9].Trasladar(LADO_CUBO, 0,-1*LADO_CUBO);
                this.cubos[9].RotacionY(90);*/

            }
            if(rebanada == 1){
               
            }
            if(rebanada == 2){
                
            }
        }

        if(eje == 2){//EJE Z
            if(rebanada == 0){
                this.cubos[14].RotacionZ(angulo);

                this.cubos[20].Trasladar(0, 2*LADO_CUBO, 0);
                this.cubos[20].RotacionZ(angulo);

                this.cubos[23].Trasladar(-LADO_CUBO, LADO_CUBO, 0);
                this.cubos[23].RotacionZ(angulo);

                this.cubos[26].Trasladar(-2*LADO_CUBO, 0, 0);
                this.cubos[26].RotacionZ(angulo);

                this.cubos[17].Trasladar(-LADO_CUBO, -LADO_CUBO, 0);
                this.cubos[17].RotacionZ(angulo);

                this.cubos[8].Trasladar(0, -2*LADO_CUBO, 0);
                this.cubos[8].RotacionZ(angulo);

                this.cubos[5].Trasladar(LADO_CUBO, -LADO_CUBO, 0);
                this.cubos[5].RotacionZ(angulo);

                this.cubos[2].Trasladar(2*LADO_CUBO, 0, 0);
                this.cubos[2].RotacionZ(angulo);

                this.cubos[11].Trasladar(LADO_CUBO, LADO_CUBO, 0);
                this.cubos[11].RotacionZ(angulo);
            }
            if(rebanada == 1){
                this.cubos[13].RotacionZ(angulo);

                this.cubos[19].Trasladar(0, 2*LADO_CUBO, 0);
                this.cubos[19].RotacionZ(angulo);

                this.cubos[22].Trasladar(-LADO_CUBO, LADO_CUBO, 0);
                this.cubos[22].RotacionZ(angulo);

                this.cubos[25].Trasladar(-2*LADO_CUBO, 0, 0);
                this.cubos[25].RotacionZ(angulo);

                this.cubos[16].Trasladar(-LADO_CUBO, -LADO_CUBO, 0);
                this.cubos[16].RotacionZ(angulo);

                this.cubos[7].Trasladar(0, -2*LADO_CUBO, 0);
                this.cubos[7].RotacionZ(angulo);

                this.cubos[4].Trasladar(LADO_CUBO, -LADO_CUBO, 0);
                this.cubos[4].RotacionZ(angulo);

                this.cubos[1].Trasladar(2*LADO_CUBO, 0, 0);
                this.cubos[1].RotacionZ(angulo);

                this.cubos[10].Trasladar(LADO_CUBO, LADO_CUBO, 0);
                this.cubos[10].RotacionZ(angulo);
            }
            if(rebanada == 2){
                this.cubos[12].RotacionZ(angulo);

                this.cubos[18].Trasladar(0, 2*LADO_CUBO, 0);
                this.cubos[18].RotacionZ(angulo);

                this.cubos[21].Trasladar(-LADO_CUBO, LADO_CUBO, 0);
                this.cubos[21].RotacionZ(angulo);

                this.cubos[24].Trasladar(-2*LADO_CUBO, 0, 0);
                this.cubos[24].RotacionZ(angulo);

                this.cubos[15].Trasladar(-LADO_CUBO, -LADO_CUBO, 0);
                this.cubos[15].RotacionZ(angulo);

                this.cubos[6].Trasladar(0, -2*LADO_CUBO, 0);
                this.cubos[6].RotacionZ(angulo);

                this.cubos[3].Trasladar(LADO_CUBO, -LADO_CUBO, 0);
                this.cubos[3].RotacionZ(angulo);

                this.cubos[0].Trasladar(2*LADO_CUBO, 0, 0);
                this.cubos[0].RotacionZ(angulo);

                this.cubos[9].Trasladar(LADO_CUBO, LADO_CUBO, 0);
                this.cubos[9].RotacionZ(angulo);
            }
        }
    }
    
}
/*
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
*/