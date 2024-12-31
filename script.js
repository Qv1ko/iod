const TEXT = document.getElementById("text");
let counter = 0;
let strikes = 0;

document.addEventListener("click", (e) => {
    let btn = e.target.closest("button");
    if (btn) {
        play(btn);
    }
});

function play(btn) {
    if (btn.id) {
        console.log(btn.id);
        if (
            (TEXT.textContent.toLowerCase().includes("izquierda") ||
                TEXT.textContent.toLowerCase().includes("left") ||
                TEXT.textContent.toLowerCase().includes("⬅️") ||
                TEXT.textContent.toLowerCase().includes("👈") ||
                TEXT.textContent.toLowerCase().includes("←") ||
                TEXT.textContent.toLowerCase().includes("<")) &&
            btn.id.includes("left")
        ) {
            console.log("Correcto: " + intToRoman(++counter));
        } else if (
            (TEXT.textContent.toLowerCase().includes("derecha") ||
                TEXT.textContent.toLowerCase().includes("right") ||
                TEXT.textContent.toLowerCase().includes("➡️") ||
                TEXT.textContent.toLowerCase().includes("👉") ||
                TEXT.textContent.toLowerCase().includes("→") ||
                TEXT.textContent.toLowerCase().includes(">")) &&
            btn.id.includes("right")
        ) {
            console.log("Correcto: " + intToRoman(++counter));
        }
    }
    shuffle();
}

