import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RequestTracker from './week10/RequestTracker';
import ProcessQueue from './week10/processQueue';
import TrafficLight from './week10/TrafficLight.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <>
    {/* <RequestTracker /> */}
    {/* <ProcessQueue /> */}
    <TrafficLight />
  </>
)
