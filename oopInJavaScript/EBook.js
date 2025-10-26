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
      return;
    }
    this._name = newName;
  }
  set author(newAuthor){
    if (typeof newAuthor !== 'string' || newAuthor.length === 0) {
      return;
    }
    this._author = newAuthor;
  }
  set releaseYear(newReleaseYear){
    this._releaseYear = newReleaseYear;
    if (typeof newReleaseYear !== 'number' || !Number.isInteger(newReleaseYear) || newReleaseYear < 0) {
      return;
    }
  }

  printInfo() {
    console.log(`"${this.name}" by ${this.author}, released in ${this.releaseYear}. File format is: ${this.fileFormat}`);
  }
}

console.log('----------------------------Ebook--------------------------------');
const ebook1 = new Ebook( "Roadside Picnic", "Strugatsky brothers", 1972, "pdf");
const ebook2 = new Ebook( "Shantaram", "Gregory David Roberts", 2003, "pdf");

ebook1.printInfo();
ebook2.printInfo();

console.log('-----------------------------------------------------------------');

ebook1.name ="The Opportunity,";
ebook1.author ="Karl Lagerfeld,";
ebook1.year="2003";
console.log(ebook1.name, ebook1.author, ebook1.year);

ebook2.name ="Big Boss,";
ebook2.author ="Brunello Cucinelli,";
ebook2.year="1998";
console.log(ebook2.name, ebook2.author, ebook2.year);


export default Ebook;


