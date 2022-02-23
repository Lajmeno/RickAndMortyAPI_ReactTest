import { Character } from "./model";

interface GalleryItemProps {
    character: Character;
}


export default function GalleryItem(props: GalleryItemProps){
    return (
        <div>
            <img src={props.character.image} alt="character-image" />
            <div>{props.character.name}</div>
            <p>{props.character.origin}</p>
            <p>{props.character.species}</p>
        </div>
    )
}