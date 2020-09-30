import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ToggleButton = ({ children, checked = false, name, onChange = null }) => {
  return (
    <label className={classNames(checked && 'checked', 'toggle-label')}>
      <input type="radio" name={name} checked={checked} onChange={onChange} />
      <span>{children}</span>

      <style jsx global>
        {`
          input[type='radio'] {
            display: none;
          }
          input[type='radio'] + span {
            width: 130px;
            display: inline-block;
            background: none;
            text-align: center;
            cursor: pointer;
            padding: 10px;
            color: #707070;
            font-weight: 500;
          }
          .checked {
            background: #b0d5e5;
          }
          .toggle-label {
            border-radius: 27px;
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
