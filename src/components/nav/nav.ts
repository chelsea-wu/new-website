const navbar = document.getElementById("navbar");

function slideup(navbar: HTMLElement) {
  navbar.classList.remove("shown");
  navbar.classList.add("hidden");
}

function slidedown(navbar: HTMLElement) {
  navbar.classList.remove("hidden");
  navbar.classList.add("shown");
}

let lastScroll = window.scrollY;
document.addEventListener("scroll", (e: Event) => {
  const curScroll = window.scrollY;
  const dy = curScroll - lastScroll;
  lastScroll = curScroll;
  if (dy > 0) {
    slideup(navbar);
  } else if (dy < 0) {
    slidedown(navbar);
  }
});
