import { useEffect, useState } from "react";
import GalleryItem from "../GaleryItem/GalleryItem";
import {Character, Response as ResponseBody} from '../model';

import './Gallery.css';

export default function Gallery(){

    const [searchItem, setSearchItem] = useState("");
    const [items, setItems] = useState([] as Array<Character>);

    const [page, setPage] = useState(1);

    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        fetchPage(page);
    }, [page]);

    const fetchPage = (page:number) => {
        console.log("Fetch Beginn");
        fetch(`https://rickandmortyapi.com/api/character${'?page=' + page}`)
        .then(response => {
            
            if(response.status === 200){
                return response.json();
            }
            throw new Error("No Characters here");
        
        })
        .then((responseBody: ResponseBody) =>  responseBody.results)
        .then(filteredItems => setItems(filteredItems))
        .catch((e : Error) => setErrorMessage(e.message));
    };

    return(
        <div className="galleryMain">
            <div className="gallerysSearchBar">
                <input data-testid ="gallery-search-input" className="gallerySearchInput" placeholder="Search Character" value={searchItem} onChange ={v => setSearchItem(v.target.value)}></input>
                <button /*onClick={() => page > 1 ? setPage(page - 1): 1}*/ onClick={() =>setPage(page-1)}>prev</button>
                <button /*onClick={() => page < 42 ? setPage(page +1) : 42}*/ onClick={() =>setPage(page+1)}>next</button>
            </div>
            <div className= "gallery" >
                {    
                items
                .filter(ele => ele.name.toLowerCase().includes(searchItem.toLowerCase()))
                .map((character, index) => <div data-testid= "all-items" key={character.id}><GalleryItem  character={character}/></div>)
                }
            </div>
            <div style={{backgroundColor: "lightblue"}}>
                {errorMessage}
            </div>            
        </div>
        
    )
}

