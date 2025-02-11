function displayQuote(response) {
    new Typewriter("#quote", {
        strings: response.data.answer,
        autoStart: true,
        delay: 75,
        cursor: "",
    });
}


function generateQuote(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "20da439adcfbaaa63d3ctbeeco3b771e"
    let prompt = `Generate a quote about ${instructionsInput.value}`;
    let context = "User instructions: Generate deeply inspiring and motivational quotes. Your responses should be uplifting, wise, and resonate with personal growth, success, and positivity. Make sure to follow the users instructions.";

    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

    let quoteElement = document.querySelector("#quote");
    quoteElement.classList.remove("hidden")
    quoteElement.innerHTML = `<div class="generating">⏳</div>`

    axios.get(apiUrl).then(displayQuote);


}

let quoteFormElement = document.querySelector("#quote-form");
quoteFormElement.addEventListener(`submit`, generateQuote);