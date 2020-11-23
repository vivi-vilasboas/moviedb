import React from 'react';
import Container from "./Container";

export default function Footer() {
    const flexFooter = { 
        display: 'flex ',
        justifyContent: 'space-between',
    }

    return(
        <>
            <footer>
                <Container style={ flexFooter }>
                    <div>
                        <a className='link-vivi' href='http://vivivilasboas.com'>2020 © Viviane Vilas Bôas</a>
                    </div>

                    <div className='footer-tmdb-credit'>
                        <span>Using API by</span>
                        <a href='https://www.themoviedb.org/'>
                            <img 
                                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" 
                                alt="The Movie Database (TMDb)" 
                                width="154" 
                                height="20" 
                            />
                        </a>
                    </div>
                </Container>
            </footer>
        </>
    )
}