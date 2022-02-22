import React from 'react';
import Helmet from 'react-helmet';
import NavbarDashboard from '@/Shared/UI/NavbarDashboard';
import SideNavbarDashboard from '@/Shared/UI/SideNavbarDashboard';
import FlashMessages from '@/Shared/Form/FlashMessages';
import FooterDashboard from '@/Shared/UI/FooterDashboard';

export default function LayoutDashboard({ title, children }) {
  return (
    <>
      <Helmet titleTemplate="%s | Meeta Solutions" title={title} />
      <div>
        <NavbarDashboard />

        <div id="layoutSidenav">
          <SideNavbarDashboard />

          <div id="layoutSidenav_content">
            <FlashMessages />
            {children}
            <FooterDashboard />
          </div>
        </div>
      </div>
    </>
  );
}
