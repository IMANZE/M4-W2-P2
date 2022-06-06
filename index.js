const book = document.querySelector("#bookSection");

function searchDeezer() {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((dataBook) => {
      console.log(dataBook);

      book.innerHTML = dataBook
        .map(
          (books) => `<div class="col-md-4 pb-5 niceBooks">
          <div class="card  mb-4 shadow-sm h-100">
          <div class="card h-100">
          <div class="card" style="height: 100%; background-color:#10171F">
        <img src="${books.img}" class="card-img-top img-fluid w-100" alt="...">
        <div class="card-body">
        <h5 class="card-title">${books.title}</h5>
        <p class="card-text">${books.category}</p>
        <p class="card-text">$${books.price}</p>
        <button type="button" class="btn btn-dark">Add to cart</button>
        <button type="button" class="btn btn-dark skip">Skip</button>
        </div>
        </div>
        </div>
        </div>
        </div>`
        )
        .join(" ");
      const deleteCard = document.querySelectorAll(".skip");
      deleteCard.forEach((disappear) => {
        disappear.addEventListener("click", () => {
          disappear.closest(".niceBooks").remove();
        });
      });
    })
    .catch((err) => {
      console.log("rejected");
      console.log(err);
    });
}

function bookDisplay(bookContent) {
  const search = document.querySelector("#displaySection");
  const searchEnquiry = bookContent.target.value;
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((dataBook) => {
      console.log(dataBook);
      search.innerHTML = dataBook
        .filter((books) =>
          books.title.toLowerCase().includes(searchEnquiry.toLowerCase())
        )
        .map(
          (books) => `<div class="col-md-4 pb-5 niceBooks">
      <div class="card  mb-4 shadow-sm h-100">
      <div class="card h-100">
      <div class="card" style="height: 100%; background-color:#10171F">
    <img src="${books.img}" class="card-img-top img-fluid w-100" alt="...">
    <div class="card-body">
    <h5 class="card-title">${books.title}</h5>
    <p class="card-text">${books.category}</p>
    <p class="card-text">$${books.price}</p>
    <button type="button" class="btn btn-dark">Add to cart</button>
    <button type="button" class="btn btn-dark skip">Skip</button>
    </div>
    </div>
    </div>
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
  document.querySelector(".inputField").addEventListener("change", bookDisplay);
};
