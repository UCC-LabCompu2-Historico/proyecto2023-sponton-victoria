/**
 * Función que permite mostrar u ocultar div según la elección de los radio button
 * @method mostrar_ocultar
 * @param {string} valor - El valor de los radio button (Triángulo, Cuadrado, Círculo o Rectángulo)
 * @return
 */
function mostrar_ocultar(valor){
    if (valor == "Triangulo") {
        document.getElementById("perimetro_Triangulo").style.display = 'block';
        document.getElementById("perimetro_Cuadrado").style.display = 'none';
        document.getElementById("perimetro_Circulo").style.display = 'none';
        document.getElementById("perimetro_Rectangulo").style.display = 'none';
    } else if (valor == "Cuadrado") {
        document.getElementById("perimetro_Triangulo").style.display = 'none';
        document.getElementById("perimetro_Cuadrado").style.display = 'block';
        document.getElementById("perimetro_Circulo").style.display = 'none';
        document.getElementById("perimetro_Rectangulo").style.display = 'none';
    }  else if (valor == "Circulo") {
        document.getElementById("perimetro_Triangulo").style.display = 'none';
        document.getElementById("perimetro_Cuadrado").style.display = 'none';
        document.getElementById("perimetro_Circulo").style.display = 'block';
        document.getElementById("perimetro_Rectangulo").style.display = 'none';
    } else if (valor == "Rectangulo") {
        document.getElementById("perimetro_Triangulo").style.display = 'none';
        document.getElementById("perimetro_Cuadrado").style.display = 'none';
        document.getElementById("perimetro_Circulo").style.display = 'none';
        document.getElementById("perimetro_Rectangulo").style.display = 'block';
    }
}

/**
 * Función que permite calcular el perímetro del Triángulo
 * @method CalculodePerimetro
 * @return {number} Resultado del Perimetro
 */

function PerimetroTrian() {
    var Lado1,Lado2,Lado3;
    Lado1 = document.getElementById("Lado1").value;
    Lado2 = document.getElementById("Lado2").value;
    Lado3 = document.getElementById("Lado3").value;
    if (document.getElementById("Triangulo").checked) {

        if (Lado1.includes(",")) {
            Lado1 = Lado1.replace(",", ".");
        }
        if (Lado2.includes(",")) {
            Lado2 = Lado2.replace(",", ".");
        }
        if (Lado3.includes(",")) {
            Lado3 = Lado3.replace(",", ".");
        }
        if(Lado1<0){                                    //Si se ingresa un numero negativo le saldra una alerta
            alert("Se ingreso un valor incorrecto ");
        }
        if(Lado2<0){
            alert("Se ingreso un valor incorrecto ");
        }
        if(Lado3<0){
            alert("Se ingreso un valor incorrecto ");
        }

        if (isNaN(Lado1)) {
            alert("Se ingreso un valor incorrecto.Deben ser números");
        }
        if (isNaN(Lado2)) {
            alert("Se ingreso un valor incorrecto.Deben ser números");
        }
        if (isNaN(Lado3)) {
            alert("Se ingreso un valor incorrecto.Deben ser números");
        }
        if (Lado1>0 && Lado2>0 && Lado3>0 && !isNaN(Lado1) && !isNaN(Lado2)&& !isNaN(Lado3)){
            document.getElementById("Resultado").value = Number (Lado1) + Number(Lado2)+ Number(Lado3);
            localStorage.setItem("Lado1", Lado1);
            localStorage.setItem("Lado2", Lado2);
            localStorage.setItem("Lado3", Lado3);
        }
    }
}

/**
 * Función que permite calcular el perímetro del Rectángulo
 * @method CalculodePerimetro
 * @return {number} Resultado del Perimetro
 */

function PerimetroRec() {
    var Base,Altura;
    Base = (document.getElementById("Base").value);
    Altura = (document.getElementById("Altura").value);
    if (document.getElementById("Rectangulo").checked) {

        if (Base.includes(",")) {
            Base = Base.replace(",", ".");
        }
        if (Altura.includes(",")) {
            Altura = Altura.replace(",", ".");
        }
        if(Base<0){
            alert("Se ingreso un valor incorrecto  ");
        }
        if(Altura<0){
            alert("Se ingreso un valor incorrecto.Deben ser números ");
        }
        if (isNaN(Base)) {
            alert("Se ingreso un valor incorrecto ");
        }
        if (isNaN(Altura)) {
            alert("Se ingreso un valor incorrecto.Deben ser números ");
        }
        document.getElementById("Resultado").value = Number(2*Altura) + Number (2*Base);
        localStorage.setItem("Base", Base);
        localStorage.setItem("Altura", Altura);
    }

}

