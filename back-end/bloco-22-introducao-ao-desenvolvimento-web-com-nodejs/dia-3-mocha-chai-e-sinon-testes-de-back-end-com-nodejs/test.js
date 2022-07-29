const { expect } = require('chai');
const sinon = require('sinon');
const numberSide = require('./numberSide');

describe('Testa função que retorna mensagem se número é positivo, negativo ou neutro', () => {
  it('Verifica se a resposta: "o valor deve ser um número" quando entrada não é tipo "number"', () => {
    const resposta = numberSide('6');    
    expect(resposta).to.equal('o valor deve ser um número');
  })
  it('Verifica se a resposta é uma string', () => {
    const resposta = numberSide(6);
    const tipoDaReposta = typeof resposta;
    expect(tipoDaReposta).to.equal('string');
  });
  it('Verifica se a resposta é "positivo" quando número é positivo', () => {
    const resposta = numberSide(6);    
    expect(resposta).to.equal('positivo');
  });
  it('Verifica se a resposta é "negativo" quando número é negativo', () => {
    const resposta = numberSide(-6);    
    expect(resposta).to.equal('negativo');
  });
  it('Verifica se a resposta é "neutro" quando número é zero', () => {
    const resposta = numberSide(0);    
    expect(resposta).to.equal('neutro');
  })
});

//! EXERCÍCIO 4---------------------------------------------------------------

describe.only('Testa a escrita em um arquivo', () => {
  it('O arquivo existe', () => {

  });
  it('Escreve no arquivo e verifica se os dados estão corretos')
});