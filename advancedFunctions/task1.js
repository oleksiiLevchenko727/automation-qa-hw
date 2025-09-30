

const handleNum  = (num, handleEven, handleOdd) => {
  if (num % 2 !== 0)
  {
    handleEven (num);
  } else {
    handleOdd(num);
  }
}

handleNum (
    11,
    () => console.log(`The number is odd`),
    () => console.log(`The number is even`)
)



