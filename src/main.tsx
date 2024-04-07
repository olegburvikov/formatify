import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './pages'
import './index.css'

const root = document.getElementById('root')!;

const StrictApp = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(root).render(StrictApp);
