const Contact = require("../models").Contact;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  create(req, res) {
    return Contact.create(req.body, { fields: Object.keys(req.body) })
      .then(contact => res.status(201).send(contact))
      .catch(error => {
        console.log(error);
        return res.status(400).send(error);
      });
  },

  find(req, res) {
    // Get query from request and extract param and value
    // ex: {surname: 'smith'} => queryParam = 'surname' & queryValue = 'smith'
    const query = req.query;
    const queryParam = Object.keys(query)[0];
    const queryValue = query[queryParam];

    // Find contact where queryValue is ILIKE '%value%' (case insensitive)
    return Contact.findAll({
      where: {
        [queryParam]: {
          [Op.iLike]: `%${queryValue}%`
        }
      }
    })
      .then(contacts => res.status(200).send(contacts))
      .catch(error => {
        console.log(error);
        return res.status(400).send(error);
      });
  }
};
