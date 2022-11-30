import express from "express";
import { createShoes } from "../controllers/shoes.js";

const router = express.Router();

//POST -> Create new shoes
router.post('/', createShoes);

export default router;