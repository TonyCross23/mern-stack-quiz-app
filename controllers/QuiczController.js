import QuizModel from "../models/QuizModel.js";

export const getQuiz = async (req,res) => {
    const Quiz = await QuizModel.find({},{_id:1,questions:1,answers:1});
    res.status(200).json(Quiz)
}

export const stroeQuiz = async (req,res) => {
    const quiz = new QuizModel(req.body);
    await quiz.save();
    res.status(200).json(quiz);
};