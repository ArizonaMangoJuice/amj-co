import React from 'react';

const HigherImageContainer = props => {
    return (
        <section className='higher-image-container'>
            <article className='higher-image-info'>
                <h1 className='higher-image-info-title main-title'>ALL WE DO IS WIN, WIN, WIN … AWARDS FOR OUR INCREDIBLE WORK!</h1>
                <p className='higher-image-info-p'>Simply put, our projects win awards. We work hard to give our clients the best ultimate value for their investment, overcome any challenges we encounter, and make each project a success. Pictured right is our Colorado State University Biology Building project, winner of the 2018 ENR Mountain States Best Project Award in the Higher Education/ Research Category and winner of the AGC Colorado Award of Merit.</p>
                <p className='higher-image-info-p'>What makes this possible? Our outstanding people.</p>
                {/* <nav className='higher-image-icons'>
                    <a href='#'>
                        <img src='' alt />
                        <p>test</p>
                    </a>
                </nav> */}
            </article>
            <img className='higher-image-img' src='https://www.haselden.com/wp-content/uploads/2021/06/CSU-AZ_0369.webp' alt='' />
        </section>
    )
}

export default HigherImageContainer;
// this is for the background color maybe just switch to purple
// background-image: linear-gradient(
//     180deg
//     ,#ffffff 65%,#a71930 65%)!important;