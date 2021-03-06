const Variable = require( '../models/Variable');

class VariableController {
  async store(req, res) {
    const { id, name } = await Variable.create(req.body);

    return res.json({
      id,
      name,
    });
  }
}
module.exports = new VariableController();
