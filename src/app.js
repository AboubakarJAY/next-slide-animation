"use strict";
const btn = document.getElementById("btn");
const texteBtn = document.getElementById("texte-btn");
if (btn && texteBtn) {
    btn.addEventListener("mouseenter", () => {
        texteBtn.style.display = "block";
        setTimeout(() => {
            btn.classList.add("active");
        }, 300);
        setTimeout(() => {
            btn.classList.remove("active");
        }, 2700);
    });
    btn.addEventListener("mouseleave", () => {
        texteBtn.style.display = "none";
    });
}
