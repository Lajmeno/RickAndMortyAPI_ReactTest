import { Link } from "react-router-dom";
import { Character } from "../model";

import './GalleryItem.css';

interface GalleryItemProps {
    character: Character;
}


export default function GalleryItem(props: GalleryItemProps){
    return (
        <div data-testid="gallery-test-item" className="card">
            <Link to={`${props.character.id}`} ><img data-testid="gallery-test-item-img" className="card-image" src={props.character.image} alt="character-image" /> </Link>
            <div className="card-content">
                <div data-testid="gallery-item-name" className="title is-4" >{props.character.name}</div>
                <div className="subtitle is-6" >{props.character.species}</div>
                <div className="subtitle is-6">{props.character.origin.name}</div>
            </div>
            
        </div>
    )
}