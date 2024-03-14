function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "ed0c4c1e2a7e2c40fb2o4fcd0343tfe3";
  let prompt = `User instructions: Generate an Italian poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br/>. Make sure to follow the user instructions. Do not include a title. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");

  axios.get(apiUrl).then(displayPoem);
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
