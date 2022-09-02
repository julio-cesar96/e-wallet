import React, { useState } from 'react'

import { Container } from './styles';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmitLoginForm(event) { 
        event.preventDefault();
    }
    return (
        <>
            <Container>
                <section className='login__container'>
                    <h1 className='login__title'>Login</h1>
                    <form className='login__form' onSubmit={handleSubmitLoginForm}>
                        <input
                            className='login__input' 
                            type='text'
                            placeholder='digite seu email'
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                        <span className='login__input-border'></span>
                        <input
                            className='login__input' 
                            type='text'
                            placeholder='digite sua senha'
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />
                        <button type='submit'>
                            Entrar
                        </button>
                    </form>
                </section>
            </Container>
        </>
    )
}

export default Login
