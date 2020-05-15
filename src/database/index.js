import Sequelize from 'sequelize';

// importa o model

import User from '../app/models/User';
import Variable from '../app/models/Variable';
import Values from '../app/models/Values';

// importa a configuração de database para fazer a conexão com o banco de Dados

import databaseConfig from '../config/database';

// Array de models para que eu possa percorrer e acessar os models e seu metodos para fazer a ligação com o banco

const models = [User, Variable, Values];

// Criar Classe com as configuraçoes do DB

class Database {
  constructor() {
    this.init();
  }

  init() {
    // instancio uma nova conexão
    // passando o parametro que chamei no MODELS dentro do init= sequelize
    this.connection = new Sequelize(databaseConfig);
    // percorro o array de models procurando o parametro init dentro do Model e passo como parametro o this.connection
    // que foi instanciado anteriormente
    models
      .map((model) => model.init(this.connection));
      // .map((model) => model.associate && model.associate(this.conection.models));
  }
}

export default new Database();
