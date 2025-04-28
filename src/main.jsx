import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import "swiper/css";
import "swiper/swiper-bundle.css";
import 'react-lazy-load-image-component/src/effects/blur.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
