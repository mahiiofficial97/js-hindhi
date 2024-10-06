const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);

    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }

    const color = e.target.id;

    switch (color) {
      case "white":
        body.style.backgroundColor = "white";
        break;

      case "grey":
        body.style.backgroundColor = "grey";
        break;

      case "yelow":
        body.style.backgroundColor = "yellow";
        break;

      case "blue":
        body.style.backgroundColor = "blue";
        break;

      default:
        console.log("unknown error");
    }
  });
});
