import React from 'react';
import Helmet from 'react-helmet';
import Header from '@/Shared/UI/Header';
import Footer from '@/Shared/UI/Footer';

export default function LayoutSite({ title, children }) {
  return (
    <>
      <Helmet titleTemplate="%s | Meeta Solutions" title={title} />
      <Header />
      {children}
      <Footer />
    </>
  );
}
