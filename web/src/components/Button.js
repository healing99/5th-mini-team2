import React from 'react';

/**
 * @param {props} param0
 * children: text
 * type: 버튼 유형. primary, secondary, success, danger, warning, info, light, dark, link
 * disabled: 클릭 가능 여부
 * size: 크기. lg, sm.
 */

const Button = ({ children, type = 'primary', disabled = false, size = '' }) => {
  return (
    <button disabled={disabled} className={`btn btn-${type} btn-${size}`}>
      {children}
    </button>
  );
};

export default Button;
