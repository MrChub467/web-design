document.addEventListener("click", (e) => {
  const hamburgerMenu = document.querySelector(".phone-menu");
  const menu = document.querySelector(".menu");
  if (hamburgerMenu.contains(e.target) && menu.contains(e.target)) {
  } else if (hamburgerMenu.contains(e.target)) {
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  } else {
    menu.style.display = "none";
  }
});
