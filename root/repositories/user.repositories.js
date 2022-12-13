import { Where } from "sequelize";
import dataBaseControl from "../util/dataBaseControl.js";
const { user: userModel } = dataBaseControl;
export default {
  create: async (name, email, password) => {
    await userModel.create({ name, email, password });
  },
  update: async (id, { name, email, password }) => {
    const user = await userModel.findByPk(id);
    if (!user) return null;
    const updateduser = user.save({ name, email, password });
    return updateduser;
  },
  delete: async (id) => {
    const count = userModel.destroy({
      where: { id },
    });
  },
  findByPk: async (id) => {
    const user = await userModel.findByPk(id, {
      attributes: {
        exclude: ["password"],
        include: [],
      },
    });
    if (!user) return null;
    return user;
  },
  findOne: async (where) => {
    const user = userModel.findOne({
      where,
      attributes: {
        exclude: ["password"],
        include: [],
      },
    });
    if (!user) return null;
    return user;
  },
  findAll: async (where) => {
    const user = userModel.findAll({
      where,
      attributes: {
        exclude: ["password"],
        include: [],
      },
    });
    return user;
  },
  findAll: async () => {
    const user = userModel.findAll({
      where,
      attributes: {
        exclude: ["password"],
        include: [],
      },
    });
    return user;
  },
};
