module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Contacts", {
      number: {
        allowNull: false,
        autoIncrement: true,
        // primaryKey: true,
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.ENUM,
        values: ["male", "female"],
        allowNull: false
      },
      nameSet: {
        type: Sequelize.STRING,
        defaultValue: "American"
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      givenName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      middleInitial: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      streetAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      stateFull: {
        type: Sequelize.STRING,
        allowNull: false
      },
      zipCode: { type: Sequelize.INTEGER, allowNull: false },
      country: {
        type: Sequelize.STRING,
        defaultValue: "US"
      },
      countryFull: {
        type: Sequelize.STRING,
        defaultValue: "United States"
      },
      emailAddress: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      // TO-DO ------------------------------------------------------
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      browserUserAgent: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telephoneNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telephoneCountryCode: {
        type: Sequelize.SMALLINT,
        defaultValue: 1
      },
      mothersMaiden: {
        type: Sequelize.STRING,
        allowNull: false
      },
      birthday: {
        type: Sequelize.STRING,
        allowNull: false
      },
      age: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      ccType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ccNumber: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      cvv2: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      ccExpires: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nationalId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ups: {
        type: Sequelize.STRING,
        allowNull: false
      },
      westernUnionMTCN: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      moneyGramMTCN: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      color: {
        type: Sequelize.STRING,
        allowNull: false
      },
      occupation: {
        type: Sequelize.STRING,
        allowNull: false
      },
      company: {
        type: Sequelize.STRING,
        allowNull: false
      },
      vehicle: {
        type: Sequelize.STRING,
        allowNull: false
      },
      domain: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      latitude: { type: Sequelize.DOUBLE },
      longitude: { type: Sequelize.DOUBLE },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Contacts");
  }
};
