let barDiv = document.querySelector(".bar");
let nav_items = document.querySelector(".nav-items");
let bar = document.querySelector(".fa-bars");
let cls = document.querySelector(".fa-xmark");
let item = document.querySelector(".nav-items");

let func = ()=> {
  nav_items.classList.toggle("show");
  bar.classList.toggle("hide");
  cls.classList.toggle("hide");
}

barDiv.addEventListener("click", func);
item.addEventListener("click", func);
