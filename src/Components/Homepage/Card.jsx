import React from 'react';

function Card(props) {
    return (
        <>
            <div className='cards'>
                <div className='card'>
                    <img src={props.imgsrc} alt='img' className='card_img' />
                    <div className='card_info'>
                        <h3 className='card_title'>{props.cname}</h3>
                        <p className='card_desc'>{props.cdesc}</p>
                        <a href=''> <button className='card_btn'>view more</button> </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;