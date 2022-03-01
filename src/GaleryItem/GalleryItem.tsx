import { Character } from "../model";

import './GalleryItem.css';

interface GalleryItemProps {
    character: Character;
}


export default function GalleryItem(props: GalleryItemProps){
    return (
        <div data-testid={"gallery-test-item"} className="item">
            <img data-testid={"gallery-test-item-img"} className="item-img" src={props.character.image} alt="character-image" />
            <div>{props.character.name}</div>
            <p>{props.character.species}</p>
            <div>{props.character.origin.name}</div>
        </div>
    )
}