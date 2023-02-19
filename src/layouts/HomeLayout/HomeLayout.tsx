import React, { PropsWithChildren } from 'react';
import Footer from '../../components/Footer';
import GenericContainer from '../../components/GenericContainer';
import Header from '../../components/Header';

const HomeLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <GenericContainer>
        <Header />
        {children}
        <Footer />
      </GenericContainer>
    </>
  );
};

export default HomeLayout;
