// Global variables
const TEXT = document.getElementById("text");
const DIRECTIONS = ["izquierda", "derecha"];
const STREAK = document.getElementById("streak");
const COUNTER = document.getElementById("hits");

let streak = parseInt(localStorage.getItem("streak")) || 0;
let counter = 0;

// Events
window.addEventListener("resize", handleResize);
document.addEventListener("DOMContentLoaded", () => {
    handleResize();
    shuffleText();
    updateStreakText();
});
document.addEventListener("click", clickEvent);

// Primary functions
function handleResize() {
    const IS_SMALL_SCREEN =
        window.innerWidth < 400 || window.innerWidth < window.innerHeight;
    document.querySelectorAll(".default_icon").forEach((icon) => {
        const PARENT_ID = icon.parentElement.id;

        if (IS_SMALL_SCREEN) {
            icon.innerHTML =
                PARENT_ID === "left"
                    ? '<path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9c4.2 4.5 10.1 7.1 16.3 7.1c12.3 0 22.3-10 22.3-22.3l0-57.7 96 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-96 0 0-57.7c0-12.3-10-22.3-22.3-22.3c-6.2 0-12.1 2.6-16.3 7.1L117.5 242.2c-3.5 3.8-5.5 8.7-5.5 13.8s2 10.1 5.5 13.8l99.9 107.1z"/>'
                    : PARENT_ID === "right"
                    ? '<path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 151.2c-4.2-4.6-10.1-7.2-16.4-7.2C266 144 256 154 256 166.3l0 41.7-96 0c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l96 0 0 41.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.4-7.2l84-91c3.5-3.8 5.4-8.7 5.4-13.9s-1.9-10.1-5.4-13.9l-84-91z"/>'
                    : "";
        } else {
            icon.innerHTML = "";
        }

        icon.setAttribute("fill", IS_SMALL_SCREEN ? "#e974ae" : "");
    });
}

async function shuffleText() {
    TEXT.innerHTML = getRandElement(TEXT_LIST).replace(
        /{direction}/g,
        `<b id="direction">${getRandElement(DIRECTIONS)}</b>`
    );
}

function updateStreakText() {
    STREAK.textContent = `${streak}🔥`;
}

function clickEvent(e) {
    const BTN = e.target.closest("button");
    const DIRECTION = e.target.closest("b");

    if (BTN?.id) {
        checkAnswer(BTN);
    } else if (DIRECTION?.id === "direction") {
        hint(DIRECTION);
    }
}

// Secondary functions
function checkAnswer(button) {
    const CONTENT = TEXT.textContent.toLowerCase();
    const ICONS = getIcons(button.id);

    document.removeEventListener("click", clickEvent);

    if (isCorrectAnswer(button.id, CONTENT)) {
        updateCounter(++counter);
        showIcon(ICONS.correct, ICONS.default);
    } else {
        resetCounter();
        showIcon(ICONS.wrong, ICONS.default);
    }

    if (counter > streak) {
        streak = counter;
        localStorage.setItem("streak", streak.toString());
    }

    setTimeout(() => {
        resetIcons(ICONS);
        shuffleText();
        document.addEventListener("click", clickEvent);
    }, 800);
}

function hint(direction) {
    direction.textContent = direction.textContent === "izquierda" ? "👈" : "👉";
    direction.style.fontSize = "1.1rem";
    direction.style.cursor = "default";
}

// Other functions
function getRandElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getIcons(btnId) {
    return {
        default: document.querySelector(`#${btnId} .default_icon`),
        correct: document.querySelector(`#${btnId} .correct_icon`),
        wrong: document.querySelector(`#${btnId} .wrong_icon`),
    };
}

function isCorrectAnswer(btnId, CONTENT) {
    const IS_LEFT = CONTENT.includes("izquierda") || CONTENT.includes("👈");
    const IS_RIGHT = CONTENT.includes("derecha") || CONTENT.includes("👉");

    return (
        (IS_LEFT && btnId.includes("left")) ||
        (IS_RIGHT && btnId.includes("right"))
    );
}

function updateCounter(value) {
    COUNTER.textContent = intToRoman(value);
}

function resetCounter() {
    counter = 0;
    updateCounter(counter);
    updateStreakText();
}

function showIcon(iconToShow, iconToHide) {
    iconToShow.style.display = "block";
    iconToHide.style.display = "none";
}

function resetIcons(icons) {
    icons.default.style.display = "block";
    icons.correct.style.display = "none";
    icons.wrong.style.display = "none";
}

function intToRoman(number) {
    if (number < 1) {
        return "-";
    }

    const VALUES = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const SYMBOLS = [
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

    return VALUES.reduce((roman, value, i) => {
        while (number >= value) {
            roman += SYMBOLS[i];
            number -= value;
        }
        return roman;
    }, "");
}
