class Book {
  constructor( name, author, releaseYear ) {
    this._name = name;
    this._author = author;
    this._releaseYear = releaseYear
  }
  get name() {
    return this._name;
  }
  get author() {
    return this._author;
  }
  get releaseYear() {
    return this._releaseYear;
  }

  set name(newName){
     if (typeof newName !== 'string' || newName.length === 0) {
      return
    }
    this._name = newName
  }
  set author(newAuthor){
     if (typeof newAuthor !== 'string' || newAuthor.length === 0) {
      return
    }
    this._author = newAuthor
  }
  set releaseYear(newReleaseYear){
    if (typeof newReleaseYear !== 'number' || !Number.isInteger(newReleaseYear) || newReleaseYear< 0) {
    return
    }
    this._releaseYear = newReleaseYear
  }
      
  printInfo() {
    console.log(`"${this.name}" by ${this.author}, released in ${this.releaseYear}.`);
  }

  static findOldestBook(books) {
    return books.reduce((oldest, current) =>
      current.releaseYear < oldest.releaseYear ? current : oldest
    );
  }
}

const books = [
  new Book("Roadside Picnic", "Strugatsky brothers", 1972),
  new Book("Harry Potter", "J.K. Rowling", 1997),
  new Book("The Three-Body Problem", "Liu Cixin", 2006),
  new Book("The Little Prince", "Antoine de Saint-Exupéry", 1943)
];

books[0].printInfo()
books[1].printInfo()
books[2].printInfo()
books[3].printInfo()


books[0].name = "Harry Potter,"
books[0].author = "Will Smith,"
books[0].releaseYear = 2025
console.log(books[0].name, books[0].author, books[0].releaseYear)

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

export default Book;



