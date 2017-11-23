var assert = require('assert');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

describe('/POST CasdastraVaca', function() {
    it('Deve cadastrar uma vaca', function(done) {
        var vaca = {
            "nome":  "teste",
            "leite": "10",
            "racao": "10"
        }
        chai.request(server)
        .post('/api/CadastraVaca')
        .send(vaca)
        .end(function(error, res) {
            res.should.have.status(201);
            res.should.be.a.json;
            done();
        });
    });
});

describe('/POST CasdastraVaca', function() {
    it('Não deve cadastrar uma vaca', function(done) {
        var vaca = {
            "nome":  "",
            "leite": "",
            "racao": ""
        }
        chai.request(server)
        .post('/api/CadastraVaca')
        .send(vaca)
        .end(function(error, res) {
            res.should.have.status(400);
            res.should.be.a.json;
            done();
        });
    });
});

describe('/GET GetAllVacas', function() {
    it('Deve retornar todas as vacas', function(done) {

        chai.request(server)
        .get('/api/GetAllVacas')
        .end(function(error, res) {
            res.should.have.status(200);
            res.should.be.a.json;
            done();
        });
    });
});

describe('/GET GetAllVacas', function() {
    it('Não deve retornar vacas', function(done) {

        chai.request(server)
        .get('/api/GetAllVacas')
        .end(function(error, res) {
            res.should.have.status(200);
            res.should.be.a.json;
            done();
        });
    });
});
