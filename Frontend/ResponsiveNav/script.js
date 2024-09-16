function toggleMenu() {
  const navLinks = document.getElementById("mob-view");
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
}
