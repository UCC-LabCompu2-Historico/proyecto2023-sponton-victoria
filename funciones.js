/**
 * Función que permite mostrar u ocultar div según la elección de los radio button
 * @method mostrar_ocultar
 * @param {string} valor - El valor de los radio button (Triángulo, Cuadrado, Círculo o Rectángulo)
 * @return
 */
function mostrar_ocultar(valor) {
    const canvas = document.getElementById("canvas");
    canvas.width = canvas.width;
    document.getElementById("perimetro_Triangulo").style.display = "none";
    document.getElementById("perimetro_Cuadrado").style.display = "none";
    document.getElementById("perimetro_Rectangulo").style.display = "none";
    document.getElementById("perimetro_Circulo").style.display = "none";
    if (valor === "Triangulo") {
        document.getElementById("perimetro_Triangulo").style.display = "block";
    } else if (valor === "Cuadrado") {
        document.getElementById("perimetro_Cuadrado").style.display = "block";
    } else if (valor === "Circulo") {
        document.getElementById("perimetro_Circulo").style.display = "block";
    } else if (valor === "Rectangulo") {
        document.getElementById("perimetro_Rectangulo").style.display = "block";
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
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            document.getElementById("Resultado").value = "";
        }

        if (
            Lado1 > 0 &&
            Lado2 > 0 &&
            Lado3 > 0 &&
            !isNaN(Lado1) &&
            !isNaN(Lado2) &&
            !isNaN(Lado3)
        ) {
            let unit = document.getElementById("InsertarDatos").value;
            document.getElementById("Resultado").value = `${(Lado1 + Lado2 + Lado3).toFixed(2)} ${unit}`;
            DibujarTriangulo(Lado1, Lado2, Lado3);
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

    Base = document.getElementById("Base").value;
    Altura = document.getElementById("Altura").value;

    if (document.getElementById("Rectangulo").checked) {
        Base = Number(Base.replace(",", "."));
        Altura = Number(Altura.replace(",", "."));

        if (Base < 0 || Altura < 0) {
            alert("Se ingresó un valor incorrecto");
            document.Formulario.Base.value = "";
            document.Formulario.Altura.value = "";
            //Permite limpiar el canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        if (isNaN(Base) || isNaN(Altura)) {
            alert("Se ingresó un valor incorrecto.Deben ser numeros");
            document.Formulario.Base.value = "";
            document.Formulario.Altura.value = "";
            //Permite limpiar el canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        if (Base > 0 && Altura > 0 && !isNaN(Base) && !isNaN(Altura)) {
            let unit = document.getElementById("InsertarDatos").value;
            let resultado = (2 * Base + 2 * Altura).toFixed(2);
            document.getElementById("Resultado").value = `${resultado} ${unit}`;
            DibujarRectangulo(Base, Altura);
        }
    }
}

/**
 * Función que permite calcular el perímetro del Cuadrado
 * @method PerimetroCuad
 * @return {number} Resultado del Perimetro
 */

function PerimetroCuad() {
    let lado;
    lado = document.getElementById("lado").value;
    lado = Number(lado.replace(",", "."));

    if (document.getElementById("Cuadrado").checked) {
        if (lado < 0) {
            alert("Se ingresó un valor incorrecto");
            document.Formulario.lado.value = "";
            //Permite limpiar el canvas
            canvas.width = canvas.width;
        }
        if (isNaN(lado)) {
            alert("Se ingresó un valor incorrecto.Deben ser numeros");
            document.Formulario.lado.value = "";
            //Permite limpiar el canvas
            canvas.width = canvas.width;
        }
        if (lado > 0 && !isNaN(lado)) {
            let unit = document.getElementById("InsertarDatos").value;
            document.getElementById("Resultado").value = `${(4 * lado).toFixed(2)} ${unit}`;
            DibujarCuadrado(lado);
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
            document.getElementById("Resultado").value = (2 * Math.PI * Radio).toFixed(2);
            DibujarCirculo(Radio);
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
    Resultado = parseFloat(document.getElementById("Resultado").value);

    if (valor === "Metros" || valor === undefined) {
        document.getElementById("Resultado").value = `${Resultado} Metros`;
    }
    if (valor === "Centímetros") {
        document.getElementById("Resultado").value = `${Resultado} Centímetros`;
    }
    if (valor === "Milímetros") {
        document.getElementById("Resultado").value = `${Resultado} Milímetros`;
    }
    return Resultado;
}

/**
 * Función que permite dibujar un triángulo según la longitud de sus tres lados
 * @method DibujarTriangulo
 * @param Lado1 - lado 1 ingresado por el usuario
 * @param Lado2 - lado 2 por el usuario
 * @param Lado3- lado 3 por el usuario
 * @return {canvas} dibujo de la figura geométrica
 */
escaladorTrian = 1;

function DibujarTriangulo(lado1, lado2, lado3) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    if (lado1 && lado2 && lado3) {
        // Verificar si los lados forman un triángulo válido
        if (
            lado1 + lado2 <= lado3 ||
            lado1 + lado3 <= lado2 ||
            lado2 + lado3 <= lado1
        ) {
            alert("Los lados ingresados no forman un triángulo válido.");
            document.Formulario.Lado1.value = "";
            document.Formulario.Lado2.value = "";
            document.Formulario.Lado3.value = "";
            console.log("Los lados ingresados no forman un triángulo válido.");
            document.getElementById("Resultado").value = "";
            return;
        }

    }
    if (lado1 > 680 || lado2 > 680 || lado3 > 680) {
        // Muestra un mensaje indicando que los valores son muy grandes
        alert("Los valores son muy grandes, no se puede realizar la figura.")
        return;
    }
    // Calcular los ángulos del triángulo
    let angulo1 = Math.acos(
        (lado2 * lado2 + lado3 * lado3 - lado1 * lado1) / (2 * lado2 * lado3)
    );

    // Convertir los ángulos de radianes a grados
    angulo1 = angulo1 * (180 / Math.PI);

    // Dibujar el triángulo gradualmente utilizando animación
    if (escaladorTrian <= 100) {
        canvas.width = canvas.width;
        ctx.beginPath();
        ctx.moveTo(0, 0); // punto de partida
        ctx.lineTo(lado1 * (escaladorTrian / 100), 0); // lado 1
        ctx.lineTo(
            lado2 * Math.cos(angulo1 * (Math.PI / 180)), // lado 2 * coseno del ángulo 1
            lado2 * Math.sin(angulo1 * (Math.PI / 180)) * (escaladorTrian / 100) // lado 2 * seno del ángulo 1
        );
        ctx.closePath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#bc57d5";
        ctx.stroke();

        escaladorTrian += 1;
        requestAnimationFrame(() => DibujarTriangulo(lado1, lado2, lado3)); // se llama a la función recursivamente para que se ejecute la animación
    } else {
        escaladorTrian = 0;
    }
}

/**
 * Función que permite dibujar un rectángulo según la longitud de su Base y Altura
 * @method DibujarRectángulo
 * @param Base - La base ingresada por el usuario
 * @param Altura - La altura ingresada por el usuario
 * @return {canvas} dibujo de la figura geométrica
 */

let escaladorRec = 1;
function DibujarRectangulo(base, altura) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    if (base && altura) {
        if (base <= 0 || altura <= 0) {
            alert("Los lados ingresados no forman un rectángulo válido.");
            document.Formulario.Base.value = "";
            document.Formulario.Altura.value = "";
            console.log("Los lados ingresados no forman un rectángulo válido.");
            document.getElementById("Resultado").value = "";
            return;
        }
    }
    if (base > 680 || altura > 600) {
        // Muestra un mensaje indicando que los valores son muy grandes
        alert("Los valores son muy grandes, no se puede realizar la figura.")
        return;
    }

    if (escaladorRec <= 100) {
        canvas.width = canvas.width;
        ctx.beginPath();
        ctx.moveTo(0, 0); // el lado de la izquierda del rectángulo
        ctx.lineTo(base * (escaladorRec / 100), 0); // el lado de arriba del rectángulo
        ctx.lineTo(base * (escaladorRec / 100), altura * (escaladorRec / 100)); // el lado de la derecha del rectángulo
        ctx.lineTo(0, altura * (escaladorRec / 100)); // el lado de abajo del rectángulo
        ctx.closePath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#bc57d5";
        ctx.fillStyle = "#bc57d5";
        ctx.stroke();


        escaladorRec += 1;
        requestAnimationFrame(() => DibujarRectangulo(base, altura)); // se llama a la función recursivamente para que se ejecute la animación
    } else {
        escaladorRec = 0;
    }
}

/**
 * Función que permite dibujar un cuadrado según la longitud de su lado
 * @method DibujarCuadrado
 * @param lado - El lado ingresado por el usuario
 * @return {canvas} dibujo de la figura geométrica
 */

let escaladorCuad = 1;
function DibujarCuadrado(lado) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    if (lado) {
        if (lado <= 0) {
            alert("Los lados ingresados no forman un cuadrado válido.");
            document.Formulario.lado.value = "";
            console.log("Los lados ingresados no forman un cuadrado válido.");
            document.getElementById("Resultado").value = "";
            return;
        }
    }
    if (lado>600) {
        // Muestra un mensaje indicando que los valores son muy grandes
        alert("El valor es muy grande, no se puede realizar la figura.")
        return;
    }

    if (escaladorCuad <= 100) {
        canvas.width = canvas.width;
        ctx.beginPath();
        ctx.moveTo(0, 0); // el lado de la izquierda del cuadrado
        ctx.lineTo(lado * (escaladorCuad / 100), 0); //el lado de arriba del cuadrado
        ctx.lineTo(lado * (escaladorCuad / 100), lado * (escaladorCuad / 100)); // el lado de la derecha del cuadrado
        ctx.lineTo(0, lado * (escaladorCuad / 100)); // el lado de abajo del cuadrado
        ctx.closePath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#bc57d5";
        ctx.stroke();

        escaladorCuad += 1;
        requestAnimationFrame(() => DibujarCuadrado(lado)); // se llama a la función recursivamente para que se ejecute la animación
    } else {
        escaladorCuad = 0;
    }
}

