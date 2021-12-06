import React, { useState, useEffect } from 'react';
import Editor from './components/Editor';
import Viewer from './components/Viewer';
import './App.css';


function App() {
    const getInitialState = () => JSON.parse(localStorage.getItem('cards')) || [];
    const [cards, setCards] = useState(getInitialState);
    const [editor, setEditor] = useState(true);

    useEffect(() => {
        localStorage.setItem('cards', JSON.stringify(cards));
    }, [cards]);

    const switchMode = () => setEditor(!editor); 

    const addCard = (card) => {
        setCards([...cards, card]);
    };

    const removeCard = (index) => {
        const newCards = cards.filter((card, i) => i !== index);
        setCards(newCards);
    };


    if (editor) {
        return <Editor
            cards={cards}
            addCard={addCard}
            removeCard={removeCard}
            setCards={setCards}
            switchMode={switchMode}
            />;
    } else {
        return <Viewer
            cards={cards}
            switchMode={switchMode}
            />;
    }
}

export default App;
