var User = require('../Models/userModel');

exports.CreateAccount = function (req, res) {

  try {
      var Usuario = new User();
      Usuario.email = req.body.email,
      Usuario.senha = req.body.senha,
      Usuario.senhaConfirmacao = req.body.senhaConfirmacao

    if (Usuario.senha != Usuario.senhaConfirmacao) {
      return res.status(400).json({
        message: 'Senhas Diferentes.'
      })
    }
    if (Usuario.email == null || Usuario.senha == null || Usuario.senhaConfirmacao == null) {
      return res.status(400).json({
        message: 'Informe Todos os dados.'
      })
    } else {
      Usuario.save();
      return res.status(201).json({
        message: 'Usuário Criado.'
      })
    }
  } catch (error) {
    return res.send(error)
  }
}