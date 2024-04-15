// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  console.log(findMatching(drivers, 'bobby')); // Output: ['Bobby', 'Bobby']




  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }
  console.log(fuzzyMatch(drivers, 'sa')); // Output: ['Sammy', 'Sally']





  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  console.log(matchName(drivers, 'Bobby')); // Output: [ { name: 'Bobby', hometown: 'Pittsburgh' }, { name: 'Bobby', hometown: 'Tampa Bay' } ]


