
const LADO_CUBO = 0.3;



class Cubo {
    constructor(i, j, k) { //i, j, k --> posicion inicial --> i = x, j=y, k=z

        this.vertices = [
            - LADO_CUBO/2 ,  - LADO_CUBO/2,  + LADO_CUBO/2, //0
            - LADO_CUBO/2,  + LADO_CUBO/2,  + LADO_CUBO/2, //1
            + LADO_CUBO/2,  + LADO_CUBO/2,  + LADO_CUBO/2, //2
            + LADO_CUBO/2,  - LADO_CUBO/2,  + LADO_CUBO/2, //3


            + LADO_CUBO/2,  + LADO_CUBO/2,  + LADO_CUBO/2, //4
            + LADO_CUBO/2,  - LADO_CUBO/2,  + LADO_CUBO/2, //5
            + LADO_CUBO/2,  + LADO_CUBO/2,  - LADO_CUBO/2, //6
            + LADO_CUBO/2,  - LADO_CUBO/2,  - LADO_CUBO/2, //7

            + LADO_CUBO/2,  + LADO_CUBO/2,  - LADO_CUBO/2, //8
            + LADO_CUBO/2,  - LADO_CUBO/2,  - LADO_CUBO/2, //9
            - LADO_CUBO/2,  + LADO_CUBO/2,  - LADO_CUBO/2, //10
            - LADO_CUBO/2,  - LADO_CUBO/2,  - LADO_CUBO/2, //11

            - LADO_CUBO/2,  + LADO_CUBO/2,  - LADO_CUBO/2, //12
            - LADO_CUBO/2,  - LADO_CUBO/2,  - LADO_CUBO/2, //13
            - LADO_CUBO/2,  + LADO_CUBO/2,  + LADO_CUBO/2, //14
            - LADO_CUBO/2 ,  - LADO_CUBO/2,  + LADO_CUBO/2, //15

            - LADO_CUBO/2,  + LADO_CUBO/2,  - LADO_CUBO/2, //16
            + LADO_CUBO/2,  + LADO_CUBO/2,  - LADO_CUBO/2, //17
            - LADO_CUBO/2,  + LADO_CUBO/2,  + LADO_CUBO/2, //18
            + LADO_CUBO/2,  + LADO_CUBO/2,  + LADO_CUBO/2, //19

            - LADO_CUBO/2 ,  - LADO_CUBO/2,  + LADO_CUBO/2, //20
            - LADO_CUBO/2,  - LADO_CUBO/2,  - LADO_CUBO/2, //21
            + LADO_CUBO/2,  - LADO_CUBO/2,  - LADO_CUBO/2, //22
            + LADO_CUBO/2,  - LADO_CUBO/2,  + LADO_CUBO/2, //23

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

        this.matrix = new Mat4([
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        ]);

        switch (i) {
            case 0:
                switch (j) {
                    case 0:
                        switch (k){
                            case 0:
                                this.colores = []; //en medio --> no se ve
                                for(var i = 0; i < 24; i++){
                                    this.colores.push(0,0,0,1);
                                }
                            break;

                            case 1:
                                this.colores = []; //fila de enmedio, columna de enmedio delante--> solo se ve la cara naranja
                                for(var i = 0; i < 8; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 8; i < 12; i++){
                                    this.colores.push(1, 0.5, 0 ,1); //naranja
                                }
                                for(var i = 12; i < 24; i++){
                                    this.colores.push(0,0,0,1);
                                }

                                this.Trasladar(0,0,-2*LADO_CUBO);

                            break;

                            case -1:
                                this.colores = []; //fila de enmedio, columna de enmedio detras --> solo se ve la cara roja
                                for(var i = 0; i < 4; i++){
                                    this.colores.push(1,0,0,1); //rojo
                                }
                                for(var i = 4; i < 24; i++){
                                    this.colores.push(0,0,0,1);
                                }

                                this.Trasladar(0,0,-1*LADO_CUBO);

                            break;
                        }
                    break;

                    case 1:
                        switch (k){
                            case 0:
                                this.colores = []; //en medio --> solo se ve la de arriba --> verde
                                for(var i = 0; i < 16; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 16; i < 20; i++){
                                    this.colores.push(0,1,0,1); //verde
                                }
                                for(var i = 20; i < 24; i++){
                                    this.colores.push(0,0,0,1);
                                }

                                this.Trasladar(0,LADO_CUBO,0);
                            break;

                            case 1:
                                
                                this.colores = []; //se ve la cara naranja y la verde arriba
                                for(var i = 0; i < 8; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 8; i < 12; i++){
                                    this.colores.push(1, 0.5, 0 ,1); //naranja
                                }
                                for(var i = 12; i < 16; i++){
                                    this.colores.push(0,0,0,1);
                                }

                                for(var i = 16; i < 20; i++){
                                    this.colores.push(0,1,0,1); //verde
                                }
                                for(var i = 20; i < 24; i++){
                                    this.colores.push(0,0,0,1);
                                }

                                this.Trasladar(0,LADO_CUBO,-2 * LADO_CUBO);

                            break;

                            case -1:
                                this.colores = []; //solo se ve la verde x arriba y la roja x detras
                                for(var i = 0; i < 4; i++){
                                    this.colores.push(1,0,0,1); //rojo
                                }
                                for(var i = 4; i < 16; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 16; i < 20; i++){
                                    this.colores.push(0,1,0,1); //verde 
                                }
                                for(var i = 20; i < 24; i++){
                                    this.colores.push(0,0,0,1);
                                }

                                this.Trasladar(0,LADO_CUBO,-1 * LADO_CUBO);

                            break;
                        }
                    break;

                    case -1:
                        switch (k){
                            case 0:
                                this.colores = []; //en medio --> solo se ve la de abajo --> azul
                                for(var i = 0; i < 20; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 20; i < 24; i++){
                                    this.colores.push(0,0,1,1); //azul
                                }

                                this.Trasladar(0,-LADO_CUBO,0);
                            break;

                            case 1:
                                
                                this.colores = []; //se ve la cara naranja y la azul abajo
                                for(var i = 0; i < 8; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 8; i < 12; i++){
                                    this.colores.push(1, 0.5, 0 ,1); //naranja
                                }
                                for(var i = 12; i < 20; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 20; i < 24; i++){
                                    this.colores.push(0,0,1,1); //Azul
                                }

                                this.Trasladar(0,-LADO_CUBO,-2 * LADO_CUBO);

                            break;

                            case -1:
                                this.colores = []; //solo se ve la azul x abajo y la roja x detras
                                for(var i = 0; i < 4; i++){
                                    this.colores.push(1,0,0,1); //rojo
                                }
                                for(var i = 4; i < 20; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                
                                for(var i = 20; i < 24; i++){
                                    this.colores.push(0,0,1,1); //Azul
                                }

                                this.Trasladar(0,-LADO_CUBO,-1 * LADO_CUBO);

                            break;
                        }
                    break;
                }

            break;
            case 1:
                switch (j) {
                    case 0:
                        switch (k){
                            case 0:
                                this.colores = []; //se ve solo el lado amarillo
                                for(var i = 0; i < 4; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 4; i < 8; i++){
                                    this.colores.push(1,1,0,1);
                                }
                                for(var i = 8; i < 24; i++){
                                    this.colores.push(0,0,0,1);
                                }

                                this.Trasladar(LADO_CUBO,0,0);
                                
                            break;

                            case 1:
                                this.colores = []; //fila de enmedio, columna de enmedio delante--> solo se ve la cara naranja Y EL AMARILLO
                                for(var i = 0; i < 4; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 4; i < 8; i++){
                                    this.colores.push(1,1,0,1);
                                }
                                for(var i = 8; i < 12; i++){
                                    this.colores.push(1, 0.5, 0 ,1); //naranja
                                }
                                for(var i = 12; i < 24; i++){
                                    this.colores.push(0,0,0,1);
                                }

                                this.Trasladar(LADO_CUBO,0,-2 * LADO_CUBO);

                            break;

                            case -1:
                                this.colores = []; //fila de enmedio, columna de enmedio detras --> solo se ve la cara roja Y EL AMARILLO
                                for(var i = 0; i < 4; i++){
                                    this.colores.push(1,0,0,1); //rojo
                                }
                                for(var i = 4; i < 8; i++){
                                    this.colores.push(1,1,0,1);
                                }
                                for(var i = 8; i < 24; i++){
                                    this.colores.push(0,0,0,1);
                                }

                                this.Trasladar(LADO_CUBO,0,-1 * LADO_CUBO);

                            break;
                        }
                    break;

                    case 1:
                        switch (k){
                            case 0:
                                this.colores = []; //en medio --> solo se ve la de arriba --> verde Y EL AMARILLO
                                for(var i = 0; i < 4; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 4; i < 8; i++){
                                    this.colores.push(1,1,0,1); //AMARILLO
                                }
                                for(var i = 8; i < 16; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 16; i < 20; i++){
                                    this.colores.push(0,1,0,1); //verde
                                }
                                for(var i = 20; i < 24; i++){
                                    this.colores.push(0,0,0,1);
                                }

                                this.Trasladar(LADO_CUBO,LADO_CUBO,0);
                            break;

                            case 1:
                                
                                this.colores = []; //se ve la cara naranja y la verde arriba Y LA AMARILLA AL LADO
                                for(var i = 0; i < 4; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 4; i < 8; i++){
                                    this.colores.push(1,1,0,1); //AMARILLO
                                }
                                for(var i = 8; i < 12; i++){
                                    this.colores.push(1, 0.5, 0 ,1); //naranja
                                }
                                for(var i = 12; i < 16; i++){
                                    this.colores.push(0,0,0,1);
                                }

                                for(var i = 16; i < 20; i++){
                                    this.colores.push(0,1,0,1); //verde
                                }
                                for(var i = 20; i < 24; i++){
                                    this.colores.push(0,0,0,1);
                                }

                                this.Trasladar(LADO_CUBO,LADO_CUBO,-2 * LADO_CUBO);

                            break;

                            case -1:
                                this.colores = []; //solo se ve la verde x arriba y la roja x detras Y LA AMARILLA AL LADO
                                for(var i = 0; i < 4; i++){
                                    this.colores.push(1,0,0,1); //rojo
                                }
                                for(var i = 4; i < 8; i++){
                                    this.colores.push(1,1,0,1); //AMARILLO
                                }
                                for(var i = 8; i < 16; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 16; i < 20; i++){
                                    this.colores.push(0,1,0,1); //verde 
                                }
                                for(var i = 20; i < 24; i++){
                                    this.colores.push(0,0,0,1);
                                }

                                this.Trasladar(LADO_CUBO,LADO_CUBO,-1 * LADO_CUBO);

                            break;
                        }
                    break;

                    case -1:
                        switch (k){
                            case 0:
                                this.colores = []; //en medio --> solo se ve la de abajo --> azul
                                for(var i = 0; i < 4; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 4; i < 8; i++){
                                    this.colores.push(1,1,0,1); //AMARILLO
                                }
                                for(var i = 8; i < 20; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 20; i < 24; i++){
                                    this.colores.push(0,0,1,1); //azul
                                }

                                this.Trasladar(LADO_CUBO,-LADO_CUBO,0);
                            break;

                            case 1:
                                
                                this.colores = []; //se ve la cara naranja y la azul abajo y amarillo al lado
                                for(var i = 0; i < 4; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 4; i < 8; i++){
                                    this.colores.push(1,1,0,1); //AMARILLO
                                }
                                for(var i = 8; i < 12; i++){
                                    this.colores.push(1, 0.5, 0 ,1); //naranja
                                }
                                for(var i = 12; i < 20; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 20; i < 24; i++){
                                    this.colores.push(0,0,1,1); //Azul
                                }

                                this.Trasladar(LADO_CUBO,-LADO_CUBO,-2 * LADO_CUBO);

                            break;

                            case -1:
                                this.colores = []; //solo se ve la azul x abajo y la roja x detras y el amarillo
                                for(var i = 0; i < 4; i++){
                                    this.colores.push(1,0,0,1); //rojo
                                }
                                for(var i = 4; i < 8; i++){
                                    this.colores.push(1,1,0,1); //AMARILLO
                                }
                                for(var i = 8; i < 20; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                
                                for(var i = 20; i < 24; i++){
                                    this.colores.push(0,0,1,1); //Azul
                                }

                                this.Trasladar(LADO_CUBO,-LADO_CUBO,-1 * LADO_CUBO);

                            break;
                        }
                    break;

                    
                }
            break;
            
            case -1:
                switch (j) {
                    case 0:
                        switch (k){
                            case 0:
                                this.colores = []; //en medio --> no se ve
                                for(var i = 0; i < 12; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 12; i < 16; i++){
                                    this.colores.push(1,1,1,1); //BLANCO
                                }
                                for(var i = 16; i < 24; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                this.Trasladar(-LADO_CUBO,0,0);
                            break;

                            case 1:
                                this.colores = []; //fila de enmedio, columna de enmedio delante--> solo se ve la cara naranja
                                for(var i = 0; i < 8; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 8; i < 12; i++){
                                    this.colores.push(1, 0.5, 0 ,1); //naranja
                                }
                                for(var i = 12; i < 16; i++){
                                    this.colores.push(1,1,1,1); //BLANCO
                                }
                                for(var i = 16; i < 24; i++){
                                    this.colores.push(0,0,0,1);
                                }

                                this.Trasladar(-LADO_CUBO,0,-2 * LADO_CUBO);

                            break;

                            case -1:
                                this.colores = []; //fila de enmedio, columna de enmedio detras --> solo se ve la cara roja
                                for(var i = 0; i < 4; i++){
                                    this.colores.push(1,0,0,1); //rojo
                                }
                                for(var i = 4; i < 12; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 12; i < 16; i++){
                                    this.colores.push(1,1,1,1); //BLANCO
                                }
                                for(var i = 16; i < 24; i++){
                                    this.colores.push(0,0,0,1);
                                }

                                this.Trasladar(-LADO_CUBO,0,-1 * LADO_CUBO);

                            break;
                        }
                    break;

                    case 1:
                        switch (k){
                            case 0:
                                this.colores = []; //en medio --> solo se ve la de arriba --> verde
                                for(var i = 0; i < 12; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 12; i < 16; i++){
                                    this.colores.push(1,1,1,1); //BLANCO
                                }
                                for(var i = 16; i < 20; i++){
                                    this.colores.push(0,1,0,1); //verde
                                }
                                for(var i = 20; i < 24; i++){
                                    this.colores.push(0,0,0,1);
                                }

                                this.Trasladar(-LADO_CUBO,LADO_CUBO,0);
                            break;

                            case 1:
                                
                                this.colores = []; //se ve la cara naranja y la verde arriba
                                for(var i = 0; i < 8; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 8; i < 12; i++){
                                    this.colores.push(1, 0.5, 0 ,1); //naranja
                                }
                                for(var i = 12; i < 16; i++){
                                    this.colores.push(1,1,1,1); //BLANCO
                                }

                                for(var i = 16; i < 20; i++){
                                    this.colores.push(0,1,0,1); //verde
                                }
                                for(var i = 20; i < 24; i++){
                                    this.colores.push(0,0,0,1);
                                }

                                this.Trasladar(-LADO_CUBO,LADO_CUBO,-2 * LADO_CUBO);

                            break;

                            case -1:
                                this.colores = []; //solo se ve la verde x arriba y la roja x detras
                                for(var i = 0; i < 4; i++){
                                    this.colores.push(1,0,0,1); //rojo
                                }
                                for(var i = 4; i < 12; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 12; i < 16; i++){
                                    this.colores.push(1,1,1,1); //BLANCO
                                }

                                for(var i = 16; i < 20; i++){
                                    this.colores.push(0,1,0,1); //verde 
                                }
                                for(var i = 20; i < 24; i++){
                                    this.colores.push(0,0,0,1);
                                }

                                this.Trasladar(-LADO_CUBO,LADO_CUBO,-1 * LADO_CUBO);

                            break;
                        }
                    break;

                    case -1:
                        switch (k){
                            case 0:
                                this.colores = []; //en medio --> solo se ve la de abajo --> azul
                                for(var i = 0; i < 12; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 12; i < 16; i++){
                                    this.colores.push(1,1,1,1); //BLANCO
                                }
                                for(var i = 16; i < 20; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 20; i < 24; i++){
                                    this.colores.push(0,0,1,1); //azul
                                }

                                this.Trasladar(-LADO_CUBO,-LADO_CUBO,0);
                            break;

                            case 1:
                                
                                this.colores = []; //se ve la cara naranja y la azul abajo
                                for(var i = 0; i < 8; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 8; i < 12; i++){
                                    this.colores.push(1, 0.5, 0 ,1); //naranja
                                }
                                for(var i = 12; i < 16; i++){
                                    this.colores.push(1,1,1,1); //BLANCO
                                }
                                for(var i = 16; i < 20; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 20; i < 24; i++){
                                    this.colores.push(0,0,1,1); //Azul
                                }

                                this.Trasladar(-LADO_CUBO,-LADO_CUBO,-2 * LADO_CUBO);

                            break;

                            case -1:
                                this.colores = []; //solo se ve la azul x abajo y la roja x detras
                                for(var i = 0; i < 4; i++){
                                    this.colores.push(1,0,0,1); //rojo
                                }
                                for(var i = 4; i < 12; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                for(var i = 12; i < 16; i++){
                                    this.colores.push(1,1,1,1); //BLANCO
                                }
                                for(var i = 16; i < 20; i++){
                                    this.colores.push(0,0,0,1);
                                }
                                
                                for(var i = 20; i < 24; i++){
                                    this.colores.push(0,0,1,1); //Azul
                                }

                                this.Trasladar(-LADO_CUBO,-LADO_CUBO,-1 * LADO_CUBO);

                            break;
                        }
                    break;
                }
  
            break;
        }

        this.i = i;
        this.j = j;
        this.k = k;
    

        this.positionBuffer = undefined;
        this.colorBuffer = undefined;
        this.indexBuffer = undefined;
        
    }

    dibujar(program) {
        if (typeof this.positionBuffer === 'undefined') {
    
            this.positionBuffer = gl.createBuffer();
    
            gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
            gl.enableVertexAttribArray(program.positionLocation);
            gl.vertexAttribPointer(program.positionLocation, 3, gl.FLOAT, false, 0, 0);
    
            this.colorBuffer = gl.createBuffer();
    
            gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.colores), gl.STATIC_DRAW);
            gl.enableVertexAttribArray(program.colorLocation);
            gl.vertexAttribPointer(program.colorLocation, 4, gl.FLOAT, false, 0, 0);
    
            this.indexBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), gl.STATIC_DRAW);
            gl.useProgram(program.program);
            
        } 

        
        gl.enable(gl.DEPTH_TEST)
    
        gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

        gl.vertexAttribPointer(program.colorLocation, 4, gl.FLOAT, false, 0, 0);
        gl.uniformMatrix4fv(program.matrixLocation, false, this.matrix);
    
        gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_SHORT, 0);
    }

    Trasladar(x,y,z){
        let vector = [x,y,z];
        var m14 = Mat4_Translate(vector);
        this.matrix = this.matrix.compose(m14);
    }
    
    RotacionX(angulo){
        var mov = parseFloat(angulo); 
        var m14 = Mat4_RotationXdeg(angulo);
        this.matrix = this.matrix.compose(m14);
    }
    
    RotacionY(angulo){
        var mov = parseFloat(angulo); 
        var m14 = Mat4_RotationYdeg(mov);
        this.matrix = this.matrix.compose(m14);
    }
    
    RotacionZ(angulo){
        var mov = parseFloat(angulo); 
        var m14 = Mat4_RotationZdeg(mov);
        this.matrix = this.matrix.compose(m14);
    }
}

