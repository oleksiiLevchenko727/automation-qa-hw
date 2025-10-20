import Book from './Book.js';
import EBook from './EBook.js';

const books = [
  new Book("Roadside Picnic", "Strugatsky brothers", 1972),
  new Book("Harry Potter", "J.K. Rowling", 1997),
  new Book("The Three-Body Problem", "Liu Cixin", 2006),
  new Book("The Little Prince", "Antoine de Saint-Exupéry", 1943),
];

const ebooks = [
  new EBook("Happy Day", "John Lock", 1954, "pdf"),
  new EBook("Shantaram", "Gregory David Roberts", 2003, "pdf")
];

books.forEach(book => book.printInfo());

books[0].name = "Harry Potter";
books[0].author = "Will Smith";
books[0].releaseYear = 2025;
console.log(books[0].name, books[0].author, books[0].releaseYear);

books[1].name = "The river," 
books[1].author = "Orlando Bloom," 
books[1].releaseYear = 2011 
console.log(books[1].name, books[1].author, books[1].releaseYear)

books[2].name = "Dark Side," 
books[2].author = "Mark Wollberg," 
books[2].releaseYear = 2009 
console.log(books[2].name, books[2].author, books[2].releaseYear)

books[3].name = "Black Wood," 
books[3].author = "Ariana Grande," 
books[3].releaseYear = 2014 
console.log(books[3].name, books[3].author, books[3].releaseYear)

ebooks[0].name = "The Opportunity";
ebooks[0].author = "Karl Lagerfeld";
ebooks[0].releaseYear = 2003;

ebooks[1].name = "Big Boss";
ebooks[1].author = "Brunello Cucinelli";
ebooks[1].releaseYear = 1998;

ebooks.forEach(ebook => ebook.printInfo());
