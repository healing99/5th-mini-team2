import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ children, type = 'primary', disabled = false, size = 'md', onClick = null }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames('btn', `btn-${type}`, size !== 'md' && `btn-${size}`)}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'sm', 'md']),
  onClick: PropTypes.func,
};
export default Button;
