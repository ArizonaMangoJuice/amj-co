import React from 'react';

const History = props => {
    return (
        <>
        <section className='history'>
            <section className='history-image'>
                <img alt='remodeling' className='image-1 history-image-block' src='https://images.unsplash.com/photo-1611256498632-937c79823ec3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80' />
                <img alt='remodeling' className='image-2 history-image-block' src='https://images.unsplash.com/photo-1505855796860-aa05646cbf1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80'/>
            </section>
            <section className='history-text'>
                <h1 className='history-h1'>We Got This</h1>
                <p className='history-p'>Laboris in non nostrud pariatur. Deserunt pariatur quis exercitation cillum duis. Ad non in voluptate consectetur dolor et voluptate aliqua irure. Ut aliqua qui laboris proident do cupidatat cupidatat mollit dolor et non nulla quis esse.</p>
                <section className='history-cta'>
                    <button className='history-button'>Make An Appointment!</button>
                </section>
            </section>
        </section>
        <section className='gallery-title-container'>
            <h1 className='gallery-title'>JUST SHOWIN’ OFF … OUR WORK, THAT IS!</h1>
        </section>
        </>
    )
}

export default History;