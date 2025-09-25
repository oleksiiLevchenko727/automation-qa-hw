

function square(width, height){

   return(width * height)
}
console.log("Function declaration:", square(5, 10))



console.log("----------------------------")



const rectangle = function(width, height){
    return width * height
}
console.log("Function expression:", rectangle(5, 10))


console.log("----------------------------")



const rectangleSquare = (width, height) => width * height
console.log("Arrow function expression:", rectangleSquare(5, 10))
