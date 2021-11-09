// using async-await (syntactic sugar on top of promises)
// const BTN = document.getElementById("getRandomFact");
// BTN.addEventListener("click", async () => {
//   const response = await fetch(
//     "https://uselessfacts.jsph.pl/random.json?language=en"
//   );
//   const { text } = await response.json();
//   document.getElementById("randomFact").innerText = text;
// });

// using promises
const BTN = document.getElementById("getRandomFact");
BTN.addEventListener("click", () => {
  fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then((response) => response.json())
    .then(({ text }) => {
      document.getElementById("randomFact").innerText = text;
    });
});
