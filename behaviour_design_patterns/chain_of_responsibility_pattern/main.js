const data = require('./data');
const Search = require('./search');

//data is dump data
const g_search = new Search("Global search" , data);

let searQuery = 'chole bhature23';
const result = g_search.find(searQuery);

console.log(result)

// Chain of responsibility flow goes to one algo it doesnt satisfy then it will to next algo and so no according to chain