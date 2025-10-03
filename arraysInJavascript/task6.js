const numbersList = [1,10,14,2,4,5,43,34]
const copiedNumbersList = [].concat(numbersList)
copiedNumbersList.sort((a,b) => a - b)

console.log("The unsorted list is:", numbersList)
console.log("The sorted list is:", copiedNumbersList)






