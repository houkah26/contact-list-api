// Have BIGINT's returned as int instead of string (issue with node-postgres)
// https://github.com/sequelize/sequelize/issues/2383#issuecomment-58006083
require("pg").defaults.parseInt8 = true;

module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define("Contact", {
    number: {
      type: DataTypes.INTEGER
    },
    gender: {
      type: DataTypes.ENUM,
      values: ["male", "female"],
      allowNull: false
    },
    nameSet: {
      type: DataTypes.STRING,
      defaultValue: "American"
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    givenName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    middleInitial: {
      type: DataTypes.STRING
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    streetAddress: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    stateFull: {
      type: DataTypes.STRING
    },
    zipCode: { type: DataTypes.INTEGER },
    country: {
      type: DataTypes.STRING,
      defaultValue: "US"
    },
    countryFull: {
      type: DataTypes.STRING,
      defaultValue: "United States"
    },
    emailAddress: {
      type: DataTypes.STRING,

      validate: {
        isEmail: true
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    browserUserAgent: {
      type: DataTypes.STRING
    },
    telephoneNumber: {
      type: DataTypes.STRING
    },
    telephoneCountryCode: {
      type: DataTypes.SMALLINT,
      defaultValue: 1
    },
    mothersMaiden: {
      type: DataTypes.STRING
    },
    birthday: {
      type: DataTypes.STRING
    },
    age: {
      type: DataTypes.SMALLINT
    },
    ccType: {
      type: DataTypes.STRING
    },
    ccNumber: {
      type: DataTypes.BIGINT,
      validate: {
        isCreditCard: true
      }
    },
    cvv2: {
      type: DataTypes.SMALLINT
    },
    ccExpires: {
      type: DataTypes.STRING
    },
    nationalId: {
      type: DataTypes.STRING
    },
    ups: {
      type: DataTypes.STRING
    },
    westernUnionMTCN: {
      type: DataTypes.BIGINT
    },
    moneyGramMTCN: {
      type: DataTypes.INTEGER
    },
    color: {
      type: DataTypes.STRING
    },
    occupation: {
      type: DataTypes.STRING
    },
    company: {
      type: DataTypes.STRING
    },
    vehicle: {
      type: DataTypes.STRING
    },
    domain: {
      type: DataTypes.STRING
    },
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    latitude: { type: DataTypes.DOUBLE },
    longitude: { type: DataTypes.DOUBLE }
  });

  return Contact;
};
