//array operations
//method push()... this method is usd to populate an array or to add contents into an array.


//first define an empty array

// let names = []

// //then run array.push()

// names.push('prince', 'princess')
// console.log(names)

// names.splice()
// console.log(names)

// names.unshift('king')
// console.log(names)

// names.shift(names[0])
// console.log(names)


//Day 2, determine the length of array.
// define your array

const countries = ['United States', 'Germany', 'Nigeria', 'Ghana', 'London', 'Kenya']
console.log(countries.length) // answer = 6

//getting individual item of an array. say we are looking for country Ghana. we use array index whis a number.

console.log(countries[3]) // answer = Ghana and not Nigeria cos array index starts from zero(0), so its 0, 1, 2, 3...,  if i wanted country Kenya it will be..
 console.log(countries[5])

 // if we specify an index above what we have in the array it will show undefined. i.e
 console.log(countries[10])

 //professionally you can do this

 console.log(countries[countries.length - 1]) // this will give you the value of the last index "Kenya" OR
 console.log(countries[countries.length - 2]) // giving you "London"

 //Now lets do a little excercise using the array above

 //print the number of countries

 console.log(`There are ${countries.length} countries in our list of country`)

 // Now lets print individual countries

 console.log('Here are the countries')
 console.log(countries[0])
 console.log(countries[1])
 console.log(countries[2])
 console.log(countries[3])
 console.log(countries[4])
 console.log(countries[5])

 // Now lets see more on how to manipulate array.
 // first, lets add an item to the array.

 countries.push('Australia', 'Turkey')
 console.log(countries)
 // lets chek for the length again 

 console.log(countries.length) // 8

 //lets remove an item from the array

 countries.pop()
 console.log(countries) // here you will see that 'Turkey' is out
 console.log(countries.length) // 7

 //lets make it interactive

 console.log(`You have just removed ${countries.pop()}`)

 // While push and pop manipulate the array at the end shift and unshift starts from the beginning

 countries.shift()
 console.log(countries) // here you will see that 'United States is off'

 // Now lets add a country to front

 countries.unshift('United Kingdom')
 console.log(countries) // Here you will notice United Kingdom added at the front

 // Aside removing and adding from the beginning or end you can also remove from the middle or any where in the array. To do this we use 'splice()'. lets remove the country 'Nigeria' from the list

 countries.splice(2, 1) // this means starting from index two remove one item
 console.log(countries) // Array(5) [ "United Kingdom", "Germany", "Ghana", "London", "Kenya" ]

 countries.splice(0,3) // starting from index 0 remove 3 items
 console.log(countries) // Array [ "London", "Kenya" ]

 //Lets an item to the array in between London and Kenya
 countries.splice(1, 0, 'Poland') // this simply mean starting from index 1 delete nothing but add "Poland"to the list
 console.log(countries)

 countries.splice(2, 1, "Namibia")
 console.log(countries)

 // we can also use the bracket notation to replace an item

 countries[2] = 'Finland'
 console.log(countries)
