import React from 'react'
import { Fragment } from 'react'

function App() {
  
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/serviceWorker.js')
      .then(registration => {
        console.log('ServiceWorker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('ServiceWorker registration failed:', error);
      });
  });
}

  return (
    <Fragment>
      <h1>Amazon Clone</h1>
    </Fragment>
  )
}

export default App