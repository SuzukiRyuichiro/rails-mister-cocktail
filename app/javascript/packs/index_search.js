const searchBox = document.querySelector('#search');
const results = document.querySelector('.list-group');
// add the event listener
searchBox.addEventListener('keyup', (event) => {
  event.preventDefault();
  const httpRequest = `https://wagon-dictionary.herokuapp.com/autocomplete/${searchBox.value}`;
  fetch(httpRequest)
    .then(response => response.json())
    .then((data) => {
      results.innerHTML = "";
      const topTen = data.words.slice(0, 4);
      topTen.forEach((word) => {
        results.insertAdjacentHTML("beforeend", `<a https://www.diffordsguide.com/cocktails/search?keyword%5B%5D=${word}" class="list-group-item list-group-item-action">${word}</a>`);
      });
    });
});
