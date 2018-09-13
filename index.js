


// Day 3..
// Looping over an array
// Using for each method print the individual items of the array

const countries = ['United States', 'Germany', 'Nigeria', 'Ghana', 'London', 'Kenya']

countries.forEach(function (items) {
  console.log(items)
})

// using forEach print the items along with its index

countries.forEach(function (item, index) {
  console.log(index,':', item)
})

// Lets assume we dont want to start the numbering from zero but one since we are displaying it to the user.
console.log('Here are the list of countries')
countries.forEach(function(item, index) {
  const number = index + 1
  // using template string,we do this
  console.log(`${number}. ${item}`)
})
// An alternative to forEach is the for method, lets assume we want to print numbers from 1 to 10, we do this...
for (i = 1; i<= 10; i++){
  console.log(i)
}

// Now using it in our array

for (country = 0; country < countries.length; country++){
  const num = country + 1
  console.log(`${num}. ${countries[country]}`)
}