function shuffle() {
    const DIRECTION = ["derecha", "izquierda"];
    let direction = DIRECTION[Math.floor(Math.random() * DIRECTION.length)];

    const TEXTS = [
        "Gira a la " + direction + " en la siguiente esquina.",
        "El semáforo está a la " + direction + ".",
        "Sigue todo recto y luego gira a la " + direction + ".",
        "La tienda está a tu " + direction + ".",
        "Al llegar al cruce, ve a la " + direction + ".",
        "Dobla a la " + direction + " después del parque.",
        "El baño está a la " + direction + " del pasillo.",
        "Toma la segunda calle a la " + direction + ".",
        "A la " + direction + " encontrarás un café.",
        "La puerta de entrada está a la " + direction + ".",
        "Estaciona el coche a la " + direction + ".",
        "El ascensor está a la " + direction + " de la recepción.",
        "Sigue el camino a la " + direction + ".",
        "En la bifurcación, toma el camino de la " + direction + ".",
        "La farmacia está a la " + direction + " de la iglesia.",
        "El museo se encuentra a tu " + direction + ".",
        "A la " + direction + " está el colegio.",
        "Gira a la " + direction + " después del semáforo.",
        "La entrada principal está a la " + direction + ".",
        "El banco está a la " + direction + " de la plaza.",
        "Cruza la calle y luego gira a la " + direction + ".",
        "La estación de trenes está a la " + direction + ".",
        "Sigue caminando y gira a la " + direction + " en la esquina.",
        "El cine está a la " + direction + " del supermercado.",
        "La sala de espera está a la " + direction + ".",
        "Sube las escaleras y gira a la " + direction + ".",
        "A la " + direction + " verás un parque.",
        "El restaurante está a la " + direction + " de la calle principal.",
        "Toma la primera calle a la " + direction + ".",
        "La tienda de ropa está a la " + direction + " del hotel.",
        "A la " + direction + " de la puerta principal hay un jardín.",
        "El teatro está a la " + direction + " de la plaza.",
        "Gira a la " + direction + " después de pasar el puente.",
        "A la " + direction + " verás una señal de tráfico.",
        "La biblioteca está a la " + direction + " de la cafetería.",
        "Sigue todo recto y toma la salida a la " + direction + ".",
        "El hospital está a la " + direction + " de la avenida.",
        "Al final de la calle, gira a la " + direction + ".",
        "La escuela está a la " + direction + " del parque.",
        "La entrada al estacionamiento está a la " + direction + ".",
        "A la " + direction + " verás un edificio rojo.",
        "El museo está a la " + direction + " del parque central.",
        "La panadería está a la " + direction + " de la iglesia.",
        "Cruza la calle y gira a la " + direction + " en el segundo semáforo.",
        "El supermercado está a la " + direction + " de la gasolinera.",
        "A la " + direction + " verás un edificio alto.",
        "La playa está a la " + direction + " del hotel.",
        "El zoológico está a la " + direction + " del estadio.",
        "Sigue el camino a la " + direction + " hasta el final.",
        "A la " + direction + " encontrarás un quiosco.",
        "La farmacia está a la " + direction + " del supermercado.",
        "Toma la primera salida a la " + direction + " en la rotonda.",
        "La oficina de correos está a la " + direction + " del banco.",
        "El edificio de oficinas está a la " + direction + " del parque.",
        "La biblioteca está a la " + direction + " del edificio principal.",
        "Gira a la " + direction + " en el próximo semáforo.",
        "La entrada al cine está a la " + direction + " de la calle principal.",
        "La tienda de electrónica está a la " + direction + " de la librería.",
        "La parada de autobús está a la " + direction + " del cruce.",
        "El edificio azul está a la " + direction + " de la calle.",
        "La cafetería está a la " + direction + " de la librería.",
        "Toma la tercera calle a la " + direction + ".",
        "La salida está a la " + direction + " del pasillo.",
        "A la " + direction + " verás una señal de alto.",
        "La gasolinera está a la " + direction + " de la carretera principal.",
        "El estacionamiento está a la " + direction + " del centro comercial.",
        "La oficina está a la " + direction + " de la entrada principal.",
        "Gira a la " + direction + " en la esquina.",
        "El hotel está a la " + direction + " del monumento.",
        "La estación de metro está a la " + direction + " de la plaza.",
        "El parque está a la " + direction + " de la calle.",
        "La tienda de juguetes está a la " + direction + " del supermercado.",
        "Toma la segunda salida a la " + direction + " en la rotonda.",
        "A la " + direction + " verás un edificio de ladrillo.",
        "La oficina de turismo está a la " + direction + " del museo.",
        "Sigue el sendero a la " + direction + ".",
        "El restaurante está a la " + direction + " de la entrada.",
        "La tienda de deportes está a la " + direction + " del gimnasio.",
        "La salida de emergencia está a la " + direction + ".",
        "El banco está a la " + direction + " del centro comercial.",
        "A la " + direction + " verás un puente.",
        "La peluquería está a la " + direction + " de la panadería.",
        "Gira a la " + direction + " en la segunda intersección.",
        "La escuela está a la " + direction + " de la biblioteca.",
        "La tienda de comestibles está a la " + direction + " de la farmacia.",
        "El parque está a la " + direction + " del lago.",
        "A la " + direction + " verás una fuente.",
        "La estación de autobuses está a la " + direction + " de la plaza.",
        "Gira a la " + direction + " después del semáforo.",
        "El supermercado está a la " + direction + " del banco.",
        "A la " + direction + " verás un camino de tierra.",
        "La entrada está a la " + direction + " del edificio.",
        "A la " + direction + " verás una tienda de ropa.",
        "El cine está a la " + direction + " del centro comercial.",
        "La farmacia está a la " + direction + " de la clínica.",
        "A la " + direction + " verás una montaña.",
        "La oficina de correos está a la " + direction + " del ayuntamiento.",
        "La entrada al parque está a la " + direction + " de la calle.",
        "Gira a la " + direction + " en el siguiente cruce.",
        "La tienda de muebles está a la " + direction + " del banco.",
        "El bar está a la " + direction + " de la discoteca.",
        "A la " + direction + " verás una señal de dirección.",
        "La salida está a la " + direction + " de la puerta principal.",
        "La cafetería está a la " + direction + " del centro de convenciones.",
        "Gira a la " + direction + " en la siguiente intersección.",
        "A la " + direction + " verás un faro.",
        "La tienda de vinos está a la " + direction + " del supermercado.",
        "La entrada al museo está a la " + direction + " del jardín.",
        "A la " + direction + " verás un edificio antiguo.",
        "La panadería está a la " + direction + " de la carnicería.",
        "Gira a la " + direction + " en la primera oportunidad.",
        "El hotel está a la " + direction + " de la estación de tren.",
        "La oficina está a la " + direction + " del pasillo.",
        "La tienda de regalos está a la " + direction + " de la entrada.",
        "A la " + direction + " verás una cascada.",
        "La iglesia está a la " + direction + " del parque.",
        "Gira a la " + direction + " después del semáforo.",
        "La librería está a la " + direction + " de la cafetería.",
        "A la " + direction + " verás una estatua.",
        "El museo está a la " + direction + " de la plaza principal.",
        "Gira a la " + direction + " al final de la calle.",
        "La farmacia está a la " + direction + " de la parada de autobús.",
        "A la " + direction + " verás un campo de fútbol.",
        "La tienda de ropa está a la " + direction + " del cruce.",
    ];

    TEXT.textContent = TEXTS[Math.floor(Math.random() * TEXTS.length)];
}

function intToRoman(number) {
    if (number < 1) {
        return "";
    }

    const VALUES = [
        1000000, 900000, 500000, 400000, 100000, 90000, 50000, 40000, 10000,
        9000, 5000, 4000, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,
    ];
    const SYMBOLS = [
        "M̅",
        "C̅M̅",
        "D̅",
        "C̅D̅",
        "C̅",
        "X̅C̅",
        "L̅",
        "X̅L̅",
        "X̅",
        "I̅X̅",
        "V̅",
        "I̅V̅",
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I",
    ];

    let roman = "";
    for (let i = 0; i < VALUES.length; i++) {
        while (number >= VALUES[i]) {
            roman += SYMBOLS[i];
            number -= VALUES[i];
        }
    }

    return roman;
}
