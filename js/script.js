"use strict";

const tagName = document.getElementsByTagName("li");
console.log(tagName.length);

for (let i = 0; i < tagName.length; i++) {
  console.log(tagName[i]);
}

const id = document.getElementById("html");
console.log(id);

const classname = document.getElementsByClassName("js");
console.log(classname.length);

const queryAll = document.querySelectorAll("li.js");
console.log(queryAll.length);
