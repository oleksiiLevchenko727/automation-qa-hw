

function getSquare(width, height){

   return(width * height)
}
console.log("Function declaration:", getSquare(5, 10))



console.log("----------------------------")



const getRectangleSquare = function(width, height){
    return width * height
}
console.log("Function expression:", getRectangleSquare(5, 10))


console.log("----------------------------")



const getSquareOfRectangle = (width, height) => width * height
console.log("Arrow function expression:", getSquareOfRectangle(5, 10))
