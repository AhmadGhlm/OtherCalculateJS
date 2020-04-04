"use strict";

let button = "";

function insert(btn) {
  button = button + btn.value;

  document.getElementById("showvalue").innerHTML = button;
}

function result() {
  document.getElementById("showvalue").innerHTML = eval(button);
}
