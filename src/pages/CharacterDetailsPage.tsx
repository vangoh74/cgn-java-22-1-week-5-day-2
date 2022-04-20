import { useParams } from "react-router-dom";

export default function CharacterDetailsPage() {
    const params = useParams();
    const id = params.id;

    return (
        <>Character {id}</>
    )
}