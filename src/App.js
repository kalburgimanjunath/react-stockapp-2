import React from 'react';
import './style.css';
import { BasicTable, Header, Footer } from './components/index';
export default function App() {
  return (
    <div>
      <Header />
      <BasicTable title="Day Stock Prediction" />
      <BasicTable title="Week Stock Prediction" />
      <BasicTable title="Quarter Stock Prediction" />
      <Footer />
    </div>
  );
}
