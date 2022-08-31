import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from '@/assets/styles/GlobalStyle'
import App from '@/pages/App'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Nunito'],
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
