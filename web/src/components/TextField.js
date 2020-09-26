import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TextField = forwardRef((props, ref) => {
  const { label = '', onChange = null, value = '', name = '', pattern } = props;
  return (
    <div className="textfield-root">
      <label className="col-form-label">{label}</label>
      <input
        pattern={pattern}
        value={value}
        name={name}
        onChange={(e) => {
          if (pattern && !pattern.test(e.target.value)) return;
          onChange(e);
        }}
        ref={ref}
        type="text"
        className="form-control"
      />
      <style jsx>{`
        .textfield-root {
          width: 100%;
          display: flex;
          justify-content: space-evenly;
        }
        .textfield-root * {
          margin: 0px 8px;
        }
        .col-form-label {
          white-space: noWrap;
        }
      `}</style>
    </div>
  );
});

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number']),
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  pattern: PropTypes.object,
};

export default TextField;
