import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyClassComponent } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyClassComponent />
  </React.StrictMode>
);
