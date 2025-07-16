const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
// Destructring

const books = getBooks();
books;
const book = getBook(2);
// const title = book.title;
// const author = book.author;
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// Rest Operator
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre);
console.log(otherGenres);

// Spread Operator
const newGenres = [...genres, "anilSpecial"];
console.log(newGenres);
// [ 'science fiction', 'humor', 'speculative fiction', 'short stories', 'fantasy',  'anilSpecial']

const updatedBook = {
  ...book,
  // Add new property
  moviePublicationDatE: "2001-12-19",

  // Overwriting an existing property
  pages: 1210,
};
console.log(updatedBook);

const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}`;
summary;

const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;

function getYear(str) {
  return str.split("-")[0];
}

getYearArrow = (str) => str.split("-")[0];

console.log(getYear(publicationDate));
console.log(getYearArrow(publicationDate));

// Short-Circuiting And Logical Operators: &&, ||, ??

console.log(true && "some string"); // some string
console.log(false && "some string"); // false
console.log(hasMovieAdaptation && "this book has a movie!"); // this book has a movie!

// falsy: 0, '', null, false, undefined
console.log("jonas" && "anil"); // anil
console.log(0 && "anil"); // 0

console.log(true || "some string"); // true
console.log(false || "some string"); // some string

const spanishTranslation = book.translations.japanese || "NOT TRANSLATED";
console.log(spanishTranslation); // NOT TRANSLATED

console.log(book.reviews.librarything.reviewsCount); // 0
const countWrong = book.reviews.librarything.reviewsCount || "no data";
console.log(countWrong); // no data

const countWrongTrueVersion =
  book.reviews.librarything.reviewsCount ?? "no data";
console.log(countWrongTrueVersion); // 0

// Optional Chaining
function getTotalReviewCount(book) {
  const goodread = book.reviews.goodreads?.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodread + librarything;
}

console.log(getTotalReviewCount(book));

console.log(undefined ?? 0); // 0
console.log("anil" ?? 0); // anil
console.log(0 ?? "anil"); // 0
console.log(undefined ?? "anil"); // anil



// The Array map Method
const books = getBooks();

const x = [1, 2, 3, 4].map((el) => el * 2);
console.log(x); // [2, 4, 6, 8]

const titles = books.map((book) => book.title);
console.log(titles);

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));

console.log(essentialData);

// The Array filter Method
const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooksWithMovie);

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
console.log(adventureBooks);
// ["The Lord of the Rings", "Dune", "Harry Potter and the Philosopher's Stone"];

// The Array reduce Method
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
console.log(pagesAllBooks);

// The Array sort Method
const y = [3, 7, 1, 9, 7];
const sorted = y.sort((a, b) => a - b);
console.log(sorted); // [ 1, 3, 7, 7, 9 ]
console.log(y); // [ 1, 3, 7, 7, 9 ]

const arr = [1, 7, 9, 4, 23, 4, 2, 9];
const sortedArrWithImmutable = arr.toSorted((a, b) => a - b);
console.log(sortedArrWithImmutable); // Array(8) [ 1, 2, 4, 4, 7, 9, 9, 23 ]
console.log(arr); // Array(8) [ 1, 7, 9, 4, 23, 4, 2, 9 ]
console.log(arr.toSorted((a, b) => b - a)); // Array(8) [ 23, 9, 9, 7, 4, 4, 2, 1 ]

// old school way
const sortedOldSchool = arr.slice().sort((a, b) => a - b);
console.log(sortedOldSchool); // Array(8) [ 1, 2, 4, 4, 7, 9, 9, 23 ]
console.log(arr); // Array(8) [ 1, 7, 9, 4, 23, 4, 2, 9 ]

const sortedByPages = books
  .slice()
  .sort((a, b) => b.pages - a.pages)
  .map((book) => Object.create({ title: book.title, pages: book.pages }));
console.log(sortedByPages);
// [
//   { title: 'The Lord of the Rings', pages: 1216 },
//   { title: 'A Game of Thrones', pages: 835 },
//   { title: 'Dune', pages: 658 },
//   { title: 'The Cyberiad', pages: 295 },
//   { title: 'Harry Potter and the Philosopher\'s Stone', pages: 223 }
// ]

// Working With Immutable Arrays

// 1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

const bookAfterAdd = [...books, newBook];
console.log(bookAfterAdd);

// 2) Delete book object from array
const booksAfterDelete = bookAfterAdd.filter((book) => book.id !== 3);
console.log(booksAfterDelete);
// Id si 3 olani filtrele (cikar)

// 3) Update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1209, isAnilFav: true } : book
);
console.log(booksAfterUpdate);

*/
// Asynchronous JavaScript: Promises
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// Asynchronous JavaScript: Async/Await
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}

getTodos();
