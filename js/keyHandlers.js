import calculate from "./calculate.js";

const input = document.getElementById("input");

function handlePressBtn(charKeyBtn) {
    charKeyBtn.addEventListener("click", function () {
        const value = charKeyBtn.dataset.value;
        input.value += value;
    });
}

function handleClear() {
    input.value = "";
    input.focus();
}

function handleType(ev) {
    ev.preventDefault();
    const allowedKeys = [
        "(",
        ")",
        "/",
        "*",
        "-",
        "+",
        "9",
        "8",
        "7",
        "6",
        "5",
        "4",
        "3",
        "2",
        "1",
        "0",
        ".",
        "%",
        " ",
    ];

    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key;
        return;
    }

    if (ev.key === "Backspace") {
        input.value = input.value.slice(0, -1);
    }

    if (ev.key === "Enter") {
        calculate();
    }
}

export { handlePressBtn, handleClear, handleType }