const sum = (a,b) => {
    return a + b
}
// solo un registro en consola para nosotros.
console.log(sum(7,3))



let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let fromEuroToDollar = (a) =>{

let EuroaDolar= oneEuroIs["USD"]*a;
return EuroaDolar;

};

console.log(fromEuroToDollar(1));

let fromDollarToYen = (b) =>{

let DolarYen= 1/oneEuroIs["USD"]*oneEuroIs["JPY"]*b;
return DolarYen;

};

console.log(fromDollarToYen(1.2));

let fromYanToPound = (c) =>{

let YanToPound= (c/oneEuroIs["JPY"])*oneEuroIs["GBP"];
return YanToPound;

};

console.log((127.9));

module.exports = {sum,fromDollarToYen,fromEuroToDollar,fromYanToPound};

