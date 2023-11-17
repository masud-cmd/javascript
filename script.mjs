
import { books } from './bookData.mjs';

// Fråga 1
console.log(`Det finns ${books.length} böcker i affären.`);


// fråga 2
const bookNames = books.map((book) => book.title);

console.log('Namnen på alla böcker:');
bookNames.forEach((name) => {
	console.log(name);
});

//fråga 3 

console.log('Namn och pris för alla Fantasy-böcker:');
const fantasyBooks = books.filter((book) => book.genre === 'Fantasy');
fantasyBooks.forEach((book) => {
	console.log(`Titel: ${book.title}, Pris: ${book.price}`);
});

// fråga 4
console.log('Namn och genre för alla klassiker,dystopier och mysterieböcker');
const selectedBooks = books.filter((book) => {
	return book.genre === 'Classic' || book.genre === 'Dystopian' || book.genre === 'Mystery';
});
selectedBooks.forEach((book) => {
	console.log(`Namn: ${book.title}. Genre :${book.genre}`);
})

// fråga 5 
console.log('Böcker som kostar över $10');
const booksOver10 = books.filter((book) => {
	return book.price > 10;
})
booksOver10.forEach((book) => {
	console.log(`Namn : ${book.title} Pris :${book.price}`)
});
// fråga 6 
const totalValue = books.reduce((sum, book) => sum + book.price, 0);
console.log(`Hela bokinnehavet är värt: $${totalValue.toFixed(2)}`);

// fråga 7 
const calculateTotalValue = (genre) => {
	const genreBooks = books.filter((book) => book.genre === genre);
	const totalValue = genreBooks.reduce((sum, book) => sum + book.price, 0);
	return totalValue;
};

const dystopianTotalValue = calculateTotalValue('Dystopian');
const mysteryTotalValue = calculateTotalValue('Mystery');

console.log(`Totalt värde för Dystopian-böcker: $${dystopianTotalValue.toFixed(2)}`);
console.log(`Totalt värde för Mystery-böcker: $${mysteryTotalValue.toFixed(2)}`);
if (dystopianTotalValue > mysteryTotalValue) {
	console.log('Dystopian-böcker är mest värdefulla.');
} else if (mysteryTotalValue > dystopianTotalValue) {
	console.log('Mystery-böcker är mest värdefulla.');
} else {
	console.log('Dystopian och Mystery-böcker är lika värdefulla.');
};

// fråga 8
const nameBook = books.map((book) => book.title);
const sortedBookNames = nameBook.sort();
console.log('Namnen på alla böcker i bokstavsordning:');
sortedBookNames.forEach((name) => {
	console.log(name);
});

// fråga 9
const bookTitles = books.map((book) => book.title);
const duplicates = bookTitles.filter((title, index, titles) => titles.indexOf(title) !== index);
console.log('Böcker med dubbletter:');
duplicates.forEach((title) => {
	console.log(title);
});

// fråga 10 

const authorsNameOne = books.filter((book) => {
	const authorName = book.author.replace(/\./g, '');
	const wordsInName = authorName.split(' ');
	return wordsInName.length > 2;
});

const uniqueAuthors = new Set(authorsNameOne.map((book) => book.author));
console.log('Författare med mer än 2 ord i sina namn (utan punkter):');
uniqueAuthors.forEach((author) => {
	console.log(author);
});

// fråga  11
const sortedAuthors = Array.from(
	new Set(books.map((book) => book.author))
).sort((authorA, authorB) =>
	authorA.split(' ').pop().localeCompare(authorB.split(' ').pop())
);

console.log('Författarnamn i bokstavsordning (sorterade efter efternamn):');
sortedAuthors.forEach((author) => console.log(author));

// fråga 12 

const booksWithoutThe = books.filter((book) => !book.title.startsWith('The'));
console.log('Böcker vars titel inte börjar med "The":');
booksWithoutThe.forEach((book) => {
	console.log(book.title);
});

// fråga 13
const compareTitlesByLength = (bookA, bookB) => bookA.title.length - bookB.title.length;
const sortedBooksByLength = [...books].sort(compareTitlesByLength);
console.log('Böckernas titlar sorterade efter längd i stigande ordning:');
sortedBooksByLength.forEach((book) => {
	console.log(book.title);
});