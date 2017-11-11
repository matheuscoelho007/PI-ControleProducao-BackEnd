var User = require('../Models/userModel');

exports.CreateAccount = function (req, res) {

  var Usuario = new User();
    Usuario.email = req.body.email,
    Usuario.senha = req.body.senha,
    Usuario.senhaConfirmacao = req.body.senhaConfirmacao

  if (Usuario.senha != Usuario.senhaConfirmacao) {
    res.json(400, {
      message: 'Senhas Diferentes.'
    })
    return 400;
  } else {
    Usuario.save();
    res.json({
      message: 'Usuário Criado.'
    })
    return 200;
  }
}