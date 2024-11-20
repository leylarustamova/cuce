const egg = document.getElementById("egg");
let isOn = false;

egg.addEventListener("click", () => {
  isOn = !isOn;
  egg.src = isOn ? "chicken/photos/egg2.webp" : "chicken/photos/egg1.jpg";
});