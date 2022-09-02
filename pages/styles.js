import styled from "styled-components";

export const Container = styled.main`
    height: 100vh;
    background-color: #2589F5;
    display: flex;
    justify-content: center;
    align-items: center;

    .login__container { 
        min-height: 400px;
        width: 300px;
        background-color: #ffffff;
        padding: 32px;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;  
    }

    .login__title {
        margin-bottom: 32px;
        color: #303030;
    }

    .login__form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .login__input {
        height: 48px;
        width: 100%;
        padding-left: 8px;
        border: unset;
        outline: none;
    }

    .login__input-border {
        height: 1px;
        width: 100%;
        margin-bottom: 16px;
        background-color: #cfcfcf;
        transition: .3s ease-in;
    }

    .login__input-border::after {
        content: '';
        display: block;
        height: 1px;
        width: 0;
        margin-bottom: 16px;
        background-color: #2589F5;
        transition: .3s ease-in-out;
    }

    button[type='submit'] { 
        height: 48px;
        width: 100%;
        outline: none;
        background-color: #2589F5;
        margin-bottom: 32px;
        color: #ffffff;
        font-size: 16px;
        font-weight: bold;
        border: unset;
        border-radius: 4px;
        cursor: pointer;
        transition: .5s ease-in-out;
    }

    button[type='submit']:hover {
        background-color: #195fab; 
    }
`