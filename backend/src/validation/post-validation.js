import Joi from "joi";

const createPostValidation = Joi.object({
  title: Joi.string().max(100).required(),
  description: Joi.string().required(),
  category_name: Joi.string().required(),
  image: Joi.string().max(255).optional(),
});

const getEmailPostValidation = Joi.string().email().required();
const getIdPostValidation = Joi.number().positive().required();

const updatePostValidation = Joi.object({
  id: Joi.number().positive().required(),
  title: Joi.string().max(100).required(),
  description: Joi.string().required(),
  category_name: Joi.string().required(),
  image: Joi.string().max(255).optional(),
});

const searchPostValidation = Joi.object({
  page: Joi.number().min(1).positive().default(1),
  size: Joi.number().min(1).positive().max(100).default(10),
  name: Joi.string().optional(),
});
export {
  createPostValidation,
  getIdPostValidation,
  getEmailPostValidation,
  updatePostValidation,
  searchPostValidation,
};
