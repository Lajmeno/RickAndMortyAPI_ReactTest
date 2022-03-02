import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GalleryItem from "./GaleryItem/GalleryItem";
import { Character } from "./model";


export default function CharacterDetail() {

    const param = useParams();

    const [character, setCharacter] = useState({} as Character)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${param.id}`)
        .then(response => {
            
            if(response.status === 200){
                return response.json();
            }
            throw new Error("No Characters here");
        
        })
        .then(character => setCharacter(character))
        .catch((e : Error) => setErrorMessage(e.message));
    }, []);

    return(
        <div>
        {character.id &&
        <div>
            
            <div>these are the details of {character.name} of id: {param.id}</div>
            <div><GalleryItem character={character} /></div>
            
        </div>
        }
        </div>
        
    );
} 