import { useState } from 'react';
import './Seznam.scss';
import data from '../data';
import OneCard from './OneCard';

const Seznam = () => {
    const [text, setText] = useState('');

    return (
        <div className='seznam'>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Hledaný film' />
            <div className='film-container'>
                {data.map((data) => {
                    return <OneCard key={data.id} {...data} />;
                })}
            </div>
        </div>
    );
};

export default Seznam;
