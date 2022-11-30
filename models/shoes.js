import mongoose from "mongoose";
import yup from "yup";

//SHOES SCHEMA
const shoes_schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  brand: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  price: {
    type: Number,
    required: true,
    min: 10,
    max: 1000,
  },
  avatar: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 1000
  }
});

export const validateShoes = (shoes) => {
  const schema = yup.object().shape({
    name: yup.string().required().min(3).max(50),
    brand: yup.string().required().min(3).max(50),
    price: yup.number().required().min(10).max(1000),
    avatar: yup.string().required().min(10).max(1000)
  });

  return schema
    .validate(shoes)
    .then((shoes) => shoes)
    .catch((error) => {
        return {
            message:error.message
        }
    });
};

export default new mongoose.model("Shoes", shoes_schema);
