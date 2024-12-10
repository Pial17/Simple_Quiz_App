import React from 'react';

const QuestionList = ({question, options, handleOption, collectOption}) => {
    return (
        <div>
            <h2>{question}</h2>
            <ul>
                {options.map((option,i)=>{
                    return <li key={i} onClick={()=>handleOption(option)} className={collectOption===option?'selected':''} >{option}</li>
                })}
            </ul>
                
        </div>
    );
};

export default QuestionList;