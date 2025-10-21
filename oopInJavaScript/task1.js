import Book from "./Book.js";

const book1 = new Book("Roadside Picnic", "Strugatsky brothers", 1972);
const book2 = new Book("Harry Potter", "J.K. Rowling", 1997);
const book3 = new Book("The Three-Body Problem", "Liu Cixin", 2006);
const book4 = new Book("The Little Prince", "Antoine de Saint-Exupéry", 1943);
const ebook1 = new Book("Roadside Picnic", "Strugatsky brothers", 1972, "pdf");
const ebook2 = new Book("Happy Day", "John Lock", 1954, "pdf");
const books = [book1, book2, book3, book4, ebook1, ebook2];

const oldest = Book.findOldestBook(books);
console.log(oldest);