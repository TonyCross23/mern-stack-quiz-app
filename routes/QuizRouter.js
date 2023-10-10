import express from "express";
import { getQuiz } from "../controllers/QuiczController.js";

const router = express.Router();

router.get('/',getQuiz)

router.post('/',(req,res) => {
    res.json('this is post method');
})

export default router;