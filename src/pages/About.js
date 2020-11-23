import React from "react";

export default function About(){
    
    return(
        <>
            <section className='about-container'>
                <div className='about'>
                    <h1>About</h1>
                    <p>Hello! I'm Viviane Vilas Boas and I'm Front End Developer and I did this app using <br /><a href='https://www.themoviedb.org/'>"The Movie Data Base"</a> Rest API and React JS.</p>
                    <p>Did you like it? <br /> <a href='https://www.linkedin.com/in/vivianevilasboas/'>Click here</a> and hire-me!</p>

                    <div className='center-text'>   
                        <a href='https://www.themoviedb.org/'>
                            <img 
                                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" 
                                alt="The Movie Database (TMDb)" 
                                style={{ width: '200px' }}
                            />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}