import Joi from "joi";

export const questionSchema = Joi.object({
  question: Joi.string().required()
});
