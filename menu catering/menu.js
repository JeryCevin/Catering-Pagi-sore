const buttons = document.querySelectorAll("button"),
  toast = document.querySelector(".toast");
(closeIcon = document.querySelector(".close")), (progress = document.querySelector(".progress"));

let timer1, timer2;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    toast.classList.add("active");
    progress.classList.add("active");

    timer1 = setTimeout(() => {
      toast.classList.remove("active");
    }, 5000);

    timer2 = setTimeout(() => {
      progress.classList.remove("active");
    }, 5300);
  });
});

closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");

  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);

  clearTimeout(timer1);
  clearTimeout(timer2);
});

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-bars").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-icon").onclick = () => {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
};

let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
};
window.onscroll = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
};
