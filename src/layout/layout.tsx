import React from 'react'
import Head from './head/head';
import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';

interface ILayoutProps {

}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Head />
      <Header/>
        <Main>
          { children }
        </Main>
      <Footer/>
    </>
  )
}

export default Layout