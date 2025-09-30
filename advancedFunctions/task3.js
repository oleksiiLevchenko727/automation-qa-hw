const validatedDivide = (numerator, denominator) => {

 try{
      if ( denominator === 0 ){
       throw new Error("The parameter cannot be a 0")  
      } 

      if (typeof numerator !== "number" || typeof denominator !== "number"){
       throw new Error("The parameter cannot be a string") 
      } 

       console.log( numerator / denominator )

    } catch (error) {
      console.log("Error:", error.message);

    } finally{
      console.log("Work has been completed");
    }
}


validatedDivide(100, 10)
