import calculate from "./calculate.js";
import copyToClipboard from "./copyToClipboard.js";
import { handleClear, handlePressBtn, handleType } from "./keyHandlers.js";
import switchTheme from "./switchTheme.js";

document.querySelectorAll(".charKey").forEach(handlePressBtn);

document.getElementById("clear").addEventListener("click", handleClear);

document.getElementById("equal").addEventListener("click", calculate);

input.addEventListener("keydown", handleType);

document.getElementById("switchTheme").addEventListener("click", switchTheme)

document.getElementById("copy").addEventListener("click", copyToClipboard)