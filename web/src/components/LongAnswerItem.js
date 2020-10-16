import React, { useState } from 'react';

const LongAnswerItem = () => {
  const [longAnswer, setLongAnswer] = useState('');
  const handleValueChange = (e) => {
    setLongAnswer(e.target.value);
  };

  return (
    <div>
      <textarea
        cols="30"
        rows="8"
        value={longAnswer}
        className="answer-area"
        placeholder="장문형 서술답 입력"
        onChange={handleValueChange}
      />

      <style jsx>
        {`
          .answer-area {
            border: none;
            outline: none;
            resize: none;
            background-attachment: local;
            background-image: linear-gradient(to right, white 10px, transparent 10px),
              linear-gradient(to left, white 10px, transparent 10px),
              repeating-linear-gradient(white, white 30px, #ccc 30px, #ccc 31px, white 31px);
            line-height: 31px;
            padding: 4.5px 10px;
          }
        `}
      </style>
    </div>
  );
};

export default LongAnswerItem;
