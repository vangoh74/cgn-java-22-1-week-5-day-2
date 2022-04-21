import {ChangeEvent, useEffect, useState } from "react";
import RmaOverview from "../components/RmaOverview";
import { Card } from "../model/Card";
import { fetchCharacters } from "../services/RickAndMortyApiService";
import "./GalleryPage.css"

export default function GalleryPage() {
    const [characters, setCharacters] = useState<Card[]>([]);
    const [text, setText] = useState<string>("");
    const [inputText, setInputText] = useState<string>("");

    useEffect(() => {
        geCharactersFromApi()
    }, [])

    const geCharactersFromApi = () => {
        fetchCharacters('https://rickandmortyapi.com/api/character')
            .then(response => {
                setCharacters(response.results)
            })
            .catch(error => console.log(error));
    }


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