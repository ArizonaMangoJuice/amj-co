import React from 'react';
import GreatBuilderCard from '../GreatBuilderCard';
import data from '../../static/data';

const GreatBuilder = props => {
    const { greatBuildersCards } = data;

    const cards = greatBuildersCards.map(({ title, paragraph, button, image }) => (
        <GreatBuilderCard
            key={title + image}
            title={title}
            paragraph={paragraph}
            button={button}
            image={image}
        />
    ));

    return (
        <section className='great-builder-container'>
            <h1 className='main-title'>WE BUILD GREAT THINGS</h1>
            <section className='g-building-cards'>
                {cards}
            </section>
        </section>
    )
}

export default GreatBuilder;