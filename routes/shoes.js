import express from "express";
import { createShoes, getAllShoes, getShoesById, updateShoes, deleteShoes, getShoesByName } from "../controllers/shoes.js";

const router = express.Router();

//POST -> Create new shoes
router.post('/', createShoes);

//POST -> Get Shoes by name
router.post('/name/', getShoesByName);

//GET -> Get all shoes
router.get('/', getAllShoes);

//GET -> Get one shoes
router.get('/:shoesId', getShoesById);

//PUT -> Update shoes based on id (replace everything)
router.put('/:shoesId', updateShoes);

//DELETE -> Delete shoes based on id
router.delete('/:shoesId', deleteShoes);

export default router;
