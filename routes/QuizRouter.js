import express from "express";
import { getQuiz, stroeQuiz } from "../controllers/QuiczController.js";

const router = express.Router();

router.get('/',getQuiz);

router.post('/',stroeQuiz);

export default router;