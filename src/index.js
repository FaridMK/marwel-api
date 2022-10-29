import React from 'react';
import ReactDOM from 'react-dom/client';
import MarwelServices from './components/services/API';

import { App } from 'components/App';
import './index.css';

// const marwelServices = new MarwelServices();
// marwelServices
//   .getAllMarwels()
//   .then(r => r.data.results.forEach(item => console.log(item.name)));
// marwelServices.getMarwelById(1011052).then(r => console.log(r));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
