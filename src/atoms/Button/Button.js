import React from 'react';

export default ({ children, ...props }) => (
  <button className="button" type="button" {...props}>
    <div className="button-inner">{children}</div>
  </button>
);
