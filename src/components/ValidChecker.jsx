import React, { useState } from "react";
import QuestionsList from './QuestionsList';
const ValidChecker = (props) => {  
    
    const [isCorrectAnswer, setIsCorrectAnswer] = useState('');

    const answerHandler = (props) => {
        if (props.userInputAnswer === correctAns) {
            setIsCorrectAnswer(true);
        } else {
            setIsCorrectAnswer(false);
        }
    }
    
    if(useState != '') {
        isCorrectAnswer = setIsCorrectAnswer();
        if (isCorrectAnswer = false) {
            return (
                <h1> Wrong answer! </h1>
            );
        } else {
            return (
                <h1> Right answer! </h1>
            )
        }
    }

}

export default ValidChecker;