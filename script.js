const TEXT = document.getElementById("text");
const STREAK = document.getElementById("streak");
const COUNTER = document.getElementById("hits");
let streak = localStorage.getItem("streak")
    ? parseInt(localStorage.getItem("streak"))
    : 0;
STREAK.textContent = streak + "🔥";
let counter = 0;

document.addEventListener("DOMContentLoaded", () => {
    shuffle();
});
document.addEventListener("click", clickEvent);

function clickEvent(e) {
    let btn = e.target.closest("button");
    if (btn && btn.id) {
        play(btn);
    }
}

function play(btn) {
    let content = TEXT.textContent.toLowerCase();
    let defaultIcon = document.querySelector("#" + btn.id + " .default_icon");
    let correctIcon = document.querySelector("#" + btn.id + " .correct_icon");
    let wrongIcon = document.querySelector("#" + btn.id + " .wrong_icon");

    document.removeEventListener("click", clickEvent);

    if (
        ((content.includes("izquierda") || content.includes("👈")) &&
            btn.id.includes("left")) ||
        ((content.includes("derecha") || content.includes("👉")) &&
            btn.id.includes("right"))
    ) {
        COUNTER.textContent = intToRoman(++counter);

        correctIcon.style.display = "block";
        defaultIcon.style.display = "none";
    } else {
        if (counter > streak) {
            streak = counter;
            STREAK.textContent = streak + "🔥";
            localStorage.setItem("streak", streak.toString());
        }
        counter = 0;
        COUNTER.textContent = intToRoman(counter);

        wrongIcon.style.display = "block";
        defaultIcon.style.display = "none";
    }

    setTimeout(() => {
        defaultIcon.style.display = "block";
        correctIcon.style.display = "none";
        wrongIcon.style.display = "none";
        shuffle();
        document.addEventListener("click", clickEvent);
    }, 800);
}

async function shuffle() {
    const RESPONSE = await fetch("./texts.json");
    const DATA = await RESPONSE.json();
    const DIRECTION = [
        "izquierda",
        "derecha",
        "izquierda",
        "derecha",
        "👈",
        "👉",
    ];
    let direction = DIRECTION[Math.floor(Math.random() * DIRECTION.length)];

    TEXT.innerHTML = DATA.texts[
        Math.floor(Math.random() * DATA.texts.length)
    ].replace(/{direction}/g, "<b>" + direction + "</b>");

    document.getElementsByClassName("correct_icons");
}

function intToRoman(number) {
    if (number < 1) {
        return "-";
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
