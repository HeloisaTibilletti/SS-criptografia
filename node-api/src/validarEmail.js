function validarEmail(email) {
    const validacao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    // validação de endereço de email
    return validacao.test(email);
}

module.exports = validarEmail;