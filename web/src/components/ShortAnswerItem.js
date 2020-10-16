import React from 'react';

const ShortAnswerItem = () => {
  return (
    <div>
      <div className="answer-input">
        <div>
          수식입력창
          <br />
          (바로 수식 입력가능)
        </div>
      </div>
      <div className="answer-box" />

      <style jsx>
        {`
          .answer-input {
            height: 225px;
            background-color: #f2f2f2;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #707070;
            text-align: center;
          }

          .answer-input > div {
            cursor: pointer;
          }

          .answer-box {
            height: 45px;
            background-color: #f2f2f2;
            display: flex;
            margin-top: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default ShortAnswerItem;
