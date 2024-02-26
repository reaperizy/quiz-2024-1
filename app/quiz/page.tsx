//utils
import { shuffleArray } from "@/utils/arrayUtils";

//Components
import Quiz from "./Quiz";

//Types
import { Difficulty, QuestionsState, Question } from "@/types/quiz";

const TOTAL_QUESTION = 10;

const getQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionsState> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

    const data: { results: Array<Question> } = await (await fetch(endpoint, { cache: 'no-store' })).json()

    return data.results.map(question => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }))
}

const Home =async () => {
    const questions = await getQuestions(TOTAL_QUESTION, Difficulty.EASY)

    return <Quiz questions={questions} totalQuestions={TOTAL_QUESTION}></Quiz>
}

export default Home;