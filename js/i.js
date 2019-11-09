var i = 0;
var txt = "Thrill of the Grill";
var speed = 80;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    console.log("this loaded");
  }
}
