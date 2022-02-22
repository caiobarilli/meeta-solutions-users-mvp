import React from 'react';

export default ({
  label,
  name,
  className,
  children,
  errors = [],
  ...props
}) => {
  return (
    <div className={className}>
      <select
        id={name}
        name={name}
        {...props}
        className={`form-select ${errors.length ? 'error' : ''}`}
      >
        {children}
      </select>
      {errors && <div className="form-error">{errors}</div>}
      {label && <label htmlFor={name}>{label}:</label>}
    </div>
  );
};
