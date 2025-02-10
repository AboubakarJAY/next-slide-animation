const btn = document.getElementById("btn") as HTMLElement;
const texteBtn = document.getElementById("texte-btn") as HTMLElement;

if (btn && texteBtn) {
  btn.addEventListener("mouseenter", function elastic() {
    texteBtn.style.display = "block";
  });

  btn.addEventListener("mouseleave", () => {
    texteBtn.style.display = "none";
  });
}
