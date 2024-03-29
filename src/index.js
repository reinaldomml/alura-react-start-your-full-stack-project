import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './routes/app'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Category from './routes/category'
import Estante from './routes/estante'
import Favorites from './routes/favorites'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/category' element={<Category />} />
                <Route path='/estante' element={<Estante />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/' element={<App />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
