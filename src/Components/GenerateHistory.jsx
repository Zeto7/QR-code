import { GENERATE_DATA } from '../constants'
import { QRCodeSVG } from 'qrcode.react';
import s from'./GenerateHistory.module.css';

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    return (

        <div className={s.container}>
        {data.map((text) => ( 
            <p key={text}>
                {text}
                <QRCodeSVG value={text} size={120}/>
            </p>
        ))}
    </div>
    );
};