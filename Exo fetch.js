function fetchBooks() {
  fetch("https://philippe.afpa-balma.fr/ng/json/books.json")
    .then((result) => result.jason)
    .then((books) => books.forEach((book) => console.log(book.title)));
}
fetchBooks();

//
