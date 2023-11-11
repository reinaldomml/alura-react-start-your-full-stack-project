import logo from './logo.svg'
import './App.css'
import React from 'react'

function App() {
    return (
        <div className='hero min-h-screen'>
            <div className='hero-content text-center'>
                <div className='max-w-md'>
                    <img src={logo} alt='logo' />
                    <h1 className='text-5xl font-bold'>React App</h1>
                    <p className='py-6'>
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                        exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className='btn btn-primary'>Começar</button>
                </div>
            </div>
        </div>
    )
}

export default App
