import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

export default () => {
  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">SITE</div>

            <InertiaLink className="nav-link" href={route('home')}>
              Home
            </InertiaLink>

            <div className="sb-sidenav-menu-heading">DASHBOARD</div>

            <InertiaLink className="nav-link" href={route('dashboard')}>
              Home
            </InertiaLink>

            <InertiaLink className="nav-link" href={route('dashboard')}>
              Usuários
            </InertiaLink>
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          Start Bootstrap
        </div>
      </nav>
    </div>
  );
};
