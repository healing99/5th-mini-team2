import React, { forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = forwardRef((props, ref) => {
  const {
    children,
    type = 'button',
    color = 'primary',
    disabled = false,
    size = 'md',
    onClick = null,
    roundType = 'rounded-0',
  } = props;
  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames('btn', `btn-${color}`, size !== 'md' && `btn-${size}`, roundType)}>
      {children}
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'sm', 'md']),
  onClick: PropTypes.func,
  roundType: PropTypes.oneOf(['rounded', 'rounded-top', 'rounded-circle', 'rounded-pill', 'rounded-0']),
  type: PropTypes.string,
};
export default Button;
