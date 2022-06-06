const book = document.querySelector("#bookSection");

function searchDeezer() {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((dataBook) => {
      console.log(dataBook);

      book.innerHTML = dataBook
        .map(
          (
            books
          ) => `<div class="card" style="height: 100%; background-color:#10171F">
        <img src="${books.img}" class="card-img-top img-fluid w-100" alt="...">
        <div class="card-body" style="height: 100%">
        <h5 class="card-title">${books.title}</h5>
        <p class="card-text">${books.category}</p>
        <p class="card-text">$${books.price}</p>
        <button type="button" class="btn btn-dark">Add to cart</button>
        </div>
        </div>`
        )
        .join(" ");
    })
    .catch((err) => {
      console.log("rejected");
      console.log(err);
    });
}

window.onload = function () {
  searchDeezer();
};
