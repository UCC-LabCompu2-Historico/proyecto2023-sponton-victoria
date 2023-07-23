/**
 * Función que permite mostrar u ocultar div según la elección de los radio button
 * @method mostrar_ocultar
 * @param {string} valor - El valor de los radio button (Triángulo, Cuadrado, Círculo o Rectángulo)
 * @return
 */
function mostrar_ocultar(valor) {
    document.getElementById("perimetro_Triangulo").style.display = "none";
    document.getElementById("perimetro_Cuadrado").style.display = "none";
    document.getElementById("perimetro_Rectangulo").style.display = "none";
    document.getElementById("perimetro_Circulo").style.display = "none";
    if (valor === "Triangulo") {
        document.getElementById("perimetro_Triangulo").style.display = 'block';
    } else if (valor === "Cuadrado") {
        document.getElementById("perimetro_Cuadrado").style.display = 'block';
    } else if (valor === "Circulo") {
        document.getElementById("perimetro_Circulo").style.display = 'block';
    } else if (valor === "Rectangulo") {
        document.getElementById("perimetro_Rectangulo").style.display = 'block';
    }
}

/**
 * Función que permite calcular el perímetro del Triángulo
 * @method PerimetroTrian
 * @return {number} Resultado del Perimetro
 */

function PerimetroTrian() {
    let Lado1, Lado2, Lado3;

    Lado1 = document.getElementById("Lado1").value;
    Lado2 = document.getElementById("Lado2").value;
    Lado3 = document.getElementById("Lado3").value;

    if (document.getElementById("Triangulo").checked) {
        Lado1 = Number(Lado1.replace(",", "."));
        Lado2 = Number(Lado2.replace(",", "."));
        Lado3 = Number(Lado3.replace(",", "."));


        if (Lado1 < 0 || Lado2 < 0 || Lado3 < 0) {
            alert("Se ingresó un valor incorrecto");
            document.Formulario.Lado1.value = "";
            document.Formulario.Lado2.value = "";
            document.Formulario.Lado3.value = "";



        }


        if (isNaN(Lado1) || isNaN(Lado2) || isNaN(Lado3)) {
            alert("Se ingresó un valor incorrecto.Deben ser numeros");
            document.Formulario.Lado1.value = "";
            document.Formulario.Lado2.value = "";
            document.Formulario.Lado3.value = "";
            //Permite limpiar el canvas
            document.getElementById("Resultado").value = canvas.width;
            document.getElementById("Resultado").value = "";
        }

        if (Lado1 > 0 && Lado2 > 0 && Lado3 > 0 && !isNaN(Lado1) && !isNaN(Lado2) && !isNaN(Lado3)) {
            document.getElementById("Resultado").value = CambiarUnidades(document.getElementById("perimetro_Triangulo").value, Lado1 + Lado2 + Lado3);
            localStorage.setItem("Lado1", Lado1);
            localStorage.setItem("Lado2", Lado2);
            localStorage.setItem("Lado3", Lado3);
            DibujarTriangulo(Lado1, Lado2, Lado3);
            AnimarTriangulo();
        }

    }
}

/**
 * Función que permite calcular el perímetro del Rectángulo
 * @method PerimetroRec
 * @return {number} Resultado del Perimetro
 */

function PerimetroRec() {
    let Base, Altura;

    Base = (document.getElementById("Base").value);
    Altura = (document.getElementById("Altura").value);

    if (document.getElementById("Rectangulo").checked) {
        Base = Number(Base.replace(",", "."));
        Altura = Number(Altura.replace(",", "."));

        if (Base < 0 || Altura < 0) {
            alert("Se ingresó un valor incorrecto");
            document.Formulario.Base.value = "";
            document.Formulario.Altura.value = "";
            //Permite limpiar el canvas
            canvas.width = canvas.width;
        }

        if (isNaN(Base) || isNaN(Altura)) {
            alert("Se ingresó un valor incorrecto.Deben ser numeros");
            document.Formulario.Base.value = "";
            document.Formulario.Altura.value = "";
            //Permite limpiar el canvas
            canvas.width = canvas.width;
        }

        if (Base > 0 && Altura > 0 && !isNaN(Base) && !isNaN(Altura)) {
            document.getElementById("Resultado").value = CambiarUnidades(document.getElementById("perimetro_Rectangulo").value, 2 * Base + 2 * Altura);
            localStorage.setItem("Base", Base);
            localStorage.setItem("Altura", Altura);
            DibujarRectangulo(Base, Altura);
            AnimarRectangulo();
        }

    }
}

