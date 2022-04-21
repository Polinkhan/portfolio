let barDiv = document.querySelector(".bar");
let nav_items = document.querySelector(".nav-items");
let bar = document.querySelector(".barIcon");
let item = document.querySelector(".nav-items");
let dom = document.querySelectorAll(".container");
console.log(dom);

let func = () => {
  nav_items.classList.toggle("show");
  bar.classList.toggle("hide");
};

barDiv.addEventListener("click", func);
item.addEventListener("click", func);
