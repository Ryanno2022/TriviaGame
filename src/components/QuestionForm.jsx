import React from 'react';
import Button from './Button';
import ValidChecker from './ValidChecker';
import Card from './Card';


const QuestionForm = (props) => {
    return (
    <Card>
        <div>
            <div>
            <h1 id={props.prompt}></h1>
                </div>
                    <div>
                    <Button id={props.a_ans} />
                    <Button id={props.b_ans} />
                    <Button id={props.c_ans} />
                    <Button id={props.d_ans} />
                </div>
            <div>
            <ValidChecker />
            </div>
        </div>
    </Card>
    );
}

export default QuestionForm;