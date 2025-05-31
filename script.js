// #menyimpan classname botol ke dalam variable botol
const botol = document.getElementById("botol");

// posisi
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

//saat menekan tombol dan menahan
botol.addEventListener("mousedown", (e) => {
  isDragging = true;
  e.preventDefault();
  offsetX = e.clientX - botol.offsetLeft;
  offsetY = e.clientY - botol.offsetTop;
  botol.style.cursor = "grabbing";
});

botol.addEventListener("mouseup", () => {
  isDragging = false;
  botol.style.cursor = "grab";
  botol.remove();
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    botol.style.left = e.clientX - offsetX + "px";
    botol.style.top = e.clientY - offsetY + "px";
  }
});

// dropzone nya
