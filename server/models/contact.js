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
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stateFull: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zipCode: { type: DataTypes.INTEGER, allowNull: false },
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
      allowNull: false,
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
      type: DataTypes.STRING,
      allowNull: false
    },
    telephoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telephoneCountryCode: {
      type: DataTypes.SMALLINT,
      defaultValue: 1
    },
    mothersMaiden: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthday: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    ccType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ccNumber: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        isCreditCard: true
      }
    },
    cvv2: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    ccExpires: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nationalId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ups: {
      type: DataTypes.STRING,
      allowNull: false
    },
    westernUnionMTCN: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    moneyGramMTCN: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    occupation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vehicle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    domain: {
      type: DataTypes.STRING,
      allowNull: false
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