/**
 * Función que permite dibujar un círculo según la longitud de su Radio
 * @method DibujarCirculo
 * @param Radio - El radio ingresado por el usuario
 * @return {canvas} dibujo de la figura geométrica
 */

let escaladorCirc = 1;
function DibujarCirculo(Radio) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    if (Radio) {
        if (Radio <= 0) {
            alert("Los lados ingresados no forman un círculo válido.");
            document.Formulario.Radio.value = "";
            console.log("Los lados ingresados no forman un círculo válido.");
            document.getElementById("Resultado").value = "";
            return;
        }
    }
    if (Radio>300) {
        // Muestra un mensaje indicando que los valores son muy grandes
        alert("El valor es muy grande, no se puede realizar la figura.")
        return;
    }
    /*

    */
    if (escaladorCirc <= 100) {
        canvas.width = canvas.width;
        ctx.beginPath();
        ctx.arc(Radio, Radio, Radio * (escaladorCirc / 100), 0, 2 * Math.PI, false) //ctx.arc(x, y, radio, anguloInicial, anguloFinal, sentidoAntihorario);
        ctx.closePath();// cierra la figura
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#bc57d5";
        ctx.stroke();

        escaladorCirc += 1;
        requestAnimationFrame(() => DibujarCirculo(Radio)); // se llama a la función recursivamente para que se ejecute la animación
    } else {
        escaladorCirc = 0;
    }
}