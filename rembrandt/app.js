window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 90) {
    // Change 100 to your desired scroll threshold
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
