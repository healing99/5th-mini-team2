import React, { useState } from 'react';
import ToggleButton from '@/components/ToggleButton';

function QuestionType() {
  const [radioGroup, setRadioGroup] = useState({ multipleChoice: true, narrative: false, shortAnswer: false });

  const handleRadio = (event) => {
    const newRadioGroup = { multipleChoice: false, narrative: false, shortAnswer: false };
    setRadioGroup({ ...newRadioGroup, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <ToggleButton name="multipleChoice" checked={radioGroup['multipleChoice']} onChange={handleRadio}>
        <img src="check_on.png" width="20" />
        객관식
      </ToggleButton>
      <ToggleButton name="narrative" checked={radioGroup['narrative']} onChange={handleRadio}>
        <img src="check_long.png" width="20" />
        서술형
      </ToggleButton>
      <ToggleButton name="shortAnswer" checked={radioGroup['shortAnswer']} onChange={handleRadio}>
        <img src="check_short.png" width="20" />
        단답형
      </ToggleButton>
    </div>
  );
}

export default QuestionType;
