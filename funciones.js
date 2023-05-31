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
    Lado1 = Number(document.getElementById("Lado1").value);
    Lado2 = Number(document.getElementById("Lado2").value);
    Lado3 = Number(document.getElementById("Lado3").value);
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
            document.getElementById("Resultado").value = Lado1+Lado2+Lado3;
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
    Base = Number(document.getElementById("Base").value);
    Altura = Number(document.getElementById("Altura").value);
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
        document.getElementById("Resultado").value = 2*Altura + 2*Base;
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
    Lado = Number(document.getElementById("Lado").value);
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
        document.getElementById("Resultado").value = Lado * 4;
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
    Radio = Number(document.getElementById("Radio").value);
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
        document.getElementById("Resultado").value = 2 * Math.PI * Radio;
        localStorage.setItem("Radio", Radio);

    }
}