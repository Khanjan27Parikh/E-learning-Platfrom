import React from 'react';
import Card from './Card';
import CData from './CData';

function CardSection() {
    return (
        <div className='card-section'>
            <Card
                imgsrc={CData[0].imgsrc}
                cname={CData[0].cname}
                cdesc= {CData[0].cdesc}
            />
            <Card 
                imgsrc={CData[1].imgsrc}
                cname={CData[1].cname}
                cdesc= {CData[1].cdesc}
            />
            <Card 
                imgsrc={CData[2].imgsrc}
                cname={CData[2].cname}
                cdesc={CData[2].cdesc} 
            />
            <Card 
                imgsrc={CData[3].imgsrc}
                cname={CData[3].cname}
                cdesc= {CData[3].cdesc}
            />
        </div>
    );
}

export default CardSection;