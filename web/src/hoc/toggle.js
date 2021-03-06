import React from 'react';

const toggle = (WrappedComponent) => (props) => (props.show ? <WrappedComponent {...props} /> : false);
export default toggle;
