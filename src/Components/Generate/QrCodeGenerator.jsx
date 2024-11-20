import { useState } from 'react'; // хранилище
import { QRCodeSVG } from 'qrcode.react';
import s from'./QrCodeGenerator.module.css';
import { GENERATE_DATA } from '../../constants'

export const QrCodeGenerator = () => {

    const [value, setValue] = useState('');
    const [resultQR, setResultQR] = useState('');

    const onClickHendler = () => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
        localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));


        setResultQR(value);
        setValue('');
    };

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResultQR('');
    };

    console.log('result QR: ', resultQR);

    return(
        <div className={s.container}>
            <input type="text" value={value} onChange={onChangeHandler} placeholder='Введите текст ...' className={s.input}/>
            <button type="button" onClick={onClickHendler} className={s.btn}>Создать QR</button>
            {resultQR !== '' &&(
               <QRCodeSVG value={resultQR} size={250}/>
            )}
        </div>
    );
};