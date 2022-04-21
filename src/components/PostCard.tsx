import { useNavigate } from "react-router-dom";
import {Card} from "../model/Card";
import './PostCard.css';

type PostCardProps = {
    card : Card;
}
export default function PostCard({card} : PostCardProps){

    const navigate = useNavigate();

    const onCardClick = () => {
        console.log(card.name)
        navigate(`/character/${card.id}`)
    }

    return <div className={'post-card'} onClick={onCardClick}>
        <h2>{card.name}</h2>
        <img className={'card-Image'} src={card.image} />
        <p><h3> {card.species} </h3></p>
        <p>{card.origin.name}</p>
        <p>{card.location.name}</p>
    </div>
}