/* eslint-disable no-plusplus */
const Variable = require( '../models/Variable');
const Values = require( '../models/Values');

class ValuesController {
  async store(req, res) {
    const { tipoAnalise, name, value, tipoVariavel } = req.body;
    const arrayNumber = value;
    // separando
    const numeros = arrayNumber.split(/\s*;\s*/);
    const novoArrayNumber = [];
    const novoArrayString = [];

    // criando cada posiçao do array
    for (let i = 0; i < numeros.length; i++) {
      // eslint-disable-next-line no-restricted-globals
      if (!isNaN(parseFloat(numeros[i]))) {
        // eslint-disable-next-line radix
        novoArrayNumber.push(parseInt(numeros[i]));
      } else {
        novoArrayString.push(numeros[i]);
      }
    }

    const op = tipoVariavel;
    if (op === 1) {
      // frequencia qualitativa nominal

      const frequencia = novoArrayString.reduce(function (todos, repeticao) {
        if (repeticao in todos) {
          todos[repeticao]++;
        } else {
          todos[repeticao] = 1;
        }
        return todos;
      }, {});

      const cont = Object.values(frequencia);
      const soma = cont.reduce((total, repeticao) => total + repeticao, 0);

      const frequenciaRel = [];
      for (let i = 0; i < cont.length; i++) {
        frequenciaRel.push(cont[i] / soma);
      }
      const frequenciaAcumulada = [];
      let acumulador = 0;
      for (let i = 0; i < cont.length; i++) {
        acumulador += cont[i];
        frequenciaAcumulada.push(acumulador);
      }
      const frequenciaRelAcum = [];
      acumulador = 0;
      for (let i = 0; i < cont.length; i++) {
        acumulador += cont[i] / soma;
        frequenciaRelAcum.push(acumulador);
      }

      return res.json({
        frequencia,
        frequenciaRel,
        frequenciaAcumulada,
        frequenciaRelAcum,
      });
    }
    if (op === 2) {
      // frequencia qualitativa ordinal

      // ordenando
      novoArrayString.sort();
      const frequencia = novoArrayString.reduce(function (todos, repeticao) {
        if (repeticao in todos) {
          todos[repeticao]++;
        } else {
          todos[repeticao] = 1;
        }
        return todos;
      }, {});

      const cont = Object.values(frequencia);
      const soma = cont.reduce((total, repeticao) => total + repeticao, 0);

      const frequenciaRel = [];
      for (let i = 0; i < cont.length; i++) {
        frequenciaRel.push(cont[i] / soma);
      }
      const frequenciaAcumulada = [];
      let acumulador = 0;
      for (let i = 0; i < cont.length; i++) {
        acumulador += cont[i];
        frequenciaAcumulada.push(acumulador);
      }
      const frequenciaRelAcum = [];
      acumulador = 0;
      for (let i = 0; i < cont.length; i++) {
        acumulador += cont[i] / soma;
        frequenciaRelAcum.push(acumulador);
      }


      return res.json();
    }
  }
}

module.exports =  new ValuesController();
