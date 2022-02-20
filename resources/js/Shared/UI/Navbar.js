import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';

export default () => {
  const { app } = usePage().props;

  return (
    <nav className="navbar navbar-expand-lg bg_nav" id="mainNav">
      <div className="container px-4">
        <InertiaLink
          className="navbar-brand text-white text-uppercase"
          href={route('home')}
        >
          {app.name}
        </InertiaLink>
      </div>
    </nav>
  );
};
