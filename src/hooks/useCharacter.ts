import {useEffect, useState } from "react";
import { Card } from "../model/Card";
import { fetchCharacters } from "../services/RickAndMortyApiService";

export default function useCharacter(id : string | undefined) {
    const [character, setCharacter] = useState<Card>();

    useEffect(() => {
        fetchCharacters(`https://rickandmortyapi.com/api/character/${id}`)
            .then(char => setCharacter(char))
    }, [id])

    return character;
}