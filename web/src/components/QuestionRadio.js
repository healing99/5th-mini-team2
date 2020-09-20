import React, { useState } from 'react';

function QuestionRadio() {
  const [state, setState] = useState({
    radioGroup: {
      multipleChoice: false,
      narrative: true,
      shortAnswer: false,
    },
  });

  const handleRadio = (event) => {
    let obj = {};
    obj[event.target.value] = event.target.checked; // true
    setState({ radioGroup: obj });
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="radioGroup"
          value="multipleChoice"
          checked={state.radioGroup['multipleChoice']}
          onChange={handleRadio}
        />
        <span>
          <img src="check_on.png" width="20" />
          객관식
        </span>
      </label>
      <label>
        <input
          type="radio"
          name="radioGroup"
          value="narrative"
          checked={state.radioGroup['narrative']}
          onChange={handleRadio}
        />
        <span>
          <img src="check_long.png" width="20" />
          서술형
        </span>
      </label>
      <label>
        <input
          type="radio"
          name="radioGroup"
          value="shortAnswer"
          checked={state.radioGroup['shortAnswer']}
          onChange={handleRadio}
        />
        <span>
          <img src="check_short.png" width="20" />
          단답형
        </span>
      </label>

      <style jsx>
        {`
          input[type='radio'] {
            display: none;
          }

          input[type='radio'] + span {
            width: 150px;
            height: 53px;
            border-radius: 27px;

            display: inline-block;
            background: none;
            text-align: center;
            line-height: 50px;
            font-weight: 500;
            cursor: pointer;
          }

          input[type='radio']:checked + span {
            background: #f2f2f2;
          }
        `}
      </style>
    </div>
  );
}

export default QuestionRadio;
