function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then(res => res.json())
    .then(data => renderBooks(data));

}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}


document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});

/*
let g = fetch("https://anapioficeandfire.com/api/books")
  .then((books) => books.json())
  .then((books) =>
    books.forEach((element) => {
      const main = document.querySelector("main");
        const h2 = document.createElement("h2");
        h2.innerHTML = element.name;
        main.appendChild(h2);
    })
  );*/
