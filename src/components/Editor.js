import React, { useState } from 'react';
import '../App.css';

const Editor = function(props) {
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');

    const cards = props.cards;

    const handleChange = (event) => {
        if (event.target.name === 'front') {
            setFront(event.target.value);
        } else {
            setBack(event.target.value);
        }
    }

    const addCard = () => {
        props.addCard({ front, back });
        setFront('');
        setBack('');
    };

    const rows = cards.map((card, i) => (
        <tr key={i}>
            <td>{card.front}</td>
            <td>{card.back}</td>
            <td><button onClick={() => props.removeCard(i)}>Delete</button></td>
        </tr>
    ));

    return (
        <div className="container">
            <h1>Card Editor</h1>
            <table>
                <thead>
                    <tr>
                        <th>Front</th>
                        <th>Back</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            <div>
                <input onChange={handleChange}  name="front" value={front} placeholder="Front of card" />
                <input onChange={handleChange}  name="back" value={back} placeholder="Back of card" />
                <button onClick={addCard}>Add Card</button>
            </div>

            <hr />

            <button onClick={props.switchMode}>Go to Viewer</button>
        </div>
    );
}

export default Editor;
