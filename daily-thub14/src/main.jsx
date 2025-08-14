import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import MyComponent from './MyComponent.jsx';
import FunctionComponent from './FunctionComponent.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <MyComponent/>
    <FunctionComponent/>
  </StrictMode>,
)
