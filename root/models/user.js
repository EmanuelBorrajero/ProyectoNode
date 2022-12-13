import bcrypt from "bcrypt";
const modelName = "user";
const User = (sequelize, DataTypes, models) =>
  sequelize.define(
    modelName,
    {
      id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      paranoid: true,
      hooks: {
        beforeSave: (user, options) => {
          const { password } = user;
          const ep = bcrypt.hash(password);
          user.password = ep;
        },
      },
    }
  );
export default User;
