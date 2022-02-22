import React from 'react';

export default ({ label, name, className, errors = [], ...props }) => {
  return (
    <div className={className}>
      <input
        id={name}
        name={name}
        {...props}
        className={`form-control ${errors.length ? 'error' : ''}`}
      />
      {errors && <div className="form-error">{errors}</div>}
      {label && <label htmlFor={name}>{label}:</label>}
    </div>
  );
};
