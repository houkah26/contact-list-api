const contactsSeed = require("./contactListSeed.json");

// Add created at and updated at fields
const newDate = new Date();
contactsSeed.forEach(contact => {
  delete contact.number;
  contact.createdAt = newDate;
  contact.updatedAt = newDate;
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("Contacts", contactsSeed, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete("Contacts", null, {});
  }
};
