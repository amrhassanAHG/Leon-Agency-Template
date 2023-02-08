const links = document.querySelector("nav .links");
window.addEventListener("click", (e) => {
  if (
    e.target.parentElement.classList.contains("icon") ||
    e.target.parentElement.classList.contains("links")
  ) {
    links.classList.toggle("open-menu");
  } else {
    if (links.classList.contains("open-menu"))
      links.classList.remove("open-menu");
  }
});
