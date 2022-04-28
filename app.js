var FREE = document.getElementById("Cheate");
var StartButton = document.getElementById("wylosuj");
var Dow = document.getElementById("hidden");
var Opis = document.getElementById("Textp");
const Papaj_img = document.querySelector(".Papaj_img");
const Papaj = document.querySelector(".Papaj");

var images = [];
var IMAGES = [];
var Opisy = [];
var OPISY = [];
index = 0;
images[0] = src = "p1.jpg";
images[1] = src = "p2.jpg";
images[2] = src = "p3.jpg";
images[3] = src = "p4.jpg";
images[4] = src = "p5.jpg";
images[5] = src = "p6.jpg";
images[6] = src = "p7.jpg";
images[7] = src = "p8.jpg";

Opisy[0] = "Maka Paka \nChcie cie zjeść \n Swoim wzrokiem 10%";
Opisy[1] = "Maka Paka \nszuka złych \n Ludzi 20%";
Opisy[2] = "Maka Paka \nKaże ci \n Dać płyn do mycia \n naczyń 30%";
Opisy[3] = "Maka Paka \nKaże ci \n Oglondać kolekcje \n kamieni 10%";
Opisy[4] = "Maka Pak  a z rodzinkom 2%";
Opisy[5] = "Maka Paka \n smieje sie 29%";
Opisy[6] = "LEGENDARNY Maka Paka \n UWAŻAJ 1%";
Opisy[7] = "Maka Paka na Prezydenta \n wybież dobże 0.5%";

for (var i = 0; i < 10; i++) {
  OPISY[i] = Opisy[0];
  IMAGES[i] = images[0];
}

for (var i = 10; i < 30; i++) {
  OPISY[i] = Opisy[1];
  IMAGES[i] = images[1];
}
for (var i = 30; i < 60; i++) {
  OPISY[i] = Opisy[2];
  IMAGES[i] = images[2];
}
for (var i = 60; i < 70; i++) {
  OPISY[i] = Opisy[3];
  IMAGES[i] = images[3];
}
for (var i = 70; i < 75; i++) {
  OPISY[i] = Opisy[4];
  IMAGES[i] = images[4];
}
for (var i = 75; i < 100; i++) {
  OPISY[i] = Opisy[5];
  IMAGES[i] = images[5];
}
for (var i = 100; i < 105; i++) {
  OPISY[i] = Opisy[6];
  IMAGES[i] = images[6];
}
for (var i = 105; i < 107; i++) {
  OPISY[i] = Opisy[7];
  IMAGES[i] = images[7];
}

index = Math.floor(Math.random() * IMAGES.length);

var download = document.createElement("a");

StartButton.addEventListener("click", () => {
  index = Math.floor(Math.random() * IMAGES.length);
  Papaj.classList.remove("hidden");
  Dow.classList.remove("hidden");
  Papaj_img.src = IMAGES[index];
  document.getElementById("Textp").innerText = OPISY[index];
});
Dow.addEventListener("click", () => {
  download.href = IMAGES[index];
  download.download = "MakaPaka";
  download.click();
});
FREE.addEventListener("click", () => {
  BONZO.classList.remove("hidden");
});
