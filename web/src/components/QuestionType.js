import React, { useState } from 'react';
import ToggleButton from '@/components/ToggleButton';
import RadioIcon from '@/assets/images/radio.png';
import ShortAnswerIcon from '@/assets/images/shortAnswer.png';
import LongAnswerIcon from '@/assets/images/longAnswer.png';

function QuestionType() {
  const [radioGroup, setRadioGroup] = useState({ multipleChoice: true, narrative: false, shortAnswer: false });

  const handleRadio = (event) => {
    const newRadioGroup = { multipleChoice: false, narrative: false, shortAnswer: false };
    setRadioGroup({ ...newRadioGroup, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <ToggleButton name="multipleChoice" checked={radioGroup['multipleChoice']} onChange={handleRadio}>
        <img className="toggle-img" src={RadioIcon} width="20" />
        객관식
      </ToggleButton>
      <ToggleButton name="narrative" checked={radioGroup['narrative']} onChange={handleRadio}>
        <img className="toggle-img" src={LongAnswerIcon} width="20" />
        서술형
      </ToggleButton>
      <ToggleButton name="shortAnswer" checked={radioGroup['shortAnswer']} onChange={handleRadio}>
        <img className="toggle-img" src={ShortAnswerIcon} width="20" />
        단답형
      </ToggleButton>

      <style jsx>{`
        .toggle-img {
          margin-right: 8px;
        }
      `}</style>
    </div>
  );
}

export default QuestionType;
