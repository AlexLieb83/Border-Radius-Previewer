const topLeftInput = document.getElementById("top-left");
const topRightInput = document.getElementById("top-right");
const bottomLeftInput = document.getElementById("bottom-left");
const bottomRightInput = document.getElementById("bottom-right");
const square = document.getElementById("square");
const button = document.getElementById("button");
const copyPaste = document.getElementById("copy-paste");

button.addEventListener("click", () => {
  square.style.borderTopLeftRadius = `${topLeftInput.value}px`;
  square.style.borderTopRightRadius = `${topRightInput.value}px`;
  square.style.borderBottomLeftRadius = `${bottomLeftInput.value}px`;
  square.style.borderBottomRightRadius = `${bottomRightInput.value}px`;

  //allow user to copy and paste when they like the look
  copyPaste.innerHTML = `
    <p>border-top-left-radius: ${topLeftInput.value}px; </p>
    <p>border-top-right-radius:${topRightInput.value}px; </p> 
    <p>border-bottom-left-radius:${bottomLeftInput.value}px; </p> 
    <p>border-bottom-right-radius:${bottomRightInput.value}px; </p>
  `;
});
