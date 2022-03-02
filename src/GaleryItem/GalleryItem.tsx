import { Link } from "react-router-dom";
import { Character } from "../model";

import './GalleryItem.css';

interface GalleryItemProps {
    character: Character;
}


export default function GalleryItem(props: GalleryItemProps){
    return (
        <div data-testid="gallery-test-item" className="item">
            <Link to={`${props.character.id}`} ><img data-testid="gallery-test-item-img" className="item-img" src={props.character.image} alt="character-image" /> </Link>
            <div data-testid="gallery-item-name" >{props.character.name}</div>
            <p>{props.character.species}</p>
            <div>{props.character.origin.name}</div>
        </div>
    )
}