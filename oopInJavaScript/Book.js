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

export default Book;



