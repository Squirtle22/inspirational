function generateQuote(event) {
    event.preventDefault();

    new Typewriter("#quote", {
        strings: "It is never too late to be what you might have been",
        autoStart: true,
        delay: 75,
        cursor: "",
    });
}

let quoteFormElement = document.querySelector("#quote-form");
quoteFormElement.addEventListener(`submit`, generateQuote);