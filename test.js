// importar la función sum del archivo app.js
const {sum} = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14,9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", ()=>{
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(4.2);
})
test("One euro should be 1.206 dollars", ()=>{
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const yenes = fromDollarToYen(3)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = (1/1.2)*(127.9*3 )
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(319.75000000000006);
})

test("One euro should be 1.206 dollars", ()=>{
    // importo la funcion desde app.js
    const { fromYanToPound } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const Pound = fromYanToPound(3)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = (3/127.9)*0.8
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(0.018764659890539485);
})