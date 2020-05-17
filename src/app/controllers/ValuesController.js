/* eslint-disable no-plusplus */
import Variable from '../models/Variable';
import Values from '../models/Values';

class ValuesController {
  async store(req, res) {
    const data = req.body;
    const arrayNumber = data.value;
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
    // ordenando
    novoArrayNumber.sort((a, b) => {
      return a - b;
    });
    const op = data.option2;
    switch (op) {
      //
      case 1: {
        if (data.option3 === 1) {
          // frequencia quantitativa discreta

          const frequencia = novoArrayNumber.reduce(function (todos, repeticao) {
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
            novoArrayNumber,
            novoArrayString,
            frequencia,
            frequenciaRel,
            frequenciaAcumulada,
            frequenciaRelAcum,
          });
        }
        if (data.option3 === 2) {
          // frequencia quantitativa continua

          const frequencia = novoArrayNumber.reduce(function (todos, repeticao) {
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
            novoArrayNumber,
            novoArrayString,
            frequencia,
            frequenciaRel,
            frequenciaAcumulada,
            frequenciaRelAcum,
          });
        }
      }
    }
  }
}

export default new ValuesController();