/**
 * Función que permite calcular el perímetro del Cuadrado
 * @method PerimetroCuad
 * @return {number} Resultado del Perimetro
 */

function PerimetroCuad() {
    let Lado;

    Lado = document.getElementById("Lado").value;
    Lado = Number(Lado.replace(",", "."));

    if (document.getElementById("Cuadrado").checked) {
        if (Lado < 0) {
            alert("Se ingresó un valor incorrecto");
            document.Formulario.Lado.value = "";
            //Permite limpiar el canvas
            canvas.width = canvas.width;
        }
        if (isNaN(Lado)) {
            alert("Se ingresó un valor incorrecto.Deben ser numeros");
            document.Formulario.Lado.value = "";
            //Permite limpiar el canvas
            canvas.width = canvas.width;
        }
        if (Lado > 0 && !isNaN(Lado)) {
            document.getElementById("Resultado").value = CambiarUnidades(document.getElementById("perimetro_Cuadrado").value, 4 * Lado);
            localStorage.setItem("Lado", Lado);
            DibujarCuadrado(Lado);
            AnimarCuadrado();
        }

    }
}

/**
 * Función que permite calcular el perímetro del Círculo
 * @method PerimetroCirc
 * @return {number} Resultado del Perimetro
 */
function PerimetroCirc() {
    let Radio;

    Radio = document.getElementById("Radio").value;
    Radio = Number(Radio.replace(",", "."));

    if (document.getElementById("Circulo").checked) {
        if (Radio < 0) {
            alert("Se ingresó un valor incorrecto");
            document.Formulario.Radio.value = "";
            //Permite limpiar el canvas
            canvas.width = canvas.width;
        }
        if (isNaN(Radio)) {
            alert("Se ingresó un valor incorrecto.Deben ser numeros");
            document.Formulario.Radio.value = "";
            //Permite limpiar el canvas
            canvas.width = canvas.width;
        }
        if (Radio > 0 && !isNaN(Radio)) {
            document.getElementById("Resultado").value = 2 * Math.PI * Radio;
            localStorage.setItem("Radio", Radio);
            DibujarCirculo(Radio);
            AnimarCirculo();

        }

    }
}


/**
 * Función que permite cambiar que el resultado cambie segun la unidad que se elige
 * @method CambiarUnidades
 * @param valor-
 * @param Resultado- Resultado del perimetro de la figura
 * @return Resultado
 */

function CambiarUnidades(valor, Resultado) {
    console.log(valor);
    console.log(Resultado);

    if (valor === "Metros" || valor === undefined) {
        canvas.width = canvas.width;
        document.getElementById("Resultado").value = Resultado + " Metros";
    }
    if (valor === "Centímetros") {
        canvas.width = canvas.width;
        document.getElementById("Resultado").value = Resultado + " Centímetros";

    }
    if (valor === "Milímetros") {
        canvas.width = canvas.width;
        document.getElementById("Resultado").value = Resultado + " Milímetros";

    }
    return Resultado;
}

/**
 * Función que permite dibujar un triángulo según la longitud de sus tres lados
 * @method DibujarTriangulo
 * @param Lado1 - Lado 1 ingresado por el usuario
 * @param Lado2 - Lado 2 por el usuario
 * @param Lado3- Lado 3 por el usuario
 * @return {canvas} dibujo de la figura geométrica
 */
Posicionx = 0;

function DibujarTriangulo(lado1, lado2, lado3) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    if (lado1 && lado2 && lado3) {
        // Verificar si los lados forman un triángulo válido
        if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
            alert("Los lados ingresados no forman un triángulo válido.");
            document.Formulario.Lado1.value = "";
            document.Formulario.Lado2.value = "";
            document.Formulario.Lado3.value = "";
            console.log("Los lados ingresados no forman un triángulo válido.");
            document.getElementById("Resultado").value = "";
            return;
        }

    }


    // Calcular los ángulos del triángulo
    let angulo1 = Math.acos((lado2 * lado2 + lado3 * lado3 - lado1 * lado1) / (2 * lado2 * lado3));


    // Convertir los ángulos de radianes a grados
    angulo1 = angulo1 * (180 / Math.PI);


    // Establecer el tamaño del canvas
    canvas.width = lado1 + lado2 + lado3;
    canvas.height = Math.max(lado1, lado2, lado3) + 20;

    // Dibujar el triángulo
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(lado1, 0);
    ctx.lineTo(lado2 * Math.cos(angulo1 * (Math.PI / 180)), lado2 * Math.sin(angulo1 * (Math.PI / 180)));
    ctx.closePath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#bc57d5";
    ctx.stroke();
}


