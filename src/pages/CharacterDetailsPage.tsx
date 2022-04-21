import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import useCharacter from "../hooks/useCharacter";
import { Card } from "../model/Card";
import "./CharacterDetailsPage.css";

export default function CharacterDetailsPage() {
    const params = useParams();
    const id = params.id;
    const idAsNbr = parseInt(id as string);
    const character = useCharacter(id);

    return (
        <div>
            "Das ist nur ein Test!"
            {character && <PostCard card = {character}/>}
        </div>
    )
}