import React, { useState } from 'react';
import { InertiaLink, Link, usePage } from '@inertiajs/inertia-react';
import Icon from '@/Shared/UI/Icon';

export default () => {
  const { app, auth } = usePage().props;

  const [colapseUserMenu, setColapseUserMenu] = useState(false);

  const menuToggle = () => {
    setColapseUserMenu(prevColapseUserMenu => !prevColapseUserMenu);
  };

  const show_component = auth.user.role === 'owner';

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
            <Icon
              name="home"
              className="svg-inline--fa fa-user fa-w-14 fa-fw"
            />
          </div>

          <ul
            className={`dropdown-menu dropdown-menu-end position-static ${
              colapseUserMenu && 'd-block position-absolute top-1 end-0'
            }`}
          >
            <li>
              <InertiaLink
                className="dropdown-item"
                href={route('users.edit', auth.user.id)}
              >
                Perfil
              </InertiaLink>
            </li>
            {show_component && (
              <li>
                <InertiaLink className="dropdown-item" href={route('users')}>
                  Usuários
                </InertiaLink>
              </li>
            )}
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
