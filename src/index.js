import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // Import createRoot from "react-dom/client"

import App from './app';
import './index.css';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />); // Use createRoot instead of ReactDOM.render



