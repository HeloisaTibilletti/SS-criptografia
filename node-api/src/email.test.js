const validarEmail = require('./validarEmail');

test('validação de email', () => {
 
    const emailValido = 'heloisa@gmail.com';
        expect(validarEmail(emailValido)).toBe(true);
})