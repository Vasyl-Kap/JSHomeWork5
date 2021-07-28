// #2

let num = prompt('Введіть число');
function IsPrime(num) {
    let flag = true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
let res = IsPrime(num);
if (res === true) {
    console.log('Дане число є ПРОСТИМ')
}
else if (res === false) {
    console.log('Дане число НЕ є простим')
}