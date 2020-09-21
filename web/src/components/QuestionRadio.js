import React, { useState } from 'react';

function QuestionRadio() {
  const [radioGroup, setRadioGroup] = useState({ multipleChoice: true, narrative: false, shortAnswer: false });

  const handleRadio = (event) => {
    let newRadioGroup = { multipleChoice: false, narrative: false, shortAnswer: false };
    setRadioGroup({ ...newRadioGroup, [event.target.name]: event.target.checked });
    console.log(radioGroup);
  };

  return (
    <div>
      <label>
        <input type="radio" name="multipleChoice" checked={radioGroup['multipleChoice']} onChange={handleRadio} />
        <span>
          <img src="check_on.png" width="20" />
          객관식
        </span>
      </label>
      <label>
        <input type="radio" name="narrative" checked={radioGroup['narrative']} onChange={handleRadio} />
        <span>
          <img src="check_long.png" width="20" />
          서술형
        </span>
      </label>
      <label>
        <input type="radio" name="shortAnswer" checked={radioGroup['shortAnswer']} onChange={handleRadio} />
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
