function checkOrder(availible, ordered){

    if(ordered === 0){
        console.log("Your order is empty")
        return
    }

    if (availible < ordered){
        console.log("Your order is too large, we don’t have enough goods.")
        return
    }

    console.log("Your order is accepted");
    
        

}

checkOrder(24, 22)
