document
  .getElementById("reg-form")
  .addEventListener("submit", function (event) {
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;

    if (pass1 !== pass2) {
      event.preventDefault();
      document.getElementById("pass1").style.borderColor = "red";
      document.getElementById("error-msg").innerHTML = "Passwords do not match";
    }
  });
