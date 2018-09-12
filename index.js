//array operations
//method push()... this method is usd to populate an array or to add contents into an array.


//first define an empty array

let names = []

//then run array.push()

names.push('prince', 'princess')
console.log(names)

names.splice('princess')
console.log(names)

names.unshift('king')
console.log(names)

names.shift(names[0])
console.log(names)

