import {ChangeEvent, useEffect, useState } from "react";
import RmaOverview from "../components/RmaOverview";
import { Card } from "../model/Card";
import "./GalleryPage.css"

export default function GalleryPage() {
    const [characters, setCharacters] = useState<Card[]>([]);
    const [text, setText] = useState<string>("");
    const [inputText, setInputText] = useState<string>("");

    const fetchCharacters = () => {
        return fetch('https://rickandmortyapi.com/api/character')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network error")
            })
            .catch(console.error);
    }

    useEffect(() => {
        fetchCharacters()
            .then(body => setCharacters(body.results))
    }, [])

    const onTextChange = (event : ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const filteredCharacters = () => {
        return characters.filter(character => character.name.includes(inputText));
    };

    const onButtonClick = () => {
        setInputText(text)
    }

    return (
        <div className="App">
            <input onChange={onTextChange} />
            <button onClick={onButtonClick}>Filter cards</button>
            {
                filteredCharacters().length
                    ? <RmaOverview cards={filteredCharacters()}/>
                    :
                    <div className={"error-msg"}>
                        Name Does not exists!
                        <RmaOverview cards={characters}/>
                    </div>
            }
        </div>
    );
}