/**
 * Función que permite dibujar un rectángulo según la longitud de su Base y Altura
 * @method DibujarRectángulo
 * @param Base - La base ingresada por el usuario
 * @param Altura - La altura ingresada por el usuario
 * @return {canvas} dibujo de la figura geométrica
 */

function DibujarRectangulo() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d")
    const margen = 50;
    base = localStorage.getItem("Base") * 0.1;
    altura = localStorage.getItem("Altura") * 0.1;
    canvas.width = canvas.width;
    ctx.fillStyle = "#bc57d5";
    ctx.fillRect(Posicionx, 0 + margen, 100 * base, 100 * altura);
    Posicionx = Posicionx + 10;
    if (Posicionx > canvas.width) {
        Posicionx = 0;
    }
}

/**
 * Función que permite dibujar un cuadrado según la longitud de su Lado
 * @method DibujarCuadrado
 * @param Lado - El lado ingresado por el usuario
 * @return {canvas} dibujo de la figura geométrica
 */
function DibujarCuadrado(Lado) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const margen = 50;
    Lado = localStorage.getItem("Lado") * 0.1;
    canvas.width = canvas.width;
    ctx.fillStyle = "#bc57d5";
    ctx.fillRect(Posicionx, 0 + margen, 100 * Lado, 100 * Lado);
    Posicionx = Posicionx + 10;
    if (Posicionx > canvas.width) {
        Posicionx = 0;
    }

}

/**
 * Función que permite dibujar un círculo según la longitud de su Radio
 * @method DibujarCirculo
 * @param Radio - El radio ingresado por el usuario
 * @return {canvas} dibujo de la figura geométrica
 */


function DibujarCirculo(radio) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');


    // Establecer el tamaño del canvas
    canvas.width = radio * 2;
    canvas.height = radio * 2;

    // Dibujar el círculo
    ctx.beginPath();
    ctx.arc(radio, radio, radio, 0, 2 * Math.PI);
    ctx.lineWidth = 1;
    ctx.fillStyle = "#bc57d5";
    ctx.fill();
    ctx.stroke();
}
/**
 * Función que permite animar un triángulo según la longitud de sus lados
 * @method AnimarTriangulo
 * @return {canvas} dibujo de la figura geométrica
 */
x=0;
dx=2;
function AnimarTriangulo(){
    ctx.beginPath();
    ctx.moveTo(x, 100);
    ctx.lineTo(lado1, 100);
    ctx.lineTo(lado2 * Math.cos(angulo1 * (Math.PI / 180)), lado2 * Math.sin(angulo1 * (Math.PI / 180)));
    ctx.closePath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#bc57d5";
    ctx.stroke();

    if (x>canvas.width){
        x=0;
    }
    x+=dx;
}
/**
 * Función que permite animar un rectángulo según la longitud de su Base y Altura
 * @method AnimarRectangulo
 * @return {canvas} dibujo de la figura geométrica
 */
x=0;
function AnimarRectangulo(){
    setInterval(DibujarRectangulo,1000);
    if (x>canvas.width){
        x=0;
    }
}
/**
 * Función que permite animar un círculo según la longitud de su Radio
 * @method AnimarCirculo
 * @return {canvas} dibujo de la figura geométrica
 */
x=0;
function AnimarCirculo(){
    setInterval(DibujarCirculo, 1000);
    if (x>canvas.width){
        x=0;
    }
}
/**
 * Función que permite animar un cuadrado según la longitud de su Lado
 * @method AnimarCuadrado
 * @return {canvas} dibujo de la figura geométrica
 */
x=0;
function AnimarCuadrado(){
    setInterval(DibujarCuadrado, 1000);
    if (x>canvas.width){
        x=0;
    }
}
