const divide = (numerator, denominator) => {
  try {
    if (denominator === 0) {
      throw new Error("The parameter cannot be a 0");
    }

    if (typeof numerator !== "number" || typeof denominator !== "number") {
      throw new Error("The parameter cannot be a string");
    }

    // return instead of console.log
    return numerator / denominator;

  } catch (error) {
    console.log("Error:", error.message);
    return null; // return a fallback value if needed
  } finally {
    console.log("Work has been completed");
  }
};

const resut = divide(80, 10)
console.log("Resut is:", resut)