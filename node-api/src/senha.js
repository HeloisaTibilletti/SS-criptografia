function validarSenha(senha) {

    const comprimento = senha.length >= 6;    // verificar de a senha é maior que 6 digitos
    const letras = /[a-zA-Z]/.test(senha);    // verificar se tem letras miniusculas e/ou maiusculas
    const numero = /[0-9]/.test(senha);       // verificar se tem numeros

    return comprimento && letras && numero;
}

module.exports = validarSenha