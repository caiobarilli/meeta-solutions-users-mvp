import React from 'react';

export default ({ onRestore, children }) => {
  return (
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-body">
        {children}
        <div class="mt-2 pt-2 border-top">
          <button
            type="button"
            class="btn btn-primary btn-sm"
            onClick={onRestore}
          >
            Recuperar
          </button>
        </div>
      </div>
    </div>
  );
};
