
const printWithDelay = (text, delay) =>{
    setTimeout(() => {
        console.log(text);
    }, delay);
}

printWithDelay('Good morning', 500);