//Day 6
// filtering Array
// To do this we are going to use .filter() method 

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

// here we are going to be fitering our array to get a particular item based on the search criterias provided
// lets assume we want to return countries whose title contains A.
const findCountry = function (country, query){
  return country.filter(function (country, index) {
    const titleMatch = country.title.toLowerCase().includes(query)
    return titleMatch
  })
}

console.log(findCountry(country, 'asia'))



//OUTPUT

// (1) […]
​
// 0: Object { title: "countries in Asia", list: (3) […] }
​
// length: 1


// Aside filtering we may also want to sort our array to display items alphabetically. to do this we use sort() method

const sortCountry = (country) => {
  country.sort((a, b) => {
      if(a.title.toLowerCase() < b.title.toLowerCase()){
        return -1
      } else if (b.title.toLowerCase() < a.title.toLowerCase()){
        return 1
      } else {
        return 0
      }
  })
}
sortCountry(country)
console.log(country)

//OUTPUT

// (3) […]
​
// 0: Object { title: "countries in Africa", list: (3) […] }
​
// 1: Object { title: "countries in Asia", list: (3) […] }
​
// 2: Object { title: "countries in Europe", list: (3) […] }
​
// length: 3




// considering another array of places visited and the ones not visited.

const world = [{
  title: 'countries in Europe',
  visited: false
},{
  title:'countries in Africa',
  visited:true
},{
  title: 'countries in Asia',
  visited: true
},{
  title: 'countries in America',
  visited: false
}]



const sortworld = (world) => {
  world.sort((a, b) => {
      if(a.visited === false && b.visited){
        return -1
      } else if (b.visited === false && a.visited){
        return 1
      } else {
        return 0
      }
  })
}
sortworld(world)
console.log(world)

// OUTPUT

// (4) […]
​
// 0: Object { title: "countries in Europe", visited: false }
​
// 1: Object { title: "countries in America", visited: false }
​
// 2: Object { title: "countries in Africa", visited: true }
​
// 3: Object { title: "countries in Asia", visited: true }
​
// length: 4