const qrInput = document.querySelector(".form-group input");
const generateBtn = document.querySelector("button");
const qrImg = document.querySelector(".qr-img");

generateBtn.addEventListener("click", () => {
  const qrValue = qrInput.value;
  if (!qrValue) return;
  qrImg.innerHTML = `<img
  src="https://api.qrserver.com/v1/create-qr-code/?data=${qrValue}"
  alt="qrcode"
  class="img-fluid"
  height="345"
  width="460"
/>`;
  clearField();
});

function clearField() {
  document.querySelector(".form-group input").value = "";
}
