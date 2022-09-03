import React from 'react'
import { Container } from './styles'

function Header() {
    return (
        <>
            <Container>
                <h2 className='header__title'>{email}</h2>
                <div>
                    <span>
                        {totalExpenses}
                    </span>
                    <span>
                        BRL
                    </span>
                </div>
            </Container>
        </>
    )
}

export default Header
