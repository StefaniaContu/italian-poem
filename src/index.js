function generatePoem(event) {
  event.preventDefault();
  alert("Generating Poem");

  new Typewriter("#poem", {
    strings: ["Si sta come d'inverno sugli alberi le foglie"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
