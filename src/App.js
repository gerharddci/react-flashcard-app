import React, { useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import Viewer from './components/Viewer';

// const initialCards = [
//     {
//         front: 'go to beginning of line',
//         back: '0'
//     },
//     {
//         front: 'delete line under cursor',
//         back: 'dd'
//     }
// ];

function App() {
    const [editor, setEditor] = useState(true);
    const [cards, setCards] = useState([]);

    const switchMode = () => setEditor(!editor); 

    const addCard = (card) => {
        setCards([...cards, card]);
    };

    const removeCard = (index) => {
        const newCards = cards.filter((card, i) => i !== index);
        setCards(newCards);
    };

    const updateCard = (index, front, back) => {
        const newCards = [...cards];
        newCards[index].front = front;
        newCards[index].back = back;
        setCards(newCards);
    }


    if (editor) {
        return <Editor cards={cards} addCard={addCard} removeCard={removeCard} updateCard={updateCard} switchMode={switchMode}/>;
    } else {
        return <Viewer cards={cards} switchMode={switchMode}/>;
    }
}

export default App;
