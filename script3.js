// #3

function maxElement (...arg){
    let max;
    let min = arg[0];
    for(let i = 0; i < arg.length; i++){
        if((arg[i]) < min){
            min = arg[i]; 
        } else {
            max = arg[i];
        }
    }
    return max;
}
let res = maxElement(2,5,0,25,100)
console.log(res);
