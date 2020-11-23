import React from "react";

export default function Container(props){

    return(
        <>
            <section style={ props.style } className='central-container'>
                { props.children }
            </section>
        </>
    )
}