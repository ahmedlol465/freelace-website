import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

const clientId = "100896657605-pb71jug95rv6ue0ild60li7arelhala3.apps.googleusercontent.com"
const clientIdLinked = "77lxsqtgmxi16p"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>

    <App/>
    </GoogleOAuthProvider>
  </StrictMode>,
)
