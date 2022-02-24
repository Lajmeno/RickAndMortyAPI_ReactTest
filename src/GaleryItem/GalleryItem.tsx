import { Character } from "../model";

import './GalleryItem.css';

interface GalleryItemProps {
    character: Character;
}


export default function GalleryItem(props: GalleryItemProps){
    return (
        <div className="item">
            <img className="item-img" src={props.character.image} alt="character-image" />
            <div>{props.character.name}</div>
            <p>{props.character.origin}</p>
            <p>{props.character.species}</p>
        </div>
    )
}