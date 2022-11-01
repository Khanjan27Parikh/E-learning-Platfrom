import React from 'react';

function Card(props) {
    return (
        <>
            <div className='cards'>
                <div className='card'>
                    <img src={props.imgsrc} alt='img' className='card-img' />
                    <div className='card-info'>
                        <h3 className='card-title'>{props.cname}</h3>
                        <p className='card-desc'>{props.cdesc}</p>
                        <a href=''> <button className='card-btn'>view more</button> </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;