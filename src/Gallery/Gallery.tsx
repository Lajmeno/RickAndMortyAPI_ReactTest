import { useEffect, useState } from "react";
import GalleryItem from "../GaleryItem/GalleryItem";
import {Character, Response as ResponseBody} from '../model';

import './Gallery.css';

export default function Gallery(){

    const [searchItem, setSearchItem] = useState("");
    const [items, setItems] = useState([] as Array<Character>);

    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchPage(page);
    }, [page]);

    const fetchPage = (page:number) => {
        console.log("Fetch Beginn");
        //const num = page > 0 ? (page > 42 ? 42 : page) : "";
        fetch(`https://rickandmortyapi.com/api/character${'?page=' + page}`)
        .then(response => response.json())
        .then((responseBody: ResponseBody) =>  responseBody.results)
        .then(filteredItems => setItems(filteredItems))
    };

    



    /*

    function filterResponse(responseBody:ResponseBody): void {
        const array = responseBody.results
        .filter(ele => ele.name.toLowerCase().includes(searchItem.toLowerCase()));

        setItems(array);
    };
    */

    /*
    const characters = apiJSON.results
    .filter(ele => ele.name.toLowerCase().includes(searchItem.toLowerCase()))
    .map(vals => ({name: vals.name, species: vals.species, origin: vals.origin.name, image: vals.image}))
    .map(element => <GalleryItem key={element.name} character={element}/>);
    */

    return(
        <div className="galleryMain">
            <div className="gallerysSearchBar">
                <input className="gallerySearchInput" placeholder="Search Character" value={searchItem} onChange ={v => setSearchItem(v.target.value)}></input>
                <button onClick={() => page > 1 ? setPage(page - 1): 1}>prev</button>
                <button onClick={() => page < 43 ? setPage(page +1) : 43}>next</button>
            </div>

            <div className= "gallery" >
                {
                items
                .filter(ele => ele.name.toLowerCase().includes(searchItem.toLowerCase()))
                .map(character => <GalleryItem key={character.id} character={character}/>)
                }
            </div>
        </div>
        
    )
}

