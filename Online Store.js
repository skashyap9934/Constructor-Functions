"use strict";

// Creating a constructor function 'Author'
function Author(name, birthYear, nationality) {
  this.name = name;
  this.birthYear = birthYear;
  this.nationality = nationality;
}

// Creating a constructor function 'Book'
function Book(title, author, genre, price) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.price = price;
}

// Creating 'getBookInfo' for getting the information about the book
Book.prototype.getBookInfo = function () {
  return `Title: ${this.title}\nAuthor: ${this.author.name}\nGenre: ${this.genre}\nPrice: ${this.price}\n`;
};

const author_one = new Author("William Shakespeare", 1564, "England");
const book_one = new Book("Hamlet", author_one, "Drama", 99);
console.log(book_one.getBookInfo());

const author_two = new Author("Bhupendra Nath Kaushik", 1924, "India");
const book_two = new Book("Bhushe Ka Dher", author_two, "Fiction", 129);
console.log(book_two.getBookInfo());
