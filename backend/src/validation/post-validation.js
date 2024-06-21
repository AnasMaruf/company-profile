import Joi from "joi";

const createPostValidation = Joi.object({
  title: Joi.string().max(100).required(),
  image: Joi.string().max(255).required(),
  description: Joi.string().required(),
});
export { createPostValidation };
