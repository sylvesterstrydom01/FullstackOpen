import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

let counter = 0;
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App counter={counter} />
  </StrictMode>,
)
