import React, { useState } from 'react';
import './QuestionRadio.css';

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

  const showImg = (event) => {
    var reader = new FileReader();
    reader.onload = function (event) {
      var img = document.createElement('img');
      img.setAttribute('src', event.target.result);
      document.querySelector('div#img_container').appendChild(img);
    };
    reader.readAsDataURL(event.target.files[0]);
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

      <br />
      <br />
      <h2>문제1</h2>
      <input type="file" accept="image/*" className="input-file" onChange={showImg} />
      <div id="img_container" className="img-photo"></div>
    </div>
  );
}

export default QuestionRadio;
