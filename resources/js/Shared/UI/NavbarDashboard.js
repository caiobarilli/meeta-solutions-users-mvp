import React, { useState } from 'react';
import { InertiaLink, Link, usePage } from '@inertiajs/inertia-react';

export default () => {
  const { app } = usePage().props;

  const [colapseUserMenu, setColapseUserMenu] = useState(false);

  const menuToggle = () => {
    setColapseUserMenu(prevColapseUserMenu => !prevColapseUserMenu);
  };

  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <InertiaLink className="navbar-brand ps-3" href={route('home')}>
        {app.name}
      </InertiaLink>
      <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"></div>
      <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4 ">
        <li className="nav-item dropdown">
          <div
            onClick={menuToggle}
            className="nav-link dropdown-toggle"
            role="button"
          >
            <svg
              className="svg-inline--fa fa-user fa-w-14 fa-fw"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="user"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="15"
            >
              <path
                fill="currentColor"
                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
              ></path>
            </svg>
          </div>

          <ul
            className={`dropdown-menu dropdown-menu-end position-static ${
              colapseUserMenu && 'd-block position-absolute top-1 end-0'
            }`}
          >
            <li>
              <InertiaLink className="dropdown-item" href={route('home')}>
                Perfil
              </InertiaLink>
            </li>
            <li>
              <InertiaLink className="dropdown-item" href={route('home')}>
                Usuários
              </InertiaLink>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link
                className="dropdown-item"
                href={route('logout')}
                method="post"
                as="button"
                type="button"
              >
                Logout
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
