const validarSenha = require('./senha')

test('Validação de Senha', () => {
    const senhaValida = "helo123"
    
    expect(validarSenha(senhaValida)).toBe(true);
})