"use strict";
const btn = document.getElementById("btn");
const texteBtn = document.getElementById("texte-btn");
if (btn && texteBtn) {
    btn.addEventListener("mouseenter", function elastic() {
        texteBtn.style.display = "block";
    });
    btn.addEventListener("mouseleave", () => {
        texteBtn.style.display = "none";
    });
}
