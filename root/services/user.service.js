import {
  BAD_REQUEST_ERROR_CODE,
  NOT_FOUND_ERROR,
  USER_PASSWORD_CONFIRMATION_ERROR,
} from "../constants/errors.js";
import UserRepository from "../repositories/user.repository.js";

const USER_NOT_FOUND_ERROR = NOT_FOUND_ERROR("User");
export default {
  create: async ({ email, name, password, passwordConfirmation }) => {
    if (password !== passwordConfirmation)
      throw USER_PASSWORD_CONFIRMATION_ERROR;

    try {
      const user = await UserRepository.create({
        email,
        name,
        password,
      });

      return user;
    } catch (error) {
      if (error?.ValidationErrorItem) {
        const {
          errors: [ValidationErrorItem],
        } = error;
        const formatedError = new Error(ValidationErrorItem.message);
        formatedError.status = BAD_REQUEST_ERROR_CODE;

        throw formatedError;
      }

      throw error;
    }
  },
  update: async ({ id, email, name}) => {
    try {
      const user = await UserRepository.update(id, {
        email,
        name,
      });
      if (!user) {
        throw USER_NOT_FOUND_ERROR;
      }

      return user;
    } catch (error) {
      throw error;
    }
  },
  delete: async (id) => {
    try {
      const count = await UserRepository.delete(id);
      if (!count) throw USER_NOT_FOUND_ERROR;

      return count;
    } catch (error) {
      throw error;
    }
  },
  findAll: async () => {
    try {
      return await UserRepository.findAll();
    } catch (error) {
      throw error;
    }
  },
  findByPk: async (id) => {
    try {
      const user = await UserRepository.findByPk(id);
      if (!user) {
        throw USER_NOT_FOUND_ERROR;
      }

      return user;
    } catch (error) {
      throw error;
    }
  },
  findOne: async (where) => {
    try {
      const user = await UserRepository.findOne({ where: { ...where } });

      if (!user) {
        throw USER_NOT_FOUND_ERROR;
      }

      return user;
    } catch (error) {
      throw error;
    }
  },
};
