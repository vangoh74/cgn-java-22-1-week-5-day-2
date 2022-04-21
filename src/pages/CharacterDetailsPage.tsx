import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import { Card } from "../model/Card";
import "./CharacterDetailsPage.css";

export default function CharacterDetailsPage() {
    const params = useParams();
    const id = params.id;
    const idAsNbr = parseInt(id as string);
    const [character, setCharacter] = useState<Card>();

    const fetchCharacter = () => {
        return fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network error")
            })
            .catch(console.error);
    }

    useEffect(() => {
        fetchCharacter()
            .then(char => setCharacter(char))
    }, [id])

    console.log(character);
    console.log(character);
    return (

        <div>
            "Das ist nur ein Test!"
            {character && <PostCard card = {character}/>}
        </div>
    )
}