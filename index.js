


// Day 3..
// Looping over an array
// Using for each method print the individual items of the array

// const countries = ['United States', 'Germany', 'Nigeria', 'Ghana', 'London', 'Kenya']

// countries.forEach(function (items) {
//   console.log(items)
// })

// // using forEach print the items along with its index

// countries.forEach(function (item, index) {
//   console.log(index,':', item)
// })

// // Lets assume we dont want to start the numbering from zero but one since we are displaying it to the user.
// console.log('Here are the list of countries')
// countries.forEach(function(item, index) {
//   const number = index + 1
//   // using template string,we do this
//   console.log(`${number}. ${item}`)
// })
// // An alternative to forEach is the for method, lets assume we want to print numbers from 1 to 10, we do this...
// for (i = 1; i<= 10; i++){
//   console.log(i)
// }

// // Now using it in our array

// for (country = 0; country < countries.length; country++){
//   const num = country + 1
//   console.log(`${num}. ${countries[country]}`)
// }


//Day 4
// Searching through Array
// To do this we are going to use indexOf 
const countries = ['United States', 'Germany', 'Nigeria', 'Ghana', 'London', 'Kenya']

//lets get the position of Kenya in the array
console.log(countries.indexOf('Kenya')) // this is going to give us 5 because it exist in the fifth index posion of the array. but if it doesnt exist we will get negative one (-1). Lets see this, change K of Kenya to lowercase k to have kenya and see the result.
console.log(countries.indexOf('kenya'))

// Now lets change our array from array of strings to array of objects, in this case indexOf does not work here but there is an alternative to that when dealing with objects which is findIndex.

const country = [{
  title: 'countries in Europe',
  list: ['London', 'Italy', 'France']
},{
  title:'countries in Africa',
  list:['Nigeria', 'Ghana', 'Cameron']
},{
  title: 'countries in Asia',
  list: ['Quatar', 'Saudi Arabia', 'Iran']
}]

// findIndex uses a function

const contry = country.findIndex(function (item, index) {
  return item.title === 'countries in Africa'
})
console.log(contry) // this will give us index of 1.

// another check to print the idex of countries in asia

const Asia = country.findIndex((item, index) => {
  return item.title === 'countries in Asia'
})
console.log(Asia) // this gives us index of 2

// Now lets try to print the items and not just their index

const findCountry = function(country, countryTitle) {
  const countryIndex = country.findIndex(function(item, index) {
    return item.title === countryTitle
  }) 
  return country [countryIndex]
}
const item = findCountry(country, 'countries in Asia')
console.log(item)

// Lets try changing the Asia to asia and see our output

const findCountry = function(country, countryTitle) {
  const countryIndex = country.findIndex(function(item, index) {
    return item.title === countryTitle
  }) 
  return country [countryIndex]
}
const item = findCountry(country, 'countries in asia')
console.log(item) 


// we get undefined because it is case sensitive. to prevent this we change them to lowercase

const findCountry = function(country, countryTitle) {
  const countryIndex = country.findIndex(function(item, index) {
    return item.title.toLowerCase() === countryTitle.toLowerCase()
  }) 
  return country [countryIndex]
}
const item = findCountry(country, 'countries in asia')
console.log(item)

//another method to get this done is using find()

const findCountry = function(country, countryTitle) {
  return country.find(function(item, index) {
    return item.title === countryTitle
  }) 
  
}
const item = findCountry(country, 'countries in Asia')
console.log(item)

// now we are going to look at how to find an item and delete it

const deleteCountry = function(country, countryTitle) {
  const countryIndex = country.findIndex(function(item, index) {
    return item.title === countryTitle
  }) 
  
  if(countryIndex > -1) {
    country.splice(countryIndex, 1)
  }
}
deleteCountry(country, 'countries in Asia')
console.log(country)