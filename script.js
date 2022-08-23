// console.log("scriptjs");


//1
const printOut = ()=>{
    let count =0;
    return function(){
        if(count <= 5){
            console.log("Congrats you earn the chance!");
        } else {
            console.log("Sorry you missed the chance!");
        }
        count+=1;
    }
}

const tryPrint = printOut();
let amount = 5;
//test
for(let i = 0; i <amount; i++){
    tryPrint();
}
 //test
for(let i = 0; i <8; i++){
    tryPrint();
}

//2
function longerThan(minimumLength) {
    return (element) => {
        return (element.length > minimumLength);
    }
}
//test
console.log(["I","Me", "You", "Every body"].filter(longerThan(0)));
console.log(["I","Me", "You", "Every body"].filter(longerThan(1)));
console.log(["I","Me", "You", "Every body"].filter(longerThan(2)));
console.log(["I","Me", "You", "Every body"].filter(longerThan(3)));
console.log(["I","Me", "You", "Every body"].filter(longerThan(4)));