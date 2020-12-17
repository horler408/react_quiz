import React from 'react'

type props = {
    question: string;
    answers: string[];
    callBack: any;
    userAnswer: any;
    questionNum: number;
    totalQuestions: number
}

const QuestionCard: React.FC<props> = ({
    question, 
    answers,
    callBack,
    userAnswer,
    questionNum,
    totalQuestions 
}) => (
    <div>
        <p className="number">
            Question: {questionNum} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }}></p>
        <div>
            {answers.map((answer) => (
                <div>
                    <button disabled={userAnswer} onClick={callBack}>
                        <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                    </button>
                </div>
            ))}
        </div>
    </div>
)

export default QuestionCard;