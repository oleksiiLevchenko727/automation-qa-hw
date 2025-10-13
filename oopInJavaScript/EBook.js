import  Book  from './Book.js';
export class Ebook extends Book{
 constructor(name, author, releaseYear, fileFormat) {
    super(name, author, releaseYear);
    this.fileFormat = fileFormat;
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
    this._releaseYear = newReleaseYear
    if (typeof newReleaseYear !== 'number' || !Number.isInteger(newReleaseYear) || newReleaseYear < 0) {
      return
    }
  }

  printInfo() {
    console.log(`"${this.name}" by ${this.author}, released in ${this.releaseYear}. File format is: ${this.fileFormat}`);
  }
}

const books = [
 new Ebook("Happy Day", "John Lock", 1954, "pdf"),
 new Ebook("Shantaram", "Gregory David Roberts", 2003, "pdf")
]

console.log('-----------------------------------------------------------------')

books[0].name ="The Opportunity,"
books[0].author ="Karl Lagerfeld,"
books[0].year="2003"
console.log(books[0].name, books[0].author, books[0].year)

books[1].name ="Big Boss,"
books[1].author ="Brunello Cucinelli,"
books[1].year="1998"
console.log(books[1].name, books[1].author, books[1].year)


books[0].printInfo()
books[1].printInfo()



