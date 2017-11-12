var assert = require('assert');
var loginController = require('../Controllers/loginController');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();
 
chai.use(chaiHttp);

describe('/POST Cadastro de cliente', function() {
    it('Deve retornar que o usuario foi criado', function(done) {
        var user = {
            "email": "teste@teste.com",
            "senha": "123",
            "senhaConfirmacao": "123"
        }
        chai.request(server)
        .post('/api/CreateAccount')
        .send(user)
        .end(function(error, res) {
            res.should.have.status(201);
            done();
        });
    });
});

describe('/POST Cadastro de cliente', function() {
    it('Deve retornar que às senhas são diferentes', function(done) {
        var user = {
            "email": "teste@teste.com",
            "senha": "123",
            "senhaConfirmacao": "321"
        }
        chai.request(server)
        .post('/api/CreateAccount')
        .send(user)
        .end(function(error, res) {
            res.should.have.status(400);
            done();
        });
    });
});