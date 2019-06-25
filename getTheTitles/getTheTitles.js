const getTheTitles = function(bb) {
	titles = [];
	for (let i in bb) {
		ray = bb[i];
		singleTitle = ray['title'];
		titles.push(singleTitle);
	}
	return titles
}
 
module.exports = getTheTitles;


// const books = [
//   {
//     title: 'Book',
//     author: 'Name'
//   },
//   {
//     title: 'Book2',
//     author: 'Name2'
//   }
// ]

// console.log(getTheTitles(books));

