import React from 'react';
import PropTypes from 'prop-types';

const ToggleButton = ({ children, checked = false, name, onChange = null }) => {
  return (
    <label>
      <input type="radio" name={name} checked={checked} onChange={onChange} />
      <span>{children}</span>

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
    </label>
  );
};

ToggleButton.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default ToggleButton;
