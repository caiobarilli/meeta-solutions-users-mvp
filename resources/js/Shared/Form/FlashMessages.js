import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/inertia-react';

export default () => {
  const [visible, setVisible] = useState(false);
  const { flash, errors } = usePage().props;
  const numOfErrors = Object.keys(errors).length;

  useEffect(() => {
    setVisible(true);
  }, [flash, errors]);

  return (
    <div>
      {flash.success && visible && (
        <div
          class="toast align-items-center bg-success text-white  p-2"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="d-flex">
            <div class="toast-body">{flash.success}</div>
            <button
              type="button"
              class="btn-close me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
              onClick={() => setVisible(false)}
            ></button>
          </div>
        </div>
      )}
      {(flash.error || numOfErrors > 0) && visible && (
        <div
          class="toast align-items-center bg-danger text-white p-2"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="d-flex">
            <div class="toast-body">{flash.error && flash.error}</div>
            {numOfErrors === 1 && 'Há um erro no formulário'}
            {numOfErrors > 1 && `Há  ${numOfErrors} erros no formulário.`}
            <button
              type="button"
              class="btn-close me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
              onClick={() => setVisible(false)}
            ></button>
          </div>
        </div>
      )}
    </div>
  );
};
