const btn = document.querySelector("#menuBtn");
const list = document.querySelector("#menuList");

btn.addEventListener("click", function () {
  if (list.classList.contains("show")) {
    list.classList.remove("show");
  } else {
    list.classList.add("show");
  }
});
