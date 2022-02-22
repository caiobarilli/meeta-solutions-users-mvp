import React, { useState, useRef } from 'react';
import { filesize } from '@/utils';

const Button = ({ text, onClick }) => (
  <button type="button" className="btn btn-purple" onClick={onClick}>
    {text}
  </button>
);

export default ({ className, name, label, accept, errors = [], onChange }) => {
  const fileInput = useRef();
  const [file, setFile] = useState(null);
  const [imgSrc, setImgSrc] = useState('');

  function browse() {
    fileInput.current.click();
  }

  function remove() {
    setFile(null);
    onChange(null);
    fileInput.current.value = null;
  }

  function handleFileChange(e) {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = function () {
      setImgSrc(reader.result);
    };

    reader.readAsDataURL(file);
    setFile(file);
    onChange(file);
  }

  return (
    <div className={className}>
      {label && (
        <label className="form-label" htmlFor={name}>
          {label}:
        </label>
      )}
      <div className={`form-input p-0 ${errors.length && 'error'}`}>
        <input
          id={name}
          ref={fileInput}
          accept={accept}
          type="file"
          className="d-none"
          onChange={handleFileChange}
        />
        {!file && <Button text="Procurar Imagem" onClick={browse} />}
        {file && (
          <div className="d-flex flex-column ">
            <img src={imgSrc} className="mt-1" width="80" height="80" />
            {file.name}
            <span className="mb-2">({filesize(file.size)})</span>
            <Button text="Remover" onClick={remove} />
          </div>
        )}
      </div>
      {errors.length > 0 && <div className="form-error">{errors}</div>}
    </div>
  );
};
