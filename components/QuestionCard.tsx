import React from 'react';
import { getBGColor } from './Button/helpers';

type Props = {
    currentQuestionIndex: number
    question: string
    answers: Array<string>
    userAnswer: string | undefined
    correctAnswer: string
    onClick: (answer: string, currentQuestionIndex: number) => void
}

const QuestionCard = ({ currentQuestionIndex, question, answers, userAnswer, correctAnswer, onClick }: Props) => {
    return (
        <div>
            <p className="text-[20px] max-w-[400px]" dangerouslySetInnerHTML={{__html: question}}></p>
            <div className="flex flex-col items-center pt-8">
                {answers.map(answer => (
                    <div
                        className={`${getBGColor(userAnswer, correctAnswer, answer)} 
                             cursor-pointer flex items-center justify-center select-none font-bold min-h-[45px] max-w-[400] w-full my-2 rounded-[10px]`}
                        key={answer}
                        onClick={() => onClick(answer, currentQuestionIndex)}>
                        <span className="truncate">{answer}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default QuestionCard;
