import { NuqsAdapter } from 'nuqs/adapters/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Layout from './components/layout/Layout'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NuqsAdapter>
      <Layout>
        <App />
      </Layout>
    </NuqsAdapter>
  </React.StrictMode>,
)
