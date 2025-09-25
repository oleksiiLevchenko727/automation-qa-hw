

function squareIs(width, height){

   return(width * height)
}
console.log("Function declaration:", squareIs(5, 10))



console.log("----------------------------")



const rectangleSquareIs = function(width, height){
    return width * height
}
console.log("Function expression:", rectangleSquareIs(5, 10))


console.log("----------------------------")



const squareOfRectangleIs = (width, height) => width * height
console.log("Arrow function expression:", squareOfRectangleIs(5, 10))
