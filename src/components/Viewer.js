import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Editor from './Editor';

const Viewer = function(props) {
    const cards = props.cards;
    const [current, setCurrent] = useState(0);
    const [frontSide, setFrontSide] = useState(true);;

    const showNext = () => {
        const next = (current + 1) % cards.length;
        setCurrent(next);
        setFrontSide(true);
    }

    const flipCard = () => {
        setFrontSide(!frontSide);
    };


    return (
        <div className="container">
            <h2>Card Viewer</h2>
            <div className="card" onClick={flipCard}>
                <div className="card-content">
                    {frontSide ? cards[current].front : cards[current].back}
                </div>
            </div>
            <button onClick={showNext}>Next card</button>
            <hr />
            <nav>
                <Link to="/" element={<Editor />}>Go to Editor</Link>
            </nav>
        </div>
    );
}

export default Viewer;
