var root = document.querySelector(":root");

document
  .getElementById("toggle-button")
  .addEventListener("click", function (event) {
    if (root.style.getPropertyValue("--bg-color") === "black") {
      root.style.setProperty("--bg-color", "white");
      root.style.setProperty("--text-color", "black");
    } else {
      root.style.setProperty("--bg-color", "black");
      root.style.setProperty("--text-color", "white");
    }
  });
