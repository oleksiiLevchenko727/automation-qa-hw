import  Book  from './Book.js';
export class EBook extends Book{
 constructor(name, author, releaseYear, fileFormat) {
    super(name, author, releaseYear);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(newfileFormat){
    if (typeof newfileFormat !== 'string' || newfileFormat.length === 0) {
      return
    }
    this._fileFormat = newfileFormat
  }
  
  printInfo() {
    console.log(`"${this.name}" by ${this.author}, released in ${this.releaseYear}. File format is: ${this.fileFormat}`);
  }
}

export default EBook;


