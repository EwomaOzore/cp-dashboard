import React from 'react';
import { Layout } from 'antd';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Body from './components/Content';
import './App.css'

const App: React.FC = () => {
  return (
    <Layout hasSider>
      <Nav />
      <Layout className="site-layout" style={{ marginLeft: 70 }}>
        <Header />
        <Body />
        <Footer />
      </Layout>
    </Layout>
  );
};

export default App;