const converterTemperatura = require('./temperatura')

test('Deve converter para 100 graus Fahrenheit.', () => {
    const resultado = converterTemperatura(100);
    expect(resultado).toBe(212)
});