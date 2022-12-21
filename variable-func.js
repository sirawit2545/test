let plusFive = (Number) => {
    return number +5;
};
// f is assihned the value of plusFIve
let f = plusFive;

console.log(plusFive(3)) ; //8
// Since f has a function value , it can be invoked.
console.log(f(9)) ; //14