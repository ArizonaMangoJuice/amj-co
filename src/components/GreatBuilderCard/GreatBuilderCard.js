import React from 'react';

const GreatBuilderCard = ({ title, paragraph, button, image }) => {
    return (
        <article className='g-building-card'>
            <img className='g-building-card-img' src={image} alt='' />
            <section className='g-building-card-info'>
                <h3 className='g-building-card-title'>{title}</h3>
                <p className='g-building-card-paragraph'>{paragraph}</p>
                <button className='g-building-card-button'>{button}</button>
            </section>
        </article>
    );
}

export default GreatBuilderCard;