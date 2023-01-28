import React from 'react';
import './style.css';
import BasicTable from './components/index';
export default function App() {
  return (
    <div>
      <BasicTable title="Day Stock Prediction" />
      <BasicTable title="Week Stock Prediction" />
      <BasicTable title="Quarter Stock Prediction" />
    </div>
  );
}
