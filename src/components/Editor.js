import React, { useState } from 'react';
import '../App.css';

const Editor = function(props) {
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');
    const [editing, setEditing] = useState(false);
    const [current, setCurrent] = useState(0);

    const cards = props.cards;
    const setCards = props.setCards;

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

    const editCard = (ind) => {
        setEditing(true);
        setCurrent(ind);
    };

    const updateCard = (index, front, back) => {
        const newCards = [...cards];
        newCards[index].front = front || cards[index].front;
        newCards[index].back = back || cards[index].back;
        setCards(newCards);
        setEditing(false);
        setFront('');
        setBack('');
    }

    const rows = cards.map((card, i) => (
        <tr key={i}>
            <td>{card.front}</td>
            <td>{card.back}</td>
            <td><button onClick={() => props.removeCard(i)}>Delete</button></td>
            <td><button onClick={() => editCard(i)}>Edit</button></td>
        </tr>
    ));

    let inputElem;
    if (editing) {
        inputElem = (
            <div>
                <input onChange={handleChange}  name="front" value={front} placeholder={cards[current].front} />
                <input onChange={handleChange}  name="back" value={back} placeholder={cards[current].back} />
                <button onClick={() => updateCard(current, front, back)}>Update Card</button>;
            </div>
        );
    } else {
        inputElem = (
            <div>
                <input onChange={handleChange}  name="front" value={front} placeholder="Front of card" />
                <input onChange={handleChange}  name="back" value={back} placeholder="Back of card" />
                <button onClick={addCard}>Add Card</button>;
            </div>
        );
    }

    return (
        <div className="container">
            <h1>Card Editor</h1>
            <table>
                <thead>
                    <tr>
                        <th>Front</th>
                        <th>Back</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>

            {inputElem}


            <hr />

            <button onClick={props.switchMode}>Go to Viewer</button>
        </div>
    );
}

export default Editor;
