

const handleNumIs = (num, isEven, isOdd) => {
  if (num % 2 !== 0)
  {
    isEven(num);
  } else {
    isOdd(num);
  }
}

handleNumIs(
    11,
    () => console.log(`The number is odd`),
    () => console.log(`The number is even`)
)