/**
 * Función que permite calcular el perímetro del Cuadrado
 * @method CalculodePerimetro
 * @return {number} Resultado del Perimetro
 */

function PerimetroCuad() {
    var Lado;
    Lado = document.getElementById("Lado").value;
    if (document.getElementById("Cuadrado").checked) {
        if (Lado.includes(",")) {
            Lado = Lado.replace(",", ".");
        }
        if(Lado<0){
            alert("Se ingreso un valor incorrecto");
        }
        if (isNaN(Lado)) {
            alert("Se ingreso un valor incorrecto.Deben ser números");
        }
        document.getElementById("Resultado").value = Number(Lado * 4);
        localStorage.setItem("Lado", Lado);
    }
}

/**
 * Función que permite calcular el perímetro del Círculo
 * @method CalculodePerimetro
 * @return {number} Resultado del Perimetro
 */
function PerimetroCirc() {
    var Radio;
    Radio = document.getElementById("Radio").value;
    if (document.getElementById("Circulo").checked) {
        if (Radio.includes(",")) {
            Radio = Radio.replace(",", ".");
        }
        if(Radio<0){
            alert("Se ingreso un valor incorrecto ");
        }
        if (isNaN(Radio)) {
            alert("Se ingreso un valor incorrecto.Deben ser números ");
        }
        document.getElementById("Resultado").value = Number (2 * Math.PI * Radio);
        localStorage.setItem("Radio", Radio);

    }
}
/**
 * Función que permite dibujar un triángulo según la longitud de sus tres lados
 * @method DibujarTriangulo
 * @param Lado1 - Lado 1 ingresado por el usuario
 * @param Lado2 - Lado 2 por el usuario
 * @param Lado3- Lado 3 por el usuario
 * @return {canvas} dibujo de la figura geométrica
 */

Posicionx=0;
function DibujarTriangulo(){
    var Lado1, Lado2, Lado3;
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
    var anchoMax;
    Lado1 = localStorage.getItem("Lado1");
    Lado1 = localStorage.getItem("Lado2");
    Lado3 = localStorage.getItem("Lado3");
    anchoMax=canvas.width;
    ctx.beginPath();
    ctx.moveTo(100+Posicionx, 100);
    ctx.lineTo(Base/2+Posicionx,Altura);
    ctx.lineTo(Base+Posicionx,100);
    ctx.closePath();
    ctx.strokeStyle = "#bc57d5";
    ctx.stroke();
    Posicionx=Posicionx+10;
    if(Posicionx>canvas.width)
    {
        Posicionx=0;
    }
}
/**
 * Función que permite dibujar un rectángulo según la longitud de su Base y Altura
 * @method DibujarRectangulo
 * @param Base - La base ingresada por el usuario
 * @param Altura - La altura ingresada por el usuario
 * @return {canvas} dibujo de la figura geométrica
 */

function DibujarRectangulo(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d")
    var base, altura;
    var margen=50;
    base=localStorage.getItem("Base")*0.1;
    altura=localStorage.getItem("Altura")*0.1;
    canvas.width = canvas.width;
    ctx.fillStyle = "#572f84";
    ctx.fillRect(Posicionx, 0 + margen, 100*base, 100*altura);
    Posicionx=Posicionx+10;
    if(Posicionx>canvas.width)
    {
        Posicionx=0;
    }
}

/**
 * Función que permite dibujar un cuadrado según la longitud de su Lado
 * @method DibujarCuadrado
 * @param Lado - El lado ingresado por el usuario
 * @return {canvas} dibujo de la figura geométrica
 */
function DibujarCuadrado(Lado){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var margen = 50;
    var lado;
    lado=localStorage.getItem("Lado")*0.1;
    canvas.width = canvas.width;
    ctx.fillStyle = "#87367e";
    ctx.fillRect(Posicionx, 0 + margen, 100*lado, 100*lado);
    Posicionx=Posicionx+10;
    if(Posicionx>canvas.width)
    {
        Posicionx=0;
    }

}

/**
 * Función que permite dibujar un círculo según la longitud de su Radio
 * @method DibujarCirculo
 * @param Radio - El radio ingresado por el usuario
 * @return {canvas} dibujo de la figura geométrica
 */
function DibujarCirculo(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    //var xmax = canvas.width;
    var ymax = canvas.height;
    var radio;
    radio=localStorage.getItem("Radio")*0.1;
    canvas.width = canvas.width;
    ctx.arc(Posicionx, ymax / 2, 20*radio, 0, 2 * Math.PI);
    ctx.fillStyle = "#87367e";
    ctx.fill();
    ctx.stroke();
    Posicionx=Posicionx+10;
    if(Posicionx>canvas.width)
    {
        Posicionx=0;
    }
    ctx.stroke();

}