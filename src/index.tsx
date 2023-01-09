import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import { ErrorBoundary } from "react-error-boundary";
import { Error } from './pages';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<Error />}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ErrorBoundary>    
  </React.StrictMode>
);
