const buttonBox = document.querySelector("#buttonBox");

buttonBox.addEventListener("click", function (event) {
  if (event.target.tagName !== "BUTTON") {
    return;
  }

  if (event.target.dataset.index === "0") {
    alert("YOU CLICKED BUTTON 1");
  }

  if (event.target.dataset.index === "1") {
    alert("YOU CLICKED BUTTON 2");
  }
});
