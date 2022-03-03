import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Character } from "./model";


export default function CharacterDetail() {

    const param = useParams();

    const [character, setCharacter] = useState({} as Character);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${param.id}`)
        .then(response => {return response.json();})
        .then(character => setCharacter(character))
    }, []);

    return(
        <div>
            {character.id &&
            <div>                
                <div>these are the details of {character.name} of id: {param.id}</div>
                <div data-testid="gallery-test-item" className="card">
                    <Link to={`/gallery`}><img data-testid="gallery-test-item-img" className="card-image" src={character.image} alt="character-image" /> </Link>
                    <div className="card-content">
                        <div data-testid="gallery-item-name" className="title is-4" >{character.name}</div>
                        <div className="subtitle is-4" >{character.species}</div>
                        <div className="subtitle is-4">{character.origin.name}</div>
                    </div>               
                 </div>
            </div>
            }
        </div>  
    );
} 