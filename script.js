const TEXT = document.getElementById("text");
const COUNTER = document.getElementById("hits");
let counter = 0;
let streak = 0;

document.addEventListener("DOMContentLoaded", () => {
    shuffle();
});

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
                TEXT.textContent.toLowerCase().includes("⬅️") ||
                TEXT.textContent.toLowerCase().includes("👈")) &&
            btn.id.includes("left")
        ) {
            COUNTER.textContent = intToRoman(++counter);
        } else if (
            (TEXT.textContent.toLowerCase().includes("derecha") ||
                TEXT.textContent.toLowerCase().includes("➡️") ||
                TEXT.textContent.toLowerCase().includes("👉")) &&
            btn.id.includes("right")
        ) {
            COUNTER.textContent = intToRoman(++counter);
        }
        if (counter > streak) {
            streak = counter;
        }
    }
    shuffle();
}

async function shuffle() {
    const RESPONSE = await fetch("./texts.json");
    const DATA = await RESPONSE.json();
    const DIRECTION = ["izquierda", "derecha", "⬅️", "➡️", "👈", "👉"];
    let direction = DIRECTION[Math.floor(Math.random() * DIRECTION.length)];

    const TEXTS = DATA.texts.map((text) =>
        text.replace(/{direction}/g, direction)
    );
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
