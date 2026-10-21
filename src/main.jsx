import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {ErrorBoundary} from "react-error-boundary";
import './index.css'
import App from './App.jsx'
import ErrorFallback from "./ui/ErrorFallback.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ErrorBoundary fallback={<ErrorFallback/>} FallbackComponent={ErrorFallback}>
            <App/>
        </ErrorBoundary>
    </StrictMode>,
)
