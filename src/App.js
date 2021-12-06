import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Editor from './components/Editor';
import Viewer from './components/Viewer';
import './App.css';


function App() {
    const getInitialState = () => JSON.parse(localStorage.getItem('cards')) || [];
    const [cards, setCards] = useState(getInitialState);

    useEffect(() => {
        localStorage.setItem('cards', JSON.stringify(cards));
    }, [cards]);


    const addCard = (card) => {
        setCards([...cards, card]);
    };

    const removeCard = (index) => {
        const newCards = cards.filter((card, i) => i !== index);
        setCards(newCards);
    };

    return (
        <Routes>
            <Route
                path="/"
                element={<Editor
                    cards={cards}
                    addCard={addCard}
                    removeCard={removeCard}
                    setCards={setCards}
                />}
            />
            <Route
                path="/viewer"
                element={<Viewer
                    cards={cards}
                />}
            />
        </Routes>
    );

}

export default App;
