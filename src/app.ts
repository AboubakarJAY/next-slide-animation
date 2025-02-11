const btn = document.getElementById("btn") as HTMLElement;
const texteBtn = document.getElementById("texte-btn") as HTMLElement;
const imageEl = document.getElementById("imageEl") as HTMLImageElement;

const iconChanger = () => {
  const interval = setInterval(() => {
    imageEl.src = "../public/right.png";
    setTimeout(() => {
      imageEl.src = "../public/right2.png";
    }, 100);
  }, 300);
  setInterval(() => {
    clearInterval(interval);
  }, 2700);
};

if (btn && texteBtn) {
  btn.addEventListener("mouseenter", () => {
    texteBtn.style.display = "block";
    setTimeout(() => {
      btn.classList.add("active");
    }, 300);
    iconChanger();
    setTimeout(() => {
      btn.classList.remove("active");
    }, 2700);
  });

  btn.addEventListener("mouseleave", () => {
    texteBtn.style.display = "none";
  });
}
