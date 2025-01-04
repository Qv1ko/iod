const TEXT = document.getElementById("text");
const STREAK = document.getElementById("streak");
const COUNTER = document.getElementById("hits");
let streak = localStorage.getItem("streak")
    ? parseInt(localStorage.getItem("streak"))
    : 0;
STREAK.textContent = streak + "🔥";
let counter = 0;

window.addEventListener("resize", resizeCheck);
document.addEventListener("DOMContentLoaded", () => {
    resizeCheck();
    shuffle();
});
document.addEventListener("click", clickEvent);

function resizeCheck() {
    document.querySelectorAll(".default_icon").forEach((icon) => {
        if (window.innerWidth < 400 || window.innerWidth < window.innerHeight) {
            icon.setAttribute("fill", "#e974ae");
            if (icon.parentElement.id === "left") {
                icon.innerHTML =
                    '<path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9c4.2 4.5 10.1 7.1 16.3 7.1c12.3 0 22.3-10 22.3-22.3l0-57.7 96 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-96 0 0-57.7c0-12.3-10-22.3-22.3-22.3c-6.2 0-12.1 2.6-16.3 7.1L117.5 242.2c-3.5 3.8-5.5 8.7-5.5 13.8s2 10.1 5.5 13.8l99.9 107.1z"/>';
            } else if (icon.parentElement.id === "right") {
                icon.innerHTML =
                    '<path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 151.2c-4.2-4.6-10.1-7.2-16.4-7.2C266 144 256 154 256 166.3l0 41.7-96 0c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l96 0 0 41.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.4-7.2l84-91c3.5-3.8 5.4-8.7 5.4-13.9s-1.9-10.1-5.4-13.9l-84-91z"/>';
            }
        } else {
            icon.innerHTML = "";
        }
    });
}

function clickEvent(e) {
    let btn = e.target.closest("button");
    let direction = e.target.closest("b");

    if (btn && btn.id) {
        play(btn);
    } else if (direction && direction.id === "direction") {
        hint(direction);
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
        STREAK.textContent = streak + "🔥";
        counter = 0;
        COUNTER.textContent = intToRoman(counter);

        wrongIcon.style.display = "block";
        defaultIcon.style.display = "none";
    }

    if (counter > streak) {
        streak = counter;
        localStorage.setItem("streak", streak.toString());
    }

    setTimeout(() => {
        defaultIcon.style.display = "block";
        correctIcon.style.display = "none";
        wrongIcon.style.display = "none";
        shuffle();
        document.addEventListener("click", clickEvent);
    }, 800);
}

function hint(direction) {
    direction.textContent =
        direction.textContent === "izquierda"
            ? "👈"
            : direction.textContent === "derecha"
            ? "👉"
            : direction.textContent;
    direction.style.fontSize = "1.1rem";
    direction.style.cursor = "default";
}

async function shuffle() {
    const RESPONSE = await fetch("./texts.json");
    const DATA = await RESPONSE.json();
    const DIRECTION = ["izquierda", "derecha"];
    let direction = DIRECTION[Math.floor(Math.random() * DIRECTION.length)];

    TEXT.innerHTML = DATA.texts[
        Math.floor(Math.random() * DATA.texts.length)
    ].replace(/{direction}/g, "<b id='direction'>" + direction + "</b>");

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
