import { useEffect, useState } from "react";
import GalleryItem from "../GaleryItem/GalleryItem";
import {Character, Response as ResponseBody} from '../model';

import './Gallery.css';

export default function Gallery(){

    const [searchItem, setSearchItem] = useState("");
    const [items, setItems] = useState([] as Array<Character>);

    const [page, setPage] = useState(localStorage.getItem('page') ?? "1");

    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        localStorage.setItem("page", page);
        fetchPage(page);
    }, [page]);

    const fetchPage = (page:string) => {
        console.log("Fetch Beginn");
        fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
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

    const prev = () => {
        if(parseInt(page) > 1) {
            setPage(oldPage => `${parseInt(oldPage) - 1}`)
        }
    }
    const next = () => {
        if(parseInt(page) < 42) {
            setPage(oldPage => `${parseInt(oldPage) + 1}`)
        }
    }

    return(
        <div className="section">
            <div className="section ">
                <input data-testid ="gallery-search-input" className="input" placeholder="Search Character" value={searchItem} onChange ={v => setSearchItem(v.target.value)}></input>
                <button onClick={prev} >prev</button>
                <button onClick={next} >next</button>
            </div>
            <div className= "columns is-multiline is-mobile" >
                {    
                items
                .filter(ele => ele.name.toLowerCase().includes(searchItem.toLowerCase()))
                .map((character, index) => <div className="column is-one-third" data-testid= "all-items" key={character.id}><GalleryItem  character={character}/></div>)
                }
            </div>
            <div style={{backgroundColor: "lightblue"}}>
                {errorMessage}
            </div>            
        </div>
        
    )
}

