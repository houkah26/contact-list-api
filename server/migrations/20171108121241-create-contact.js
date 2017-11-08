module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("Contacts", "streetAddress", {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn("Contacts", "city", {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn("Contacts", "state", {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn("Contacts", "stateFull", {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn("Contacts", "zipCode", {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn("Contacts", "emailAddress", {
        type: Sequelize.STRING,
        validate: {
          isEmail: true
        }
      }),
      queryInterface.changeColumn("Contacts", "browserUserAgent", {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn("Contacts", "telephoneNumber", {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn("Contacts", "mothersMaiden", {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn("Contacts", "birthday", {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn("Contacts", "age", {
        type: Sequelize.SMALLINT
      }),
      queryInterface.changeColumn("Contacts", "ccType", {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn("Contacts", "ccNumber", {
        type: Sequelize.BIGINT
      }),
      queryInterface.changeColumn("Contacts", "cvv2", {
        type: Sequelize.SMALLINT
      }),
      queryInterface.changeColumn("Contacts", "ccExpires", {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn("Contacts", "nationalId", {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn("Contacts", "ups", {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn("Contacts", "westernUnionMTCN", {
        type: Sequelize.BIGINT
      }),
      queryInterface.changeColumn("Contacts", "moneyGramMTCN", {
        type: Sequelize.INTEGER
      }),
      queryInterface.changeColumn("Contacts", "color", {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn("Contacts", "occupation", {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn("Contacts", "company", {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn("Contacts", "vehicle", {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn("Contacts", "domain", {
        type: Sequelize.STRING
      })
    ]);

    return queryInterface.createTable("Contacts", {
      number: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      gender: {},
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
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      stateFull: {
        type: Sequelize.STRING
      },
      zipCode: { type: Sequelize.INTEGER },
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
        type: Sequelize.STRING
      },
      telephoneNumber: {
        type: Sequelize.STRING
      },
      telephoneCountryCode: {
        type: Sequelize.SMALLINT,
        defaultValue: 1
      },
      mothersMaiden: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.SMALLINT
      },
      ccType: {
        type: Sequelize.STRING
      },
      ccNumber: {
        type: Sequelize.BIGINT
      },
      cvv2: {
        type: Sequelize.SMALLINT
      },
      ccExpires: {
        type: Sequelize.STRING
      },
      nationalId: {
        type: Sequelize.STRING
      },
      ups: {
        type: Sequelize.STRING
      },
      westernUnionMTCN: {
        type: Sequelize.BIGINT
      },
      moneyGramMTCN: {
        type: Sequelize.INTEGER
      },
      color: {
        type: Sequelize.STRING
      },
      occupation: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      vehicle: {
        type: Sequelize.STRING
      },
      domain: {
        type: Sequelize.STRING
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
