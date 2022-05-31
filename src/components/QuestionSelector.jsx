import { useState } from "react";

const QuestionSelector = (props) => {
    
    const [questionChosen, setQuestionChosen] = useState('');
    const [correctAns, setCorrectAns] = useState('');


    
    const randomiser = (DUMMY_QUESTIONS) => {
        let numQuestions = DUMMY_QUESTIONS.length;
        setQuestionChosen = Math.floor(math.random() * numQuestions);
        questionChosen = setQuestionChosen;
        return questionChosen;
    }
    return (
        console.log('Question id ' + questionChosen + ' was chosen!') 

    );




}

export default QuestionSelector